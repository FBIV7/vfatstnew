import { GET_BCREFERANCETL,GET_BCREFERANCETEAM } from "../actions/types.js";

const initialState = {
  bc: null,
  team: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_BCREFERANCETL:
        return {
          ...state,
          bc: payload,
        };
      case GET_BCREFERANCETEAM:
        return {
          ...state,
          team: payload,
        };
      default:
        return state;
    }
  }
  