import axios from "axios";

import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    CREATE_PROFILE,
    GET_PRICING
   
  } from './types';

  import { loadUser } from "./auth";

  // Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:5000/api/v1/auth/me");
        console.log(res)
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  export const createProfile = (formData,history) => async (dispatch) => {
      const body = JSON.stringify(formData);
      try {
        const res = await axios.post(
            "http://localhost:5000/api/v1/client/contactdetail",
            body,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(res);
          dispatch({
              type:CREATE_PROFILE,
              payload:res.data
          }) 
          history.push('/editprofile/businessdetail');
      } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
      }
  }
  
  export const createBusiness = ({companyDetail, Address,statutarydetails,bank_account,business_nature}) => async (dispatch) => {
    const body = JSON.stringify({companyDetail,Address,statutarydetails,bank_account,business_nature});
    console.log(body);
    try {
      const res = await axios.post(
          "http://localhost:5000/api/v1/client/businessprofile",
          body,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        dispatch({
            type:CREATE_PROFILE,
            payload:res.data
        }) 
    } catch (err) {
      dispatch({
          type: PROFILE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const updateImage = (formData) => async (dispatch) =>{
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/client/updateimage",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );
    dispatch(getCurrentProfile());

   console.log('UPLOAD IMAGE');
    
  } catch (err) {
    console.error(err);
  }
}

export const getPricing = ( ) => async (dispatch) =>{
  try {
    const res = await axios.get('http://localhost:5000/api/v1/client/getallpricing')
    console.log(res);
    dispatch({
      type:GET_PRICING,
      payload:res.data.price
    })
  } catch (err) {
  console.error(err);
  }
}

