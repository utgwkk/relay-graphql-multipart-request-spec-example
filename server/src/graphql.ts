import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { FileUpload, GraphQLUpload } from "graphql-upload";

type UploadedFile = {
  filename: string;
  length: number;
};

const uploadedFiles: UploadedFile[] = [];

const FileType = new GraphQLObjectType<UploadedFile>({
  name: "File",
  fields: {
    filename: {
      type: GraphQLNonNull(GraphQLString),
      resolve(parent) {
        return parent.filename;
      },
    },
    length: {
      type: GraphQLNonNull(GraphQLInt),
      resolve(parent) {
        return parent.length;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      files: {
        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(FileType))),
        resolve() {
          return uploadedFiles;
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      uploadFile: {
        type: FileType,
        args: {
          file: {
            type: GraphQLNonNull(GraphQLUpload),
          },
        },
        async resolve(parent, { file }) {
          const { filename, createReadStream } =
            await (file as Promise<FileUpload>);

          let length = 0;
          const stream = createReadStream();
          for await (const chunk of stream) {
            length += chunk.length;
          }

          const uploadedFile = { filename, length };
          uploadedFiles.push(uploadedFile);

          return uploadedFile;
        },
      },
    },
  }),
});
