const initialState = {
  members: [],
  referrals: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MEMBERS":
      return {
        ...state,
        members: action?.payload,
      };
    case "GET_REFERRALS":
      return {
        ...state,
        referrals: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
