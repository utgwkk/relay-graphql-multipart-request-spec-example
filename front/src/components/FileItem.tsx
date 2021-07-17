import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

import { FileItem_file$key } from "./__generated__/FileItem_file.graphql";

type FileItemProps = {
  file: FileItem_file$key;
};

export const FileItem: React.VFC<FileItemProps> = ({ file }) => {
  const fileData = useFragment(
    graphql`
      fragment FileItem_file on File {
        id
        filename
        uploadedFilename
        length
      }
    `,
    file
  );

  return (
    <li>
      <a
        href={`http://localhost:4000/api/download/${fileData.uploadedFilename}`}
      >
        {fileData.filename}
      </a>{" "}
      ({fileData.length} bytes)
    </li>
  );
};
