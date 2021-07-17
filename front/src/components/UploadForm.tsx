import { graphql } from "babel-plugin-relay/macro";
import React, { useCallback, useRef } from "react";
import { useRelayEnvironment } from "react-relay";
import { commitMutation } from "relay-runtime";

type UploadFormProps = {
  connections: string[];
};

export const UploadForm: React.VFC<UploadFormProps> = ({ connections }) => {
  const environment = useRelayEnvironment();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler = useCallback(
    (e) => {
      if (!(ref.current && ref.current.files)) {
        return;
      }
      e.preventDefault();

      const files = ref.current.files;
      const uploadables = {
        "variables.file": files[0],
      };

      commitMutation(environment, {
        mutation: graphql`
          mutation UploadFormMutation($connections: [ID!]!, $file: Upload!) {
            uploadFile(file: $file)
              @appendNode(connections: $connections, edgeTypeName: "FileEdge") {
              ...FileItem_file
            }
          }
        `,
        variables: {
          file: null,
          connections,
        },
        uploadables,
      });
    },
    [connections, environment]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" id="file" ref={ref} required />
      <input type="submit" value="Upload" />
    </form>
  );
};
