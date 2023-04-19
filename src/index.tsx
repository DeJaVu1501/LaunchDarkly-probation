import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

import { LoginScreen } from "./screens/login";
import { DashboardScreen } from "./screens/dashboard";

import "./index.css";

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: process.env.REACT_APP_LAUNCH_DARKLY_CLIENT_ID!,
    reactOptions: {
      useCamelCaseFlagKeys: false,
    },
  });

  ReactDOM.render(
    <React.StrictMode>
      <LDProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/dashboard" component={DashboardScreen} />
            <Route component={() => <Redirect to="/login" />} />
          </Switch>
        </Router>
      </LDProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
