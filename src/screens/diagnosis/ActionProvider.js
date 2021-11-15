// let clientMessage;
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.createClientMessage = createClientMessage;
    this.setState = setStateFunc;
  }

  invalidInput() {
    const errorMessage = this.createChatBotMessage(
      "Please enter a valid reply to continue"
    );
    this.updateChatbotState(errorMessage);
  }
  age() {
    const ageMessage = this.createChatBotMessage("what is your age?", {
      widget: "Ages",
    });
    this.updateChatbotState(ageMessage);
  }
  handleAgeSelect = (e) => {
    localStorage.setItem("age", e.target.value);
    const client = this.createClientMessage(e.target.value);

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, client],
    }));

    const reply = this.createChatBotMessage(
      "Do you have any of these life-threatening symptoms?",
      {
        widget: "symptoms",
        delay: 500,
      }
    );

    this.updateChatbotState(reply);
  };
  handleSymptomClick = (e) => {
    localStorage.setItem("symptom", e.currentTarget.value);
    const client = this.createClientMessage(e.currentTarget.value);

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, client],
    }));
    const reply = this.createChatBotMessage(
      "Have you had contact with someone diagnosed with COVID-19 or being notified that you have being exposed to it?",
      {
        widget: "decision",
        delay: 500,
      }
    );

    this.updateChatbotState(reply);
  };
  conclusion = (e) => {
    // localStorage.setItem("contact", e.currentTarget.value);
    const result = {
      age: localStorage.getItem("age"),
      symptoms: localStorage.getItem("symptoms"),
      contact: e.currentTarget.value,
    };
    const client = this.createClientMessage(e.currentTarget.value);
    let text;

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, client],
    }));
    if (result.symptoms === "Yes" || result.contact === "Yes") {
      text = this.createChatBotMessage(
        "Your Answer indicate that you should call your health care provider and describe your symptoms  or you can have one of our health care agent contact by filling the report a case form on this website",
        {
          widget: "fillform",
          delay: 500,
        }
      );
    } else {
      text = this.createChatBotMessage(
        `your Answer indicates that you are at low risk for COVID-19 at this time, however you should protect your self and others from the spread of COVID-19.Here are some tips to help you and your family`,
        {
          widget: "learnmore",
          delay: 500,
        }
      );
    }

    this.updateChatbotState(text);
  };
  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
