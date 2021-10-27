import React from "react";
import { Route } from "react-router-dom";
import LoginRequired from "./LoginRequired";
import AccessDenied from "./AccessDenied";

const renderFunction = (props, Component, user) => {
  switch (user) {
    case null:
      return <LoginRequired />;

    default:
      if (user) return <Component {...props} />;
      else return <AccessDenied />;
  }
};

const PrivateRoute = ({ user, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => renderFunction(props, Component, user)}
    />
  );
};

export default PrivateRoute;
