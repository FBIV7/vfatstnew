import {
  GET_CLIENT,
  GET_ALLREPORT,
  GET_VENDOR,
  GET_OPERATION,
  CREATE_PRICE,
  PRICE_ERROR,
  GET_PRICE,
} from "./types";
import axios from "axios";

// getClient
export const getClient = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://15.207.67.66:5000/api/v1/admin/getclient"
    );
    // console.log(res.data.client)
    dispatch({
      type: GET_CLIENT,
      payload: res.data.client,
    });
  } catch (err) {
    //   dispatch({
    //     type: PROFILE_ERROR,
    //     payload: { msg: err.response.statusText, status: err.response.status }
    //   });
    console.error(err);
  }
};

//getoperation
export const getOperation = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://15.207.67.66:5000/api/v1/admin/getoperation"
    );
    // console.log(res.data.client)
    dispatch({
      type: GET_OPERATION,
      payload: res.data.operation,
    });
  } catch (err) {
    //   dispatch({
    //     type: PROFILE_ERROR,
    //     payload: { msg: err.response.statusText, status: err.response.status }
    //   });
    console.error(err);
  }
};

// //getVendor
// export const getVendor = () => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       "http://15.207.67.66:5000/api/v1/operation/getallvendor"
//     );
//     // console.log(res.data.client)
//     dispatch({
//       type: GET_VENDOR,
//       payload: res.data.vendor,
//     });
//   } catch (err) {
//     //   dispatch({
//     //     type: PROFILE_ERROR,
//     //     payload: { msg: err.response.statusText, status: err.response.status }
//     //   });
//     console.error(err);
//   }
// };

export const getAllReport = () => async (dispatch) => {
  try {
    const res = await axios.get("http://15.207.67.66:5000/api/v1/report/get");
    dispatch({
      type: GET_ALLREPORT,
      payload: res.data.employee,
    });
  } catch (err) {
    console.error(err);
  }
};

export const createPrice = (formData) => async (dispatch) => {
  const body = JSON.stringify(formData);
  try {
    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/admin/setprice",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    dispatch({
      type: CREATE_PRICE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getPrice = (user_id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://15.207.67.66:5000/api/v1/admin/getprice/${user_id}`
    );
    dispatch({
      type: GET_PRICE,
      payload: res.data.price,
    });
  } catch (err) {
    console.error(err);
  }
};

export const approve = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://15.207.67.66:5000/api/v1/admin/approve/${id}`
    );
    dispatch(getClient());
  } catch (err) {
    console.error(err);
  }
};

export const decline = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://15.207.67.66:5000/api/v1/admin/decline/${id}`
    );
    dispatch(getClient());
  } catch (err) {
    console.error(err);
  }
};

// createClient
export const createClient = (formData) => async (dispatch) => {
  const body = JSON.stringify(formData);
  try {
    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/admin/createclient",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(getClient());
  } catch (err) {
    console.log(err);
  }
};

export const getVendor = (user_id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://15.207.67.66:5000/api/v1/vendor/get`);
    dispatch({
      type: GET_VENDOR,
      payload: res.data.vendor,
    });
  } catch (err) {
    console.error(err);
  }
};

export const createVendor = (formData) => async (dispatch) => {
  const body = JSON.stringify(formData);
  try {
    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/vendor/add",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);

    dispatch(getVendor());
  } catch (err) {
    console.log(err);
  }
};
export const addPrice = (formData) => async (dispatch) => {
  const body = JSON.stringify(formData);
  try {
    const res = await axios.post(
      "http://15.207.67.66:5000/api/v1/vendor/addprice",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);

    dispatch(getVendor());
  } catch (err) {
    console.log(err);
  }
};
