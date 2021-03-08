import { ADD_PACKAGE, GET_PACKAGE ,GETS_CLIENTS} from "../actions/types.js";

const initialState = {
  package: null,
  client:null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PACKAGE:
      return {
        ...state,
        package: payload.package,
      };
      case GETS_CLIENTS:
        return{
          ...state,
          client:payload
        }
    default:
      return state;
  }
}
