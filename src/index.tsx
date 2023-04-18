import React from "react";
import ReactDOM from "react-dom";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

import { App } from "./app";

import "./index.css";

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: process.env.REACT_APP_LAUNCH_DARKLY_CLIENT_ID!,
    reactOptions: {},
  });

  ReactDOM.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
