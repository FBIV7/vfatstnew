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
  CLEAR_REPORTID,
  EMPLOYMENTBY_ID
} from "./types.js";
import { apiurl } from "./constant";
import { setAlert } from "./alert";

//GET initiation cases
export const getinitiationCases = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/initiation/cases?status=initiation`
    );
    dispatch({
      type: GET_CASE,
      payload: res.data.cases,
    });
  } catch (err) {
    console.log(err);
  }
};


// get cases by id
export const getCasebyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiurl}api/v1/initiation/cases-by-id/${id}`);
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
    const res = await axios.post(`${apiurl}api/v1/intiation/education`, data, {
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
    const res = await axios.post(`${apiurl}api/v1/intiation/address`, data, {
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

export const employmentSubmit = (formData,documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form",body)
    data.append("documents",documents)
    const res = await axios.post(`${apiurl}api/v1/intiation/employment`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(setAlert("Employment form Submitted"));

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

    const res = await axios.post(`${apiurl}api/v1/intiation/reference`, data, {
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
      `${apiurl}api/v1/intiation/bluecollar-reference`,
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

export const BCReferenceInsuff = (formData,documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form", body);
    data.append("documents", documents);
    const res = await axios.post(
      `${apiurl}api/v1/intiation/bluecollarreference-insuff`,
      data,
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
    const res = await axios.post(`${apiurl}api/v1/intiation/education-insuff`, data, {
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

export const addressInsuff = (formData,documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form", body);
    data.append("documents", documents);
    const res = await axios.post(`${apiurl}api/v1/intiation/address-insuff`, data, {
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

export const employmentInsuff = (formData,documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form",body)
    data.append("documents",documents)
    const res = await axios.post(
      `${apiurl}api/v1/intiation/employment-insuff`,
      data,
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

export const referanceInsuff = (formData,documents) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    var data = new FormData();
    data.append("form",body)
    data.append("documents",documents)

    const res = await axios.post(`${apiurl}api/v1/intiation/referance-insuff`, data, {
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
      `${apiurl}api/v1/intiation/education/reportid?id=${id}`
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
      `${apiurl}api/v1/intiation/address/reportid?id=${id}`
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
      `${apiurl}api/v1/intiation/referance/reportid?id=${id}`
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
      `${apiurl}api/v1/intiation/bluecollar/reportid?id=${id}`
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

export const getEmploymentbyID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiurl}api/v1/intiation/employment/reportid?id=${id}`
    );
    dispatch({
      type: EMPLOYMENTBY_ID,
      payload: res.data.employment,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};



//get all insuff clear
export const getInsuffClear = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiurl}api/v1/initiation/get-insuff`);
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
    const res = await axios.post( `${apiurl}api/v1/intiation/education-update`,
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
    const res = await axios.post( `${apiurl}api/v1/intiation/address-update`,
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
    const res = await axios.post( `${apiurl}api/v1/intiation/referance-update`,
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
    const res = await axios.post( `${apiurl}api/v1/intiation/BCreferance-update`,
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

export const employmentUpdate = (formData,history) => async (dispatch) =>{
  try {
    const res = await axios.post( `${apiurl}api/v1/intiation/employment-update`,
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
