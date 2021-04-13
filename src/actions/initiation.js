import axios from "axios";
import {
  GET_CASE,
  GET_PACKAGEBYID,
  GET_CASEBYID,
  EDUCATIONBY_ID,
  GETINSUFF_CLEAR,
  ADDRESSBY_ID,
  REFERANCEBY_ID,
  BLUECOLLARBY_ID,
  CLEAR_REPORTID
} from "./types.js";
import { apiurl } from "./constant";
import { setAlert } from "./alert";

//GET initiation cases
export const getinitiationCases = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/case/getCases?status=initiation`
    );
    dispatch({
      type: GET_CASE,
      payload: res.data.cases,
    });
  } catch (err) {
    console.log(err);
  }
};

// get package by id
export const getPackagebyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiurl}api/v1/package/getpackagebyID/${id}`);
    dispatch({
      type: GET_PACKAGEBYID,
      payload: res.data.package,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// get cases by id
export const getCasebyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiurl}api/v1/case/getcasesbyid/${id}`);
    dispatch({
      type: GET_CASEBYID,
      payload: res.data.cases,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const educationSubmit = (formData, documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form", body);
    data.append("documents", documents);
    const res = await axios.post(`${apiurl}api/v1/form/education`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(setAlert("Education form Submitted"));

    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
export const addressSubmit = (formData, documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form", body);
    data.append("documents", documents);
    const res = await axios.post(`${apiurl}api/v1/form/address`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(setAlert("Address Form Submitted"));

    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const employmentSubmit = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);

    const res = await axios.post(`${apiurl}api/v1/form/employment`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(setAlert("Employment Submitted"));

    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const referenceSubmit = (formData, documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form", body);
    data.append("documents", documents);

    const res = await axios.post(`${apiurl}api/v1/form/reference`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(setAlert("Referance form submitted"));

    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
    dispatch(setAlert("error"));
  }
};

export const BCReferenceSubmit = (formData, documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form", body);
    data.append("documents", documents);
    const res = await axios.post(
      `${apiurl}api/v1/form/bluecollarreference`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(setAlert("Blue collar form submitted"));

    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const BCReferenceInsuff = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);

    const res = await axios.post(
      `${apiurl}api/v1/form/bluecollarreferenceinsuff`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const educationInsuff = (formData,documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form", body);
    data.append("documents", documents);
    const res = await axios.post(`${apiurl}api/v1/form/educationinsuff`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const addressInsuff = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);

    const res = await axios.post(`${apiurl}api/v1/form/addressinsuff`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const employmentInsuff = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);

    const res = await axios.post(
      `${apiurl}api/v1/form/employmentinsuff`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const referanceInsuff = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);

    const res = await axios.post(`${apiurl}api/v1/form/referanceinsuff`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(getCasebyID(formData.caseID));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// get education from report
export const getEducationbyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/form/geteducation/reportid?id=${id}`
    );
    dispatch({
      type: EDUCATIONBY_ID,
      payload: res.data.education,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const getAddressbyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/form/getaddress/reportid?id=${id}`
    );
    dispatch({
      type: ADDRESSBY_ID,
      payload: res.data.address,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const getReferancebyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/form/getreferance/reportid?id=${id}`
    );
    dispatch({
      type: REFERANCEBY_ID,
      payload: res.data.referance,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const getBluecollarbyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/form/getbluecollar/reportid?id=${id}`
    );
    dispatch({
      type: BLUECOLLARBY_ID,
      payload: res.data.bluecollar,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

//get all insuff clear
export const getInsuffClear = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiurl}api/v1/case/get-insuff`);
    dispatch({
      type: GETINSUFF_CLEAR,
      payload: res.data,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const educationUpdate = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post( `${apiurl}api/v1/form/educationupdate`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    )
    dispatch({type:CLEAR_REPORTID})
    dispatch(setAlert("Education form Updated"));
    history.push("/insuffclear");
  } catch (err) {
    console.log(err);
  }
};

export const addressUpdate = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post( `${apiurl}api/v1/form/addressupdate`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    )
    dispatch({type:CLEAR_REPORTID})
    dispatch(setAlert("Address form Updated"));
    history.push("/insuffclear");
  } catch (err) {
    console.log(err);
  }
};

export const referanceUpdate = (formData,history) => async (dispatch) =>{
  try {
    const res = await axios.post( `${apiurl}api/v1/form/referanceupdate`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    )
    dispatch({type:CLEAR_REPORTID})
    dispatch(setAlert("Referance form Updated"));
    history.push("/insuffclear");
  } catch (err) {
    console.log(err);
  }

}

export const BCreferanceUpdate = (formData,history) => async (dispatch) =>{
  try {
    const res = await axios.post( `${apiurl}api/v1/form/BCreferanceupdate`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    )
    dispatch({type:CLEAR_REPORTID})
    dispatch(setAlert("BLUE COLLAR Referance form Updated"));
    history.push("/insuffclear");
  } catch (err) {
    console.log(err);
  }

}
