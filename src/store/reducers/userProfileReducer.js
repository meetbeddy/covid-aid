const initState = {
  profile: {},
  savings: [],
  loans: [],
  refLink: "",
};

const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        profile: action?.payload,
      };
    case "GET_LOANS":
      return {
        ...state,
        loans: action?.payload,
      };
    case "GET_SAVINGS":
      return {
        ...state,
        savings: action?.payload,
      };

    case "GET_REF_LINK":
      return {
        ...state,
        refLink: action.payload,
      };
    default:
      return state;
  }
};
export default userProfileReducer;
