import axios from "axios";
import {GET_EMPLOYMENTTL,GET_EMPLOYMENTTEAM } from "./types.js";
import {apiurl} from "./constant"

// get address by status Teamleader
export const getEmploymentTL = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `${apiurl}api/v1/employment/employment/TL`
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
      const res = await axios.get(`${apiurl}api/v1/employment/employment`);
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
        `${apiurl}api/v1/employment/employment-by-id`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(getEmploymentTL());
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };