import { GET_EMP_OPERATION, GET_EMP_SAVE,GET_EMP_INSUFFCLEAR,GET_VENDORBYSTATE } from "../actions/types";

const initialState = {
  employment: null,
  empSave: null,
  empInsuff:null,
  vendor:null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EMP_OPERATION:
      return {
        ...state,
        employment: payload,
      };
    case GET_EMP_SAVE:
      return {
        ...state,
        empSave: payload,
      };
      case GET_EMP_INSUFFCLEAR:
        return {
          ...state,
          empInsuff: payload,
        }
        case GET_VENDORBYSTATE:
          return{
            ...state,
            vendor:payload
          }

    default:
      return state;
  }
}
