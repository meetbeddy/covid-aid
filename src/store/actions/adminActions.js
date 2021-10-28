import axios from "axios";
import { baseUrl, getConfig } from "../config";

export const fetchCases = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/user/fetchcases`,
      getConfig(getState)
    );
    dispatch({ type: "GET_CASES", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const submitTestResult = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/user/testresult`,
      data,
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const addCaseContact = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/user/addcontact`,
      data,
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const fetchContact = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/user/fetchcontact/${id}`,
      getConfig(getState)
    );
    dispatch({ type: "GET_CONTACTS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const addFollowUpDetail = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/api/user/followup}`,
      data,
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

// export const wakeup = () => async (dispatch, getState) => {
//   try {
//     const res = await axios.get(
//       `${baseUrl}/admin/API/getmembers`,
//       getConfig(getState)
//     );

//     dispatch({ type: "GET_SUCCESS", payload: res.data });
//   } catch (err) {
//     dispatch({ type: "GET_ERROR", payload: err.response?.data });
//   }
// };
