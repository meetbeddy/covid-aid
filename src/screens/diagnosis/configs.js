import { createChatBotMessage } from "react-chatbot-kit";
import {
  Ages,
  Decision,
  Symptoms,
  LearnMore,
  Contact,
  FormLink,
} from "./widgets";

const configs = {
  botName: "CovidAid Bot",
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm here to help you assess your covid-19 risk factor. Reply OKAY to get started"
    ),
  ],

  widgets: [
    {
      widgetName: "Ages",
      widgetFunc: (props) => <Ages {...props} />,
    },
    {
      widgetName: "symptoms",
      widgetFunc: (props) => <Symptoms {...props} />,
    },
    {
      widgetName: "decision",
      widgetFunc: (props) => <Decision {...props} />,
    },
    {
      widgetName: "contact",
      widgetFunc: (props) => <Contact {...props} />,
    },
    {
      widgetName: "learnmore",
      widgetFunc: (props) => <LearnMore {...props} />,
    },
    {
      widgetName: "fillform",
      widgetFunc: (props) => <FormLink {...props} />,
    },
  ],

  customStyles: {
    botMessageBox: {
      width: 100,
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default configs;
