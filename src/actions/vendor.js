import axios from "axios";
import { VENDORPROFILE_ERROR, CREATEVENDOR_PROFILE,CREATEVENDOR_BUSINESS } from "./types";



  // Get current users profile
  export const getVendorProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("http://15.207.67.66:5000/api/v1/auth/me");
        console.log(res)
      dispatch({
        type: CREATEVENDOR_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: VENDORPROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

export const createVendorProfile = (formData, history) => async (dispatch) => {
  const body = JSON.stringify(formData);
  try {
    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/vendor/contactdetail",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: CREATEVENDOR_PROFILE,
      payload: res.data,
    });
    history.push("/editprofile/businessdetail");
  } catch (err) {
    dispatch({
      type: VENDORPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createVendorBusiness = ({companyDetail, Address,statutarydetails,bank_account,business_nature}) => async (dispatch) => {
  const body = JSON.stringify({companyDetail,Address,statutarydetails,bank_account,business_nature});
  console.log(body);
  try {
    const res = await axios.post(
        "http://15.207.67.66:5000/api/v1/vendor/businessdetail",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      dispatch({
          type:CREATEVENDOR_BUSINESS,
          payload:res.data
      }) 
  } catch (err) {
    dispatch({
        type: VENDORPROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
  }
}

// image upload
export const updateVendorImage = (formData) => async (dispatch) =>{
  try {
    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/vendor/updateimage",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );
    dispatch(getVendorProfile());

 
    
  } catch (err) {
    console.error(err);
  }
}


