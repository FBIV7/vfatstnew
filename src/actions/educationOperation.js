import {
  GET_EDU_OPERATION,
  GET_EDU_SAVE,
  GET_EDU_INSUFFCLEAR,
  GET_EDU_ASSIGNVENDOR,
  GET_VENDORBYSTATE,
} from "./types";
import { apiurl } from "./constant";
import { setAlert } from "./alert";
import axios from "axios";

export const getEDUOperationCases = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/education/geteducation/Operation`
    );
    dispatch({
      type: GET_EDU_OPERATION,
      payload: res.data.education,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getEDUSavedCases = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiurl}api/v1/education/geteducation/save`);
    dispatch({
      type: GET_EDU_SAVE,
      payload: res.data.education,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getEDUInsuffClearCases = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/education/geteducation/insuffL2Clear`
    );
    dispatch({
      type: GET_EDU_INSUFFCLEAR,
      payload: res.data.education,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getEDUAssignVendorCases = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/education/geteducation/assignVendor`
    );
    dispatch({
      type: GET_EDU_ASSIGNVENDOR,
      payload: res.data.education,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getVendorState = (state) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/vendor/getbystate?state=${state}`
    );
    dispatch({
      type: GET_VENDORBYSTATE,
      payload: res.data.vendor,
    });
  } catch (err) {
    console.log(err);
  }
};

export const saveEducation = (formData, history) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    console.log(body);
    const res = await axios.post(
      `${apiurl}api/v1/education/save-education`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    history.push("/showAllData");
    // dispatch({
    //   type: GET_EMP_OPERATION,
    //   payload: res.data.employment,
    // });
  } catch (err) {
    console.log(err);
  }
};

export const saveInsuffEducation = (formData, history) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    const res = await axios.put(
      `${apiurl}api/v1/education/save-insuff-employment`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    history.push("/showAllData");
    // dispatch({
    //   type: GET_EMP_OPERATION,
    //   payload: res.data.employment,
    // });
  } catch (err) {
    console.log(err);
  }
};

export const assignVendorEDU = (data, history) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${apiurl}api/v1/education/assign-vendor-edu`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(setAlert("Email Send"));
    history.goBack();
  } catch (err) {
    console.log(err);
  }
};

export const closeCheck = (data, history) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${apiurl}api/v1/education/close-check`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(setAlert("Save education Check"));
    dispatch(getEDUSavedCases());
    history.goBack();
  } catch (err) {
    dispatch(setAlert("Error in saving Employment Check"));
  }
};
