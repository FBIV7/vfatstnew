import { ADD_PACKAGE, GET_PACKAGE } from "../actions/types.js";

const initialState = {
  package: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PACKAGE:
      return {
        ...state,
        package: payload.package,
      };
    default:
      return state;
  }
}
