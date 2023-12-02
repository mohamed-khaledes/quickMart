import { GET_ALL_CATEGORY,GET_ERROR,CREATE_CATEGORY,GET_SPECIFIC_CATEGORY,DELETE_CATEGORY} from "../type";
import {GetDataHook} from "../../Hooks/GetDataHook";
import {PostDataHookWithImage } from "../../Hooks/PostDataHook";
import useDeleteData from "../../Hooks/DeleteDataHook";

// get all categories
export const getAllCategoryAction = (limit)=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await GetDataHook(`/api/v1/categories?limit=${limit}`)
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:e.response
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
export const getAllCategoryPageAction = (page,limit) => async (dispatch) =>{
    try{
        const response =await GetDataHook(`/api/v1/categories?limit=${limit}&page=${page}`)
        dispatch(
            {
                type:GET_ALL_CATEGORY,
                payload:response
            }
        )
    }
    catch(e){
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:e.response
        })
    }
    finally{

    }

}
// create category action
export const createCategoryAction = (formData)=> async (dispatch) =>{
    try{
        const response =await PostDataHookWithImage("/api/v1/categories",formData)
        dispatch({
            type:CREATE_CATEGORY,
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

// get specific category actions
export const getSpecificCategory  = (id)=> async (dispatch) =>{
    try{
        const response =await GetDataHook(`/api/v1/categories/${id}`)
        dispatch({
            type:GET_SPECIFIC_CATEGORY,
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
// delete category actions
export const deleteCategory  = (id)=> async (dispatch) =>{
    try{
        const response =await useDeleteData(`/api/v1/categories/${id}`)
        dispatch({
            type:DELETE_CATEGORY,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
        type:DELETE_CATEGORY,
        payload:e.response
        })
    }
}

