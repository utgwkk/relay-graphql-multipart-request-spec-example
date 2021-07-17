import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

import { FileList_files$key } from "./__generated__/FileList_files.graphql";

type FileListProps = {
  files: FileList_files$key;
};

export const FileList: React.VFC<FileListProps> = ({ files }) => {
  const { files: fileList } = useFragment(
    graphql`
      fragment FileList_files on Query {
        files {
          edges {
            node {
              filename
              length
            }
          }
        }
      }
    `,
    files
  );

  return (
    <ul>
      {(fileList?.edges ?? []).map((edge, i) => {
        if (!(edge && edge.node)) {
          return null;
        }

        const file = edge.node;

        return (
          <li key={i}>
            {file.filename} ({file.length} bytes)
          </li>
        );
      })}
    </ul>
  );
};