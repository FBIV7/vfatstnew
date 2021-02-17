import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  CREATE_PROFILE,
  GET_PRICING,
} from "../actions/types";

const initialState = {
  profile: null,
  loading: true,
  error: {},
  pricing: null,
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload.user.profile,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    case GET_PRICING:
      return {
        ...state,
        pricing: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default profileReducer;
