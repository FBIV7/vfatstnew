import {GET_REFERANCETL, GET_REFERANCETEAM } from "../actions/types.js";
const initialState = {
    referance: null,
    team: null,
  };


  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_REFERANCETL:
        return {
          ...state,
          referance: payload,
        };
      case GET_REFERANCETEAM:
        return {
          ...state,
          team: payload,
        };
      default:
        return state;
    }
  }