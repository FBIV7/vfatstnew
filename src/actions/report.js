import axios from "axios";

import { ADDRESS_SUCCESS, ADDRESS_FAIL, GET_REPORT } from "./types";

export const getReport = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/report/getuserreport");
    console.log(res.data.report);
    dispatch({
      type: GET_REPORT,
      payload: res.data.report,
    });
  } catch (err) {
    console.error(err);
  }
};



export const uploadAddressCheck = (file) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/report/address",
      file,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch({
      type: ADDRESS_SUCCESS,
      payload: res,
    });
    
    dispatch(getReport());
  } catch (err) {
    console.error(err);
  }
};
