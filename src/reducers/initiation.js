import {
  GET_CASE,
  GET_PACKAGEBYID,
  GET_CASEBYID,
  EDUCATIONBY_ID,
  GETINSUFF_CLEAR,
  SET_REPORTID,
  ADDRESSBY_ID,
  REFERANCEBY_ID,
  BLUECOLLARBY_ID,
} from "../actions/types.js";

const initialState = {
  cases: null,
  package: null,
  onecase: null,
  education: null,
  address: null,
  referance: null,
  bluecollar: null,
  loading: true,
  insuffclearL1: null,
  reportID: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CASE:
      return {
        ...state,
        cases: payload,
        reportID: null,
      };
    case GET_PACKAGEBYID:
      return {
        ...state,
        package: payload,
        reportID: null,
      };
    case GET_CASEBYID:
      return {
        ...state,
        onecase: payload,
        reportID: null,
      };
    case EDUCATIONBY_ID:
      return {
        ...state,
        education: payload,
        loading: false,
      };
    case ADDRESSBY_ID:
      return {
        ...state,
        address: payload,
        loading: false,
      };
    case REFERANCEBY_ID:
      return {
        ...state,
        referance: payload,
        loading: false,
      };
    case BLUECOLLARBY_ID:
      return {
        ...state,
        bluecollar: payload,
        loading: false,
      };
    case GETINSUFF_CLEAR:
      return {
        ...state,
        insuffclearL1: payload,
        reportID: null,
      };
    case SET_REPORTID:
      return {
        ...state,
        reportID: payload,
      };
    default:
      return state;
  }
}
