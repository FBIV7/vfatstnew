import {GET_EDUCATIONTL,GET_EDUCATIONTEAM} from "../actions/types.js";

const initialState = {
  education: null,
  team: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EDUCATIONTL:
      return {
        ...state,
        education: payload,
      };
    case GET_EDUCATIONTEAM:
      return {
        ...state,
        team: payload,
      };
    default:
      return state;
  }
}
