import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { loadQuery, usePreloadedQuery } from "react-relay";

import RelayEnvironment from "./RelayEnvironment";
import { AppQuery } from "./__generated__/AppQuery.graphql";

const appQuery = graphql`
  query AppQuery {
    files {
      filename
      length
    }
  }
`;

const preloadedQuery = loadQuery<AppQuery>(RelayEnvironment, appQuery, {});

export const App: React.VFC = () => {
  const { files } = usePreloadedQuery(appQuery, preloadedQuery);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <ul>
        {files.map((file, i) => (
          <li key={i}>
            {file.filename} ({file.length} bytes)
          </li>
        ))}
      </ul>
    </div>
  );
};
