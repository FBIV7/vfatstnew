import { GET_EMP_OPERATION, GET_EMP_SAVE } from "../actions/types";

const initialState = {
  employment: null,
  empSave: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EMP_OPERATION:
      return {
        ...state,
        employment: payload,
      };
    case GET_EMP_SAVE:
      return {
        ...state,
        empSave: payload,
      };

    default:
      return state;
  }
}
