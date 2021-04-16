import axios from "axios";
import {GET_EMPLOYMENTTL,GET_EMPLOYMENTTEAM } from "./types.js";


// get address by status Teamleader
export const getEmploymentTL = () => async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/form/employment/TL"
      );
      dispatch({
        type: GET_EMPLOYMENTTL,
        payload: res.data.employment,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // get
export const getEmploymentTeam = () => async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/auth/employment");
      dispatch({
        type: GET_EMPLOYMENTTEAM,
        payload: res.data.user,
      });
    } catch (err) {
      console.error(err);
    }
  };


  export const Assign = (formData) => async (dispatch) => {
    try {
      const body = JSON.stringify(formData);
      const res = await axios.post(
        "http://localhost:5000/api/v1/case/employmentbyid",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(getEmploymentTL());
    } catch (err) {
      console.error(err);
    }
  };