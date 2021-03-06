import { GETS_CLIENT, GETS_CRM } from "./types";
import axios from "axios";
import { apiurl } from "./constant";

import { setAlert } from "./alert";

export const getClient = (user_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiurl}api/v1/client-registration/get-client`);
    dispatch({
      type: GETS_CLIENT,
      payload: res.data.client,
    });
  } catch (err) {
    console.error(err);
  }
};

export const createClient = (formData) => async (dispatch) => {
  const body = JSON.stringify(formData);
  try {
    const res = await axios.post(`${apiurl}api/v1/client-registration/add`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    dispatch(setAlert("Client created"));
    dispatch(getClient());
  } catch (err) {
    console.log(err);
  }
};

//add package
export const addPackage = (formdata, history) => async (dispatch) => {
  const body = JSON.stringify(formdata);
  try {
    const res = await axios.post(`${apiurl}api/v1/client-registration/add-package`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    // dispatch({
    //   type: ADD_PACKAGE,
    // });
    dispatch(getClient());
    dispatch(setAlert("Package Added"));
    // history.replace("/addpackage");
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};
export const getCrm = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiurl}api/v1/client-registration/get-crm`);
    dispatch({
      type: GETS_CRM,
      payload: res.data.user,
    });
  } catch (err) {
    console.error(err);
  }
};
