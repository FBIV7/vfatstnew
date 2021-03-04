import { GETS_CLIENT } from "../actions/types";

const initialState = {
  client: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GETS_CLIENT:
      return {
        ...state,
        client: payload,
      };

    default:
      return state;
  }
}
