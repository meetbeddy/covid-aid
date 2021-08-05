import React, { useState } from "react";
import CovidTracker from "./screens/covid-tracker/CovidTracker";
import NavBar from "./components/NavBar";
import SelfAssessment from "./screens/diagnosis/SelfAssessment";
import { Route, Switch } from "react-router-dom";

import "./App.css";

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
    </div>
  );
}

export default App;
