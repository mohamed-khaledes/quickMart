import { GET_ERROR,CREATE_NEW_USER,
    LOGIN_USER,GET_CURERNT_USER,
    FORGET_PASSWORD,VERIFY_CODE,RESET_PASSWORD} from "../type";
import {PostDataHook } from "../../Hooks/PostDataHook";
import {useGetDataToken} from '../../Hooks/GetDataHook'
import axios from "axios";
import { UpdateDataHook } from "../../Hooks/UpdateDataHook";

export const signUpAction = (data)=> async (dispatch) =>{
    try{
        const response =await PostDataHook("/api/v1/auth/signup",data)
        dispatch({
            type:CREATE_NEW_USER,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
        type:CREATE_NEW_USER,
        payload:e.response,
        })
    }
}
export const loginAction = (data)=> async (dispatch) =>{
    try{
        const response =await PostDataHook("/api/v1/auth/login",data)
        dispatch({
            type:LOGIN_USER,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
        type:LOGIN_USER,
        payload:e.response,
        })
    }
}
//login  user 
export const getLoggedUser = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/users/getMe`);
        dispatch({
            type: GET_CURERNT_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_CURERNT_USER,
            payload: e.response,
        })
    }
}
export const forgetPassword =(data)=> async(dispatch)=>{
    try{
        const response = PostDataHook("/api/v1/auth/forgotPasswords",data)
        dispatch({
            type:FORGET_PASSWORD,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:FORGET_PASSWORD,
            payload:e.response
        })
    }
}
export const verifyCode =(data)=> async(dispatch)=>{
    try{
        const response = PostDataHook("/api/v1/auth/verifyResetCode",data)
        dispatch({
            type:VERIFY_CODE,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:VERIFY_CODE,
            payload:e.response
        })
    }
}
export const resetPassword =(data)=> async(dispatch)=>{
    try{
        const response =UpdateDataHook("/api/v1/auth/resetPassword",data)
        dispatch({
            type:RESET_PASSWORD,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:RESET_PASSWORD,
            payload:e.response
        })
    }
}