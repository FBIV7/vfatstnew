import {
   GETS_CLIENT 
  } from "./types";
  import axios from "axios";

  
export const getClient = (user_id) => async (dispatch) => {
    try {
      const res = await axios.get(
        `http://15.207.67.66:5000/api/v1/client/getclient`
      );
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
      const res = await axios.post(
        "http://15.207.67.66:5000/api/v1/client/add",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
  
      dispatch(getClient());
    } catch (err) {
      console.log(err);
    }
  };

  //add package
export const addPackage = (formdata) => async (dispatch) => {
    const body = JSON.stringify(formdata);
    try {
      const res = await axios.post(
        "http://15.207.67.66:5000/api/v1/client/addpackage",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  console.log(res);
    //   dispatch({
    //     type: ADD_PACKAGE,
    //   });
      dispatch(getClient());
    } catch (err) {
      console.log(err);
    }
  };