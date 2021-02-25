import { GET_CASE, GET_PACKAGEBYID ,GET_CASEBYID} from "../actions/types.js";

const initialState = {
  cases: null,
  package:null,
  onecase:null
};

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CASE:
        return {
          ...state,
          cases: payload,
        };
        case GET_PACKAGEBYID:
            return {
              ...state,
              package: payload,
            };
            case GET_CASEBYID:
            return {
              ...state,
              onecase: payload,
            };
      default:
        return state;
    }
  }
  