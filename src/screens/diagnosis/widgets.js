import { Button } from "@material-ui/core";
import "./widget.css";

export const Ages = (props) => {
  const options = [
    { text: "Below 10", handler: props.actionProvider.handleAgeSelect, id: 1 },
    { text: "10-19", handler: props.actionProvider.handleAgeSelect, id: 2 },
    { text: "20-29", handler: props.actionProvider.handleAgeSelect, id: 3 },
    { text: "30-39", handler: props.actionProvider.handleAgeSelect, id: 4 },
    { text: "40-49", handler: props.actionProvider.handleAgeSelect, id: 5 },
    { text: "50-59", handler: props.actionProvider.handleAgeSelect, id: 6 },
    { text: "above 60", handler: props.actionProvider.handleAgeSelect, id: 7 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="widget-button"
      key={option.id}
      value={option.text}
      onClick={(e) => option.handler(e)}
    >
      {option.text}
    </button>
  ));

  return (
    <div className="widget-container" id="widget">
      {optionsMarkup}
    </div>
  );
};

export const Symptoms = (props) => {
  const options = [
    { text: "No", handler: props.actionProvider.handleSymptomClick, id: 1 },
    { text: "Yes", handler: props.actionProvider.handleSymptomClick, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <Button
      id="widget"
      variant="contained"
      color="primary"
      size="large"
      className="widget-button-primary"
      key={option.id}
      value={option.text}
      onClick={(e) => option.handler(e)}
    >
      {option.text}
    </Button>
  ));

  return (
    <div className="widget-text-container" id="widget">
      <ul>
        <li>Pale, gray, or blue-colored skin, lips, or nail beds,</li>
        <li>
          {" "}
          depending on skin tone Severe and constant pain or pressure in the
          chest Difficulty breathing (such as gasping for air, being unable to
          walk or talk without catching your breath, severe wheezing, nostrils
          flaring, grunting, or ribs or stomach moving in and out deeply and
          rapidly as you breathe),
        </li>
        <li>New disorientation (acting confused),</li>
        <li>
          Unconscious or very difficult to wake up Slurred speech or difficulty
          speaking (new or worsening) New or worsening seizures Signs of low
          blood pressure (too weak to stand, dizziness, lightheaded, feeling
          cold, pale, clammy skin)
        </li>
        <li>
          Dehydration (dry lips and mouth, not urinating much, sunken eyes),
        </li>
      </ul>

      {optionsMarkup}
    </div>
  );
};

export const Decision = (props) => {
  const options = [
    { text: "No", handler: props.actionProvider.conclusion, id: 1 },
    { text: "Yes", handler: props.actionProvider.conclusion, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <Button
      id="widget"
      variant="outlined"
      size="large"
      className="widget-button-primary"
      key={option.id}
      value={option.text}
      onClick={(e) => option.handler(e)}
    >
      {option.text}
    </Button>
  ));

  return (
    <div className="widget-text-container" id="widget">
      {optionsMarkup}
    </div>
  );
};

export const Contact = (props) => {
  const options = [
    { text: "No", handler: props.actionProvider.handleSymptomClick, id: 1 },
    { text: "Yes", handler: props.actionProvider.handleSymptomClick, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <Button
      id="widget"
      variant="outlined"
      size="large"
      className="widget-button-primary"
      key={option.id}
      value={option.text}
      onClick={(e) => option.handler(e)}
    >
      {option.text}
    </Button>
  ));

  return <div className="widget-text-container">{optionsMarkup}</div>;
};

export const LearnMore = (props) => {
  const options = [
    {
      text: "how to ptotect yourself and your family",
      url: "https://www.cdc.gov/coronavirus/2019/-ncov/prevent-getting-sick/prevention.html",

      id: 1,
    },
    {
      text: "Social and Physical Distancing and Self-Quarantine",
      url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-social-distancing-and-self-quarantine",
      id: 2,
    },
  ];

  const optionsMarkup = options.map((link) => (
    <ul className="list" id="widget">
      <li key={link.id} className="list-item">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="item-url"
        >
          {" "}
          {link.text}
        </a>
      </li>
    </ul>
  ));

  return <div className="widget-text-container">{optionsMarkup}</div>;
};

export const FormLink = (props) => {
  const options = [
    {
      text: "Take me to form",
      url: "/report-case",
      id: 1,
    },
  ];

  const optionsMarkup = options.map((link) => (
    <ul className="list">
      <li key={link.id} className="list-item">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="item-url"
        >
          {" "}
          {link.text}
        </a>
      </li>
    </ul>
  ));

  return <div className="widget-text-container">{optionsMarkup}</div>;
};
