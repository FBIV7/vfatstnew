import axios from "axios";
import {
  ADD_PACKAGE,
  GET_PACKAGE,
  ADD_CASE,
  GETS_CLIENTS,
  GET_INSUFF,
} from "./types.js";
import { setAlert } from "./alert";

//GET PACKAGE
export const getPackage = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/package/getpackage"
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
      "http://localhost:5000/api/v1/package/add",
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
export const addCase = (formData, documents) => async (dispatch) => {
  const body = JSON.stringify(formData);
  let data = new FormData(); //formdata object

  data.append("documents", documents);
  data.append("name", "aman");
  console.log(data);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/case/register",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res1 = await axios.post(
      `http://localhost:5000/api/v1/case/updatedocument/${res.data.cases._id}`,
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
  } catch (err) {
    console.log(err);
  }
};
export const getClient = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/v1/client/getclients`
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
      `http://localhost:5000/api/v1/case/getallinsuff`
    );
    dispatch({
      type: GET_INSUFF,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const clearEducationInsuff = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/api/v1/case/insuffeducationclear`,
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
      `http://localhost:5000/api/v1/case/insuffaddressclear`,
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
      `http://localhost:5000/api/v1/case/insuffreferanceclear`,
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
      `http://localhost:5000/api/v1/case/insuffbluecollarclear`,
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