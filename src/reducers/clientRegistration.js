import { GETS_CLIENT, GETS_CRM } from "../actions/types";

const initialState = {
  client: null,
  CRM: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GETS_CLIENT:
      return {
        ...state,
        client: payload,
      };
    case GETS_CRM:
      return {
        ...state,
        CRM: payload,
      };

    default:
      return state;
  }
}
