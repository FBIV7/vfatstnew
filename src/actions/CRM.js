import axios from "axios";
import { ADD_PACKAGE, GET_PACKAGE, ADD_CASE } from "./types.js";

//GET PACKAGE
export const getPackage = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/package/getpackage"
    );
    dispatch({
      type: GET_PACKAGE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

//add package
export const addPackage = (formdata) => async (dispatch) => {
  const body = JSON.stringify(formdata);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/package/add",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: ADD_PACKAGE,
    });
    dispatch(getPackage());
  } catch (err) {
    console.log(err);
  }
};

//add registration
export const addCase = (formdata) => async (dispatch) => {
  const body = JSON.stringify(formdata);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/case/register",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    dispatch({
      type: ADD_CASE,
    });
  } catch (err) {
    console.log(err);
  }
};
