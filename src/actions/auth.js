import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CLEAR_PROFILE,
} from "./types.js";

import setAuthToken from "../utils/setAuthToken";

//loadUser
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:5000/api/v1/auth/me");
    // console.log(res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
// login user
export const login = ({ email, password }) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  console.log(body);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// register user
export const register = ({ name, email, password, confirmpassword }) => async (
  dispatch
) => {
  const body = JSON.stringify({ name, email, password, confirmpassword });
  console.log(body);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/auth/register",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/auth/logout");
    dispatch({
      type: CLEAR_PROFILE,
    });
    dispatch({
      type: LOGOUT,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePassword = ({ currentPassword, newPassword }) => async (
  dispatch
) => {
  const body = JSON.stringify({ currentPassword, newPassword });
  try {
    const res = await axios.put(
      "http://localhost:5000/api/v1/auth/updatepassword",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("success", res);
  } catch (err) {
    console.error("helllo");
  }
};

export const resetPassword = ({ newPassword, token }) => async (dispatch) => {
  const body = JSON.stringify({ newPassword });
  try {
    const res = await axios.put(
      `http://65.1.90.187/api/v1/auth/resetpassword/${token}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("success", res);
  } catch (err) {
    console.error("helllo");
  }
};

export const forgotPassword = ({ email }) => async (dispatch) => {
  const body = JSON.stringify({ email });
  try {
    const res = await axios.post(
      `http://localhost:5000/api/v1/auth/forgotpassword`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("success", res);
  } catch (err) {
    console.error("helllo");
  }
};
