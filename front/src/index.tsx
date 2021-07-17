import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay";

import { App } from "./App";
import RelayEnvironment from "./RelayEnvironment";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
