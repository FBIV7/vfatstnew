import {GET_EMPQUALITYCHECK,GET_EDUQUALITYCHECK} from "../actions/types"


const initialState={
    employment:null,
    education:null
}

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_EMPQUALITYCHECK:
        return {
          ...state,
          employment: payload,
        };
        case GET_EDUQUALITYCHECK:
          return {
            ...state,
            education: payload,
          };
      
    default:
        return state;
    }
  }