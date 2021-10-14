import axios from "axios";
import { baseUrl, getConfig } from "../config";

export const generateReferralLink = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/user/API/referal-link`,
      getConfig(getState)
    );

    dispatch({ type: "GET_REF_LINK", payload: res.data });
  } catch (err) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: err?.response?.data,
    });
  }
};
export const initialSavingsRequest =
  (formdata) => async (dispatch, getState) => {
    try {
      const res = await axios.post(
        `${baseUrl}/user/API/initialsaving`,
        { formdata },
        getConfig(getState)
      );

      dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
    } catch (err) {
      dispatch({
        type: "GET_ERROR_MSG",
        payload: err?.response?.data,
      });
    }
  };

export const increaseSavingsRequest =
  (formdata) => async (dispatch, getState) => {
    try {
      const res = await axios.post(
        `${baseUrl}/user/API/increasesaving`,
        { formdata },
        getConfig(getState)
      );

      dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
    } catch (err) {
      dispatch({
        type: "GET_ERROR_MSG",
        payload: err?.response?.data,
      });
    }
  };

export const decreaseSavingsRequest =
  (formdata) => async (dispatch, getState) => {
    try {
      const res = await axios.post(
        `${baseUrl}/user/API/decreasesaving`,
        { formdata },
        getConfig(getState)
      );

      dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
    } catch (err) {
      dispatch({
        type: "GET_ERROR_MSG",
        payload: err?.response?.data,
      });
    }
  };

export const savingsTransactionHistory = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "http://finappwebapi.somee.com/api/savingTransactions",
      getConfig(getState)
    );

    dispatch({ type: "GET_SAVINGS", payload: res.data });
  } catch (err) {
    dispatch({
      type: "GET_SAVINGS_FAIL",
      payload: err?.response?.data,
    });
  }
};

export const loansTransactionHistory = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "http://finappwebapi.somee.com/api/loansTransactions",
      getConfig(getState)
    );

    dispatch({ type: "GET_LOANS", payload: res.data });
  } catch (err) {
    dispatch({
      type: "GET_LOANS_FAIL",
      payload: err?.response?.data,
    });
  }
};
export const storeformData = (formdata) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_FORM_DATA", payload: formdata });
  };
};
