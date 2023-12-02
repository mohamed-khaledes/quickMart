import { useGetDataToken } from "../../Hooks/GetDataHook"
import { PostDataHook } from "../../Hooks/PostDataHook"
import { UpdateDataHook } from "../../Hooks/UpdateDataHook"
import useDeleteData from '../../Hooks/DeleteDataHook'
import { ADD_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, UPDATE_ADDRESS,GET_SPECIFIC_ADDRESSES, UPDATE_USER_DATA, DELETE_USER, UPDATE_USER_PASS, SPECIFIC_USER } from "../type"

/*Start user Address*/
export const  addAddress =(body)=> async (dispatch)=>{
    try{
        const response = await PostDataHook("/api/v1/addresses",body)
        dispatch({
            type:ADD_ADDRESS,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:ADD_ADDRESS,
            payload:e.response
        })
    }
}
export const  deleteAddress =(id)=> async (dispatch)=>{
    try{
        const response = await useDeleteData(`/api/v1/addresses/${id}`)
        dispatch({
            type:DELETE_ADDRESS,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:DELETE_ADDRESS,
            payload:e.response
        })
    }
}
export const  updateAddress =(id,body)=> async(dispatch)=>{
    try{
        const response = await UpdateDataHook(`/api/v1/addresses/${id}`,body)
        dispatch({
            type:UPDATE_ADDRESS,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:UPDATE_ADDRESS,
            payload:e.response
        })
    }
}
export const  allAddresses =()=> async (dispatch)=>{
    try{
        const response = await useGetDataToken(`/api/v1/addresses`)
        dispatch({
            type:GET_ALL_ADDRESSES,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_ADDRESSES,
            payload:e.response
        })
    }
}
export const  specificAddress =(id)=> async (dispatch)=>{
    try{
        const response = await useGetDataToken(`/api/v1/addresses/${id}`)
        dispatch({
            type:GET_SPECIFIC_ADDRESSES,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:GET_SPECIFIC_ADDRESSES,
            payload:e.response
        })
    }
}
/*End user address*/
/*Start user data */
export const specificUser = () =>async (dispatch)=>{
    try{
        const response = await useGetDataToken(`/api/v1/users/getMe`)
        dispatch({
            type:SPECIFIC_USER,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:SPECIFIC_USER,
            payload:e.response
        })
    }
}
export const updateUserData = (body) =>async (dispatch)=>{
    try{
        const response = await UpdateDataHook(`/api/v1/users/updateMe`,body)
        dispatch({
            type:UPDATE_USER_DATA,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:UPDATE_USER_DATA,
            payload:e.response
        })
    }
}
export const deleteUser = () =>async (dispatch)=>{
    try{
        const response = await useDeleteData(`/api/v1/users/deleteMe`)
        dispatch({
            type:DELETE_USER,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:DELETE_USER,
            payload:e.response
        })
    }
}
/*End user data */
/*Start update password*/
export const updatePassword = (body) =>async (dispatch)=>{
    try{
        const response = await UpdateDataHook(`/api/v1/users/changeMyPassword`,body)
        dispatch({
            type:UPDATE_USER_PASS,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:UPDATE_USER_PASS,
            payload:e.response
        })
    }
}
/*End update password*/