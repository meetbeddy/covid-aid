class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const wordBank = [
      "1",
      "below 10",
      "10-19",
      "20-29",
      "30-39",
      "40-49",
      "50-59",
      "above 60",
      "no",
      "yes",
    ];
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("1")) {
      this.actionProvider.age();
    }

    if (!wordBank.includes(lowerCaseMessage)) {
      this.actionProvider.invalidInput();
    }
  }
}

export default MessageParser;
