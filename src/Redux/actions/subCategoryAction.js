import { GET_ERROR,CREATE_SUB_CATEGORY,GET_ONE_CATEGORY_SUB } from "../type";
import { PostDataHook } from "../../Hooks/PostDataHook";
import {GetDataHook} from "../../Hooks/GetDataHook";

export const subCategoryAction = (data)=>async(dispatch)=>{
    try{
        const response =await PostDataHook("/api/v1/subcategories",data)
        dispatch({
            type:CREATE_SUB_CATEGORY,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:GET_ERROR,
            payload:"error"+e
        })
    }
}

export const getOneCategorySub = (id)=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await GetDataHook(`/api/v1/categories/${id}/subcategories`)
        dispatch({
            type:GET_ONE_CATEGORY_SUB,
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
}