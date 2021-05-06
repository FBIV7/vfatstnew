import {
    GET_EDU_OPERATION,
    GET_EDU_SAVE,
    GET_EDU_INSUFFCLEAR,
    GET_EDU_ASSIGNVENDOR,
    GET_VENDORBYSTATE
} from "../actions/types";
const initialState = {
  education: null,
  eduSave: null,
  eduInsuff: null,
  vendor: null,
  assignVendor: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EDU_OPERATION:
      return {
        ...state,
        education: payload,
      };
    case GET_EDU_SAVE:
      return {
        ...state,
        eduSave: payload,
      };
    case GET_EDU_INSUFFCLEAR:
      return {
        ...state,
        eduInsuff: payload,
      };
    case GET_VENDORBYSTATE:
      return {
        ...state,
        vendor: payload,
      };
    case GET_EDU_ASSIGNVENDOR:
      return {
        ...state,
        assignVendor: payload,
      };

    default:
      return state;
  }
}
