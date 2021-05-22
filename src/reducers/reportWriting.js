import {GET_REPORTCASE,GET_REPORTCHECK} from "../actions/types"


const initialState={
    cases:null,
    checks:null,
    loading:true
}

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_REPORTCASE:
        return {
          ...state,
          cases: payload,
        };
        case GET_REPORTCHECK:
          return {
            ...state,
            checks: payload,
            loading:false
          };
      
    default:
        return state;
    }
  }