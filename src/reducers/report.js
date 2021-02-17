import {ADDRESS_SUCCESS,ADDRESS_FAIL,EDUCATION_SUCCESSS,EDUCATION_FAIL,GET_REPORT}  from '../actions/types'


const initialState ={
    report_id: null,
    loading:true,
    report: null
}

function reportReducer (state = initialState,action){
    const { type, payload } = action;

    switch(type){
        case ADDRESS_SUCCESS:
            return{
                ...state,
                report_id : payload.data.data.report_id,
                loading: false
            }
         case GET_REPORT:
            return{
                ...state,
                report: payload,
                loading:false
            }
            default:
        return state;

    }
}

export default reportReducer;