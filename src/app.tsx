import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { LoginScreen } from "./screens/login";
import { DashboardScreen } from "./screens/dashboard";
import React from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

export const App = () => {
  const flags = useFlags();
  console.log(flags);

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/dashboard" component={DashboardScreen} />
        <Route component={() => <Redirect to="/login" />} />
      </Switch>
    </Router>
  );
};
