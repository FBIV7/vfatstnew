import axios from "axios";
import { GET_ADDRESSTL, GET_ADDRESSTEAM } from "./types.js";

// get address by status Teamleader
export const getAddressTL = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://192.168.1.16:5000/api/v1/form/address/TL"
    );
    dispatch({
      type: GET_ADDRESSTL,
      payload: res.data.address,
    });
  } catch (err) {
    console.error(err);
  }
};

// get
export const getAddressTeam = () => async (dispatch) => {
  try {
    const res = await axios.get("http://192.168.1.16:5000/api/v1/auth/address");
    dispatch({
      type: GET_ADDRESSTEAM,
      payload: res.data.user,
    });
  } catch (err) {
    console.error(err);
  }
};

export const Assign = (formData) => async (dispatch) => {
  try {
    const body = JSON.stringify(formData);
    const res = await axios.post(
      "http://localhost:5000/api/v1/case/addressbyid",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(getAddressTL());
  } catch (err) {
    console.error(err);
  }
};
