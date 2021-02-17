import {
  GET_EMPLOYEEUNDERVERIFICATION,
  GET_VENDORBYSTATE,
  GET_EMPLOYEEASSIGNVENDOR,
  GET_EMPLOYEEAUDIT,
} from "../actions/types";

const initialState = {
  employeeUnderVerification: null,
  employeeAssignVendor: null,
  employeeAudit: null,
  vendorByState: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_EMPLOYEEUNDERVERIFICATION:
      return {
        ...state,
        employeeUnderVerification: payload,
      };
    case GET_EMPLOYEEASSIGNVENDOR:
      return {
        ...state,
        employeeAssignVendor: payload,
      };
    case GET_EMPLOYEEAUDIT:
      return {
        ...state,
        employeeAudit: payload,
      };
    case GET_VENDORBYSTATE:
      return {
        ...state,
        vendorByState: payload,
      };
    default:
      return state;
  }
}
