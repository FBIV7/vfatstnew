import axios from "axios";
import { GET_CASE, GET_PACKAGEBYID, GET_CASEBYID } from "./types.js";

//GET initiation cases
export const getinitiationCases = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://15.207.67.66:5000/api/v1/case/getCases?status=initiation"
    );
    dispatch({
      type: GET_CASE,
      payload: res.data.cases,
    });
  } catch (err) {
    console.log(err);
  }
};

// get package by id
export const getPackagebyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://15.207.67.66:5000/api/v1/package/getpackagebyID/${id}`
    );
    dispatch({
      type: GET_PACKAGEBYID,
      payload: res.data.package,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// get cases by id
export const getCasebyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://15.207.67.66:5000/api/v1/case/getcasesbyid/${id}`
    );
    dispatch({
      type: GET_CASEBYID,
      payload: res.data.cases,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const educationSubmit = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);

    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/form/education",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
export const addressSubmit = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);

    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/form/address",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const employmentSubmit = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);

    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/form/employment",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const referenceSubmit = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);

    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/form/reference",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
