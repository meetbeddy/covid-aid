import React from "react";
import { Route, Switch } from "react-router-dom";
import withSplashScreen from "./components/withSplashScreen";

import "./App.css";
import Login from "./components/login/Login";
import LandingPage from "./screens/land/LandingPage";

function App(props) {
  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage />} />

      <Switch>
        <Route exact path="/signin" render={() => <Login {...props} />} />
      </Switch>
    </div>
  );
}

export default withSplashScreen(App);
