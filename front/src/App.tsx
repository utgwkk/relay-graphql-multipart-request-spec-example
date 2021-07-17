import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { loadQuery, usePreloadedQuery } from "react-relay";

import { FileList } from "./components/FileList";
import RelayEnvironment from "./RelayEnvironment";
import { AppQuery } from "./__generated__/AppQuery.graphql";

const appQuery = graphql`
  query AppQuery {
    ...FileList_files
  }
`;

const preloadedQuery = loadQuery<AppQuery>(RelayEnvironment, appQuery, {});

export const App: React.VFC = () => {
  const data = usePreloadedQuery(appQuery, preloadedQuery);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <FileList files={data} />
    </div>
  );
};
