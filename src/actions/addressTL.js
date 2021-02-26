import axios from "axios";
import { GET_ADDRESSTL } from "./types.js";


// get address by status Teamleader
export const getAddressTL = () => async (dispatch) => {
    try {
      const res = await axios.get(
        "http://192.168.1.16:5000/api/v1/form/address/TL"
      );
      dispatch({
        type: GET_ADDRESSTL ,
        payload: res.data.address,
      });
    } catch (err) {
      console.error(err);
    }
  };