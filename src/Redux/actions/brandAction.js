import { GET_ALL_BRANDS,GET_ERROR,CREATE_BRAND,GET_SPECIFIC_BRAND,DELETE_BRAND} from "../type";
import {GetDataHook} from "../../Hooks/GetDataHook";
import {PostDataHookWithImage } from "../../Hooks/PostDataHook";
import useDeleteData from "../../Hooks/DeleteDataHook";

// get all categories
export const getAllBrandsAction = ()=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await GetDataHook(`/api/v1/brands`)
        dispatch({
            type:GET_ALL_BRANDS,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:GET_ERROR,
            payload:"Error"+e,
        })
    }
    /*
    Statements that are executed before control flow
    exits the try...catch...finally construct. These
    statements execute regardless of whether
    an exception was thrown or caught.
    */
    finally{
    }
}
// get all categories with pagination 
export const getAllBrandPageAction = (page,limit) => async (dispatch) =>{
    try{
        const response =await GetDataHook(`/api/v1/brands?limit=${limit}&page=${page}`)
        dispatch(
            {
                type:GET_ALL_BRANDS,
                payload:response
            }
        )
    }
    catch(e){
        dispatch({
            type:GET_ERROR,
            payload:"Error" + e
        })
    }
    finally{

    }

}
// get all categories with pagination 
export const getSpecificBrand = (id) => async (dispatch) =>{
    try{
        const response =await GetDataHook(`/api/v1/brands/${id}`)
        dispatch(
            {
                type:GET_SPECIFIC_BRAND,
                payload:response
            }
        )
    }
    catch(e){
        dispatch({
            type:GET_ERROR,
            payload:"Error" + e
        })
    }
    finally{

    }

}
// create category action
export const createBrandAction = (formData)=> async (dispatch) =>{
    try{
        const response =await PostDataHookWithImage("/api/v1/brands",formData)
        dispatch({
            type:CREATE_BRAND,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:GET_ERROR,
        payload:"error" + e
        })
    }
}
// create category action
export const deleteBrandAction = (id)=> async (dispatch) =>{
    try{
        const response =await useDeleteData(`/api/v1/brands/${id}`)
        dispatch({
            type:DELETE_BRAND,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:DELETE_BRAND,
        payload:e.response
        })
    }
}



