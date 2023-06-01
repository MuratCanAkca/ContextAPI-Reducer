import { authInitialState } from "./auth-initial-state";
import {types} from "../types"



export const authReducer = (state = authInitialState , action) => {
    if(action.type=== types.LOGIN_SUCCESS){
        return {...state , user: action.payload , isUserLogin:true} ;
    }
    else if(action.type===types.LOGIN_FAIL){
        return {...state , user:{} , isUserLogin:false}
    }
    else if(action.type===types.LOGOUT){
        return {...state , user:{} , isUserLogin:false}
    }
    return state;
} 