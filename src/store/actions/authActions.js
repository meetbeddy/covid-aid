import axios from "axios";
import { baseUrl } from "../config";

const config = {
  headers: {
    Content_Type: "application/json",
  },
};
export const signIn = (formdata) => async (dispatch) => {
  const { userType } = formdata;

  try {
    let res;
    if (userType === "member") {
      res = await axios.post(`${baseUrl}/user/API/signin`, formdata, config);
    }
    if (userType === "admin") {
      res = await axios.post(`${baseUrl}/admin/API/login`, formdata, config);
    }

    dispatch({ type: "AUTH_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_ERROR_MSG", payload: error?.response?.data });
  }
};

export const signUp = (formdata) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/user/API/signup`, formdata);

    dispatch({ type: "AUTH_SUCCESS", payload: res?.data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const forgotpassword = (email) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/user/API/forgotpassword`, email);

    dispatch({ type: "GET_SUCCESS_MSG", payload: res?.data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const resetpassword = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/user/API/resetpassword`, data);

    dispatch({ type: "RESET_SUCCESS", payload: res?.data });
  } catch (error) {
    dispatch({
      type: "RESET_ERROR",
      payload: error?.response?.data,
    });
  }
};

export const checkLink = (token) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/user/API/checklink/${token}`);

    dispatch({ type: "GET_SUCCESS_MSG", payload: res?.data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const getReferer = (ref) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/user/API/getreferer/${ref}`);

    dispatch({ type: "GET_REFERER_SUCCESS", payload: res?.data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

export const storeformData = (formdata) => {
  return (dispatch) => {
    dispatch({ type: "REG_FORM_DATA", payload: formdata });
  };
};
