import { GET_EMPQUALITYCHECK,GET_EDUQUALITYCHECK} from "./types";
import { apiurl } from "./constant";
import { setAlert } from "./alert";
import axios from "axios";


// GET quality check

export const getEMPQualityCases = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `${apiurl}api/v1/employment/employment/QUALITYCHECK`
      );
      dispatch({
        type: GET_EMPQUALITYCHECK,
        payload: res.data.employment,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const getEDUQualityCases = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `${apiurl}api/v1/education/education/QUALITYCHECK`
      );
      dispatch({
        type: GET_EDUQUALITYCHECK,
        payload: res.data.education,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const approveEmp = (id,history) => async (dispatch) =>{
    try {
      const res = await axios.put(`${apiurl}api/v1/quality-check/approve-emp/${id}`)
      dispatch(getEMPQualityCases())
      dispatch(setAlert("Approved"))
      history.goBack()
    } catch (error) {
      console.log(error);
    }
  }

  export const approveEdu = (id,history) => async (dispatch) =>{
    try {
      const res = await axios.put(`${apiurl}api/v1/quality-check/approve-edu/${id}`)
      dispatch(getEDUQualityCases())
      dispatch(setAlert("Approved"))
      history.goBack()
    } catch (error) {
      console.log(error);
    }
  }