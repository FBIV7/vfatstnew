import axios from "axios";
import { GET_REFERANCETL, GET_REFERANCETEAM } from "./types.js";

// get address by status Teamleader
export const getReferanceTL = () => async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/form/referance/TL"
      );
      dispatch({
        type: GET_REFERANCETL,
        payload: res.data.referance,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // get
export const getReferanceTeam = () => async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/auth/referance");
      dispatch({
        type: GET_REFERANCETEAM,
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
        "http://localhost:5000/api/v1/case/referencebyid",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(getReferanceTL());
    } catch (err) {
      console.error(err);
    }
  };