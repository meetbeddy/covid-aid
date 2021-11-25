import React from "react";
import { Route, Switch } from "react-router-dom";
import withSplashScreen from "./components/withSplashScreen";
import "./App.css";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/login/Login";
import LandingPage from "./screens/land/LandingPage";
import BlogMainPage from "./screens/blogs/BlogMainPage";
import Dashboard from "./components/dashboard/Dashboard";
import ReportCase from "./screens/land/ReportCase";
import SuspectedCase from "./components/staff/SuspectedCase";
import TestReporting from "./components/staff/TestReporting";
import TestForm from "./components/forms/TestForm";
import ConfirmedCases from "./components/staff/ConfirmedCases";
import ConfirmedCaseOverview from "./components/staff/ConfirmedCaseOverview";
import ViewSuspectedCases from "./components/staff/ViewSuspectedCases";
import ClosedCases from "./components/staff/ClosedCases";
import CreateUser from "./components/staff/CreateUser";
import Cases from "./components/staff/Cases";

function App(props) {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage />} />
      <Route
        path="/dashboard"
        render={() =>
          user ? <Dashboard user={user} /> : <LandingPage user={user} />
        }
      />

      <Switch>
        <Route exact path="/signin" render={() => <Login user={user} />} />
        <Route exact path="/report-case" render={() => <ReportCase />} />
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
        <PrivateRoute
          exact
          user={user}
          path="/dashboard/create-user"
          component={CreateUser}
        />
        <PrivateRoute
          exact
          user={user}
          path="/dashboard/cases"
          component={Cases}
        />
        <PrivateRoute
          exact
          user={user}
          path="/dashboard/enter-patient"
          component={SuspectedCase}
        />
        <PrivateRoute
          exact
          user={user}
          path="/dashboard/test-reporting"
          component={TestReporting}
        />
        <PrivateRoute
          exact
          user={user}
          path="/dashboard/test-reporting/:id"
          component={TestForm}
        />
        <PrivateRoute
          exact
          user={user}
          path="/dashboard/manage-case/confirmed-cases"
          component={ConfirmedCases}
        />
        <PrivateRoute
          exact
          user={user}
          path="/dashboard/confirmed-cases/:id"
          component={ConfirmedCaseOverview}
        />
        <PrivateRoute
          exact
          user={user}
          path="/dashboard/manage-case/suspected-cases"
          component={ViewSuspectedCases}
        />

        <PrivateRoute
          exact
          user={user}
          path="/dashboard/manage-case/closed-cases"
          component={ClosedCases}
        />
      </Switch>
    </div>
  );
}

export default withSplashScreen(App);
