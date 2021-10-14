import axios from "axios";
import { baseUrl, getConfig } from "../config";

export const fetchMembers = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/admin/API/getallusers`,
      getConfig(getState)
    );
    dispatch({ type: "GET_MEMBERS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const fetchReferrals = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/admin/api/getreferals`,
      getConfig(getState)
    );
    dispatch({ type: "GET_REFERRALS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const confirmUser = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/admin/API/confirm/${id}`,
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const acknowledgeReciept =
  (userdata, type) => async (dispatch, getState) => {
    try {
      let res;
      if (type === "initial") {
        res = await axios.post(
          `${baseUrl}/admin/API/acknowledgereciept`,
          { userdata },
          getConfig(getState)
        );
      }
      if (type === "increase") {
        res = await axios.post(
          `${baseUrl}/admin/API/acknowledgeincreasereciept`,
          { userdata },
          getConfig(getState)
        );
      }
      if (type === "decrease") {
        res = await axios.post(
          `${baseUrl}/admin/API/acknowledgedecreasereciept`,
          { userdata },
          getConfig(getState)
        );
      }
      dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
    } catch (err) {
      dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
    }
  };

export const declineReciept = (userdata) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/admin/API/declinereciept`,
      { userdata },
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS_MSG", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR_MSG", payload: err.response?.data });
  }
};

export const sendEmail = (data) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/admin/API/sendemail`,
      data,
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR", payload: err.response?.data });
  }
};

export const wakeup = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${baseUrl}/admin/API/getmembers`,
      getConfig(getState)
    );

    dispatch({ type: "GET_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_ERROR", payload: err.response?.data });
  }
};
