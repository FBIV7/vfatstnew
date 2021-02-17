import { CREATEVENDOR_PROFILE, VENDORPROFILE_ERROR } from "../actions/types";

const initialState = {
  profile: null,
  loading: true,
  error: {},
  pricing: null,
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATEVENDOR_PROFILE:
      return {
        ...state,
        profile: payload.user.profile,
        loading: false,
      };

    case VENDORPROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };

    default:
      return state;
  }
}

export default profileReducer;