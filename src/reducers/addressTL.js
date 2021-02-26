import {GET_ADDRESSTL} from "../actions/types.js";

const initialState = {
  address: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ADDRESSTL:
        return {
          ...state,
          address: payload,
        };
      default:
        return state;
    }
  }
  