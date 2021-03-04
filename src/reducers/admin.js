import {
  GET_CLIENT,
  GET_ALLREPORT,
  GET_VENDOR,
  GET_OPERATION,
  CREATE_PRICE,
  PRICE_ERROR,
  GET_PRICE,
} from "../actions/types";

const initialState = {
  client: null,
  vendor: null,
  operation: null,
  price: null,
  loading: true,
  report: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CLIENT:
      return {
        ...state,
        client: payload,
        loading: false,
      };
    case GET_ALLREPORT:
      return {
        ...state,
        report: payload,
        loading: false,
      };
    case GET_VENDOR:
      return {
        ...state,
        vendor: payload,
        loading: false,
      };
    case GET_OPERATION:
      return {
        ...state,
        operation: payload,
        loading: false,
      };
    case GET_PRICE:
      return {
        ...state,
        price: payload,
        loading: false,
      };

    default:
      return state;
  }
}
