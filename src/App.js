import React from "react";
import { Route, Switch } from "react-router-dom";
import withSplashScreen from "./components/withSplashScreen";

import "./App.css";
import Login from "./components/login/Login";
import LandingPage from "./screens/land/LandingPage";
import BlogMainPage from "./screens/blogs/BlogMainPage";

function App(props) {
  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage />} />

      <Switch>
        <Route exact path="/signin" render={() => <Login {...props} />} />
        <Route
          exact
          path="/covid-blog/:id/:id"
          render={() => <BlogMainPage />}
        />
        <Route
          exact
          path="/covid-blog/public-advice"
          render={() => <BlogMainPage />}
        />
        <Route
          exact
          path="/covid-blog/health-workers"
          render={() => <BlogMainPage />}
        />
        <Route
          exact
          path="/covid-blog/travel-advice"
          render={() => <BlogMainPage />}
        />
        <Route
          exact
          path="/covid-blog/technical-guidance"
          render={() => <BlogMainPage />}
        />
      </Switch>
    </div>
  );
}

export default withSplashScreen(App);
