import {GET_EMPLOYMENTTL,GET_EMPLOYMENTTEAM  } from "../actions/types.js";

const initialState = {
  employment: null,
  team: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_EMPLOYMENTTL:
        return {
          ...state,
          employment: payload,
        };
      case GET_EMPLOYMENTTEAM:
        return {
          ...state,
          team: payload,
        };
      default:
        return state;
    }
  }