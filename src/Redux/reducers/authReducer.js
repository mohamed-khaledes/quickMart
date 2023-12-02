/*
Tasks of reducer 
    - take the actions and update the state just this is a task of reducer
    - Reducer should be pure functions and no any side effect
    - Actions cant handle async request alone
    - Reducer take something and return the same thing after update

    So,where should add async (rest API) code?
*/

// all of imports 
import {CREATE_NEW_USER,LOGIN_USER,FORGET_PASSWORD,RESET_PASSWORD} from '../type'

// initial state in one object
const initialState = {
    createNewUser:[],
    loginUser:[],
    forgetPassword:[],
    resetPassword:[],
    loading:true
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case CREATE_NEW_USER:
            return{
                ...state,
                createNewUser:action.payload,
                loading:false,
            }
        case LOGIN_USER:
            return{
                ...state,
                loginUser:action.payload,
                loading:false,
            }
        case FORGET_PASSWORD:
            return{
                ...state,
                forgetPassword:action.payload,
                loading:false,
            }
        case RESET_PASSWORD:
            return{
                ...state,
                resetPassword:action.payload,
                loading:false,
            }
        default:
            return {
                state
            };
    }
}

export default authReducer