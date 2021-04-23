import {
  ADD_PACKAGE,
  GET_PACKAGE,
  GETS_CLIENTS,
  GET_INSUFF,
  GET_INSUFFL2
} from "../actions/types.js";

const initialState = {
  package: null,
  client: null,
  education: null,
  address: null,
  bluecollar: null,
  employment: null,
  referance:null,
  insuffL2:null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PACKAGE:
      return {
        ...state,
        package: payload.package,
      };
    case GETS_CLIENTS:
      return {
        ...state,
        client: payload,
      };
    case GET_INSUFF:
      return {
        ...state,
        education: payload.education,
        address: payload.address,
        bluecollar: payload.bluecollar,
        employment: payload.employment,
        referance:payload.referance.length > 0 ?payload.referance:null,
      };
      case GET_INSUFFL2:
        return{
          ...state,
          insuffL2:payload
        }
    default:
      return state;
  }
}
