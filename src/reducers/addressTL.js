import { GET_ADDRESSTL, GET_ADDRESSTEAM } from "../actions/types.js";

const initialState = {
  address: null,
  team: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ADDRESSTL:
      return {
        ...state,
        address: payload,
      };
    case GET_ADDRESSTEAM:
      return {
        ...state,
        team: payload,
      };
    default:
      return state;
  }
}
