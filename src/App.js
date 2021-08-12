import React, { useState } from "react";
import CovidTracker from "./screens/covid-tracker/CovidTracker";
import NavBar from "./components/navbar/NavBar";
import SelfAssessment from "./screens/diagnosis/SelfAssessment";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/login/Login";

function App() {
  const [open, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!open);
  };
  return (
    <div className="App">
      <NavBar open={open} toggleOpen={toggleOpen} />
      <CovidTracker />
      <SelfAssessment open={open} toggleOpen={toggleOpen} />
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
