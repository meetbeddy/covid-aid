const initState = {
  initialRequest: {
    shareCapitalAmount: "",
    shareCapitalMonths: "",
    ordinarySavingsAmount: "",
    ordinarySavingsMonths: "",
    christmasSavingsAmount: "",
    christmasSavingsMonths: "",
    educationSavingsAmount: "",
    educationSavingsMonths: "",
    retirementSavingsAmount: "",
    retirementSavingsMonths: "",
  },
  registration: {},
};

const instructionReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_FORM_DATA":
      return {
        ...state,
        initialRequest: action?.payload,
      };
    case "REG_FORM_DATA":
      return {
        ...state,
        registration: action?.payload,
      };

    default:
      return state;
  }
};
export default instructionReducer;
