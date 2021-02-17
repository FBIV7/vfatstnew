import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR,

} from '../actions/types.js'

const initialState ={
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading : true,
    user:null,
    role:null
}

export default function(state= initialState,action){
  const {type ,payload}= action;

  
    switch(type){   
        case USER_LOADED:
            console.log(payload);
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload,
                role:payload.user.role

            }  
        case LOGIN_SUCCESS:
            case REGISTER_SUCCESS:
            localStorage.setItem('token',payload.token);
            console.log(payload);
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false,
                user:payload,
                role:payload.user.role
            }
        case LOGIN_FAIL: 
        case REGISTER_FAIL: 
        case LOGOUT:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                role:null,
            }      

         default:
                return state;
    }
}