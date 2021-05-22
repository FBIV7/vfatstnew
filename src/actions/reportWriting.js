import { GET_REPORTCASE,GET_REPORTCHECK} from "./types";
import { apiurl } from "./constant";
import { setAlert } from "./alert";
import axios from "axios";



// GET quality check

export const getCasesInReportWriting = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `${apiurl}api/v1/report-writing/cases`
      );
      dispatch({
        type: GET_REPORTCASE,
        payload: res.data.cases,
      });
    } catch (err) {
      console.log(err);
    }
  };

  
export const getCases = (id) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${apiurl}api/v1/report-writing/checks/${id}`
      );
      dispatch({
        type: GET_REPORTCHECK,
        payload: res.data.checks,
      });
    } catch (err) {
      console.log(err);
    }
  };