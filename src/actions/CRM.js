import axios from "axios";
import {
  ADD_PACKAGE,
  GET_PACKAGE,
  ADD_CASE,
  GETS_CLIENTS,
  GET_INSUFF,
  GET_INSUFFL2
} from "./types.js";
import { setAlert } from "./alert";
import {apiurl} from "./constant"

//GET PACKAGE
export const getPackage = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/package/getpackage`
    );
    dispatch({
      type: GET_PACKAGE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

//add package
export const addPackage = (formdata) => async (dispatch) => {
  const body = JSON.stringify(formdata);
  try {
    const res = await axios.post(
      `${apiurl}api/v1/package/add`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: ADD_PACKAGE,
    });
    dispatch(getPackage());
  } catch (err) {
    console.log(err);
  }
};

//add registration
export const addCase = (formData, documents,history) => async (dispatch) => {
  const body = JSON.stringify(formData);
  let data = new FormData(); //formdata object

  data.append("documents", documents);
  data.append("name", "aman");
  console.log(data);
  try {
    const res = await axios.post(
      `${apiurl}api/v1/crm/register`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res1 = await axios.post(
      `${apiurl}api/v1/crm/update-document/${res.data.cases._id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res1);
    dispatch(setAlert("case created"));
    dispatch({
      type: ADD_CASE,
    });
    history.push("/registerCandidate")
  } catch (err) {
    console.log(err);
  }
};
export const getClient = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/crm/get-client`
    );
    dispatch({
      type: GETS_CLIENTS,
      payload: res.data.client,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getInsuff = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/crm/get-insuff/insuffL1`
    );
    dispatch({
      type: GET_INSUFF,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
export const getInsuffL2 = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/crm/get-insuff/insuffL2`
    );
    dispatch({
      type: GET_INSUFFL2,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const clearEducationInsuff = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${apiurl}api/v1/crm/clear/education-insuffL1`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(getInsuff());
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const clearAddressInsuff = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${apiurl}api/v1/crm/clear/address-insuffL1`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(getInsuff());
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const clearReferanceInsuff = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${apiurl}api/v1/crm/clear/referance-insuffL1`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(getInsuff());
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const clearBluecollarInsuff = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${apiurl}api/v1/crm/clear/bluecollar-insuffL1`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(getInsuff());
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const clearEmploymentInsuff = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${apiurl}api/v1/crm/clear/employment-insuffL1`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
    dispatch(getInsuff());
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const clearEmploymentInsuffL2 = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${apiurl}api/v1/crm/clear/employment-insuffL2`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
    dispatch(getInsuffL2());
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const clearEducationInsuffL2 = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${apiurl}api/v1/crm/clear/education-insuffL2`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
    dispatch(getInsuffL2());
  } catch (err) {
    console.error(err);
  }
};