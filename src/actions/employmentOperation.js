import { GET_EMP_OPERATION,GET_EMP_SAVE } from "./types";
import { apiurl } from "./constant";
import { setAlert } from "./alert";
import axios from "axios";

//GET initiation cases
export const getEMPOperationCases = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/operation/getemployment/Operation`
    );
    dispatch({
      type: GET_EMP_OPERATION,
      payload: res.data.employment,
    });
  } catch (err) {
    console.log(err);
  }
};

//GET initiation cases
export const getEMPSavedCases = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/operation/getemployment/save`
    );
    dispatch({
      type: GET_EMP_SAVE,
      payload: res.data.employment,
    });
  } catch (err) {
    console.log(err);
  }
};

export const saveEmployment = (formData,history) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    const res = await axios.post(
      `${apiurl}api/v1/operation/saveemployment`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    history.push("/showAllData")
    // dispatch({
    //   type: GET_EMP_OPERATION,
    //   payload: res.data.employment,
    // });
  } catch (err) {
    console.log(err);
  }
};
export const saveInsuffEmployment = (formData,history) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    const res = await axios.post(
      `${apiurl}api/v1/operation/saveinsuffemployment`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    history.push("/showAllData")
    // dispatch({
    //   type: GET_EMP_OPERATION,
    //   payload: res.data.employment,
    // });
  } catch (err) {
    console.log(err);
  }
};
