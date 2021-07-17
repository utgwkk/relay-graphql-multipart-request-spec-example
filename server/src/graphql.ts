import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import {
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from "graphql-relay";
import { FileUpload, GraphQLUpload } from "graphql-upload";

let counter = 0;

type UploadedFile = {
  id: number;
  filename: string;
  length: number;
  uploadedAt: Date;
};

type Database = {
  files: { [id: string]: UploadedFile };
};

const database: Database = {
  files: {},
};

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type !== "files") {
      throw new Error(`Unknown type: ${type}`);
    }
    return database[type][id];
  },
  (): any => {
    return FileType;
  }
);

const DateTimeType = new GraphQLScalarType({
  name: "ISO8601DateTime",
  serialize(date: Date) {
    return date.toISOString();
  },
});

const FileType = new GraphQLObjectType<UploadedFile>({
  name: "File",
  fields: {
    id: globalIdField<UploadedFile>(),
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
    uploadedAt: {
      type: GraphQLNonNull(DateTimeType),
      resolve(parent) {
        return parent.uploadedAt;
      },
    },
  },
  interfaces: [nodeInterface],
});

const { connectionType: FileConnection } = connectionDefinitions({
  nodeType: FileType,
});

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      node: nodeField,
      files: {
        type: FileConnection,
        resolve(parent, args) {
          const files = Object.values(database.files);

          // ORDER BY id ASC
          files.sort((a, b) => a.id - b.id);
          return connectionFromArray(files, args);
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

          const id = counter;
          counter++;
          const uploadedFile = { id, filename, length, uploadedAt: new Date() };
          database.files[id] = uploadedFile;

          return uploadedFile;
        },
      },
    },
  }),
});
