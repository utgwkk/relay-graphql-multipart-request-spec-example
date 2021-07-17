import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { loadQuery, usePreloadedQuery } from "react-relay";

import RelayEnvironment from "./RelayEnvironment";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import { FileItem } from "./components/FileItem";
import { UploadForm } from "./components/UploadForm";

const appQuery = graphql`
  query AppQuery {
    files(first: 10) @connection(key: "App_files") {
      __id
      edges {
        node {
          ...FileItem_file
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery<AppQuery>(RelayEnvironment, appQuery, {});

export const App: React.VFC = () => {
  const { files } = usePreloadedQuery(appQuery, preloadedQuery);
  if (!files) {
    return null;
  }

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <ul>
        {(files?.edges ?? []).map((edge, i) => {
          if (!edge?.node) {
            return null;
          }

          return <FileItem file={edge.node} />;
        })}
      </ul>
      <hr />
      <UploadForm connections={[files.__id]} />
    </div>
  );
};
