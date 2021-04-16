import axios from "axios";
import { GET_EDUCATIONTL,GET_EDUCATIONTEAM } from "./types.js";


// get address by status Teamleader
export const getEducationTL = () => async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/form/education/TL"
      );
      dispatch({
        type: GET_EDUCATIONTL,
        payload: res.data.education,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // get
export const getEducationTeam = () => async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/auth/education");
      dispatch({
        type: GET_EDUCATIONTEAM,
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
        "http://localhost:5000/api/v1/case/educationbyid",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(getEducationTL());
    } catch (err) {
      console.error(err);
    }
  };
  