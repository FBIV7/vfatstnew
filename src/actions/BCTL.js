import axios from "axios";
import { GET_BCREFERANCETL,GET_BCREFERANCETEAM } from "./types.js";

// get address by status Teamleader
export const getBCTL = () => async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/form/BCreferance/TL"
      );
      dispatch({
        type: GET_BCREFERANCETL,
        payload: res.data.bcref,
      });
    } catch (err) {
      console.error(err);
    }
  };
  
  // get
  export const getBCTeam = () => async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/auth/bc");
      dispatch({
        type: GET_BCREFERANCETEAM,
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
        "http://localhost:5000/api/v1/case/BCreferencebyid",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(getBCTL());
    } catch (err) {
      console.error(err);
    }
  };