import React from "react";
import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import CovidTracker from "../covid-tracker/CovidTracker";
import SelfAssessment from "../diagnosis/SelfAssessment";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
export default function LandingPage() {
  const [open, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!open);
  };
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation open={open} toggleOpen={toggleOpen} />
      <Header data={landingPageData.Header} />
      <CovidTracker />
      <SelfAssessment open={open} toggleOpen={toggleOpen} />
    </div>
  );
}
