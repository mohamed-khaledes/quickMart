import {GET_ERROR,ADD_TO_WISHLIST,DELETE_FROM_WISHLIST,GET_ALL_WISHLIST} from "../type";
import {GetDataHook, useGetDataToken} from "../../Hooks/GetDataHook";
import {PostDataHook} from "../../Hooks/PostDataHook";
import DeleteDataHook from '../../Hooks/DeleteDataHook'

// get all reviews on specific product
export const getAllWishlist = ()=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await useGetDataToken(`/api/v1/wishlist`)
        dispatch({
            type:GET_ALL_WISHLIST,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:GET_ALL_WISHLIST,
            payload:e.response
        })
    }
    finally{
    }
}
// get all categories with pagination 
export const getAllWishlistPageAction = (page) => async (dispatch) =>{
    try{
        const response =await GetDataHook(`/api/v1/wishlist`)
        dispatch(
            {
                type:GET_ALL_WISHLIST,
                payload:response
            }
        )
    }
    catch(e){
        dispatch({
            type:GET_ALL_WISHLIST,
            payload:e.response
        })
    }
    finally{

    }

}
// get all categories with pagination 
export const addToWishlist = (id) => async (dispatch) =>{
    try{
        const response =await PostDataHook(`/api/v1/wishlist`,id)
        dispatch(
            {
                type:ADD_TO_WISHLIST,
                payload:response
            }
        )
    }
    catch(e){
        dispatch({
            type:ADD_TO_WISHLIST,
            payload:e.response
        })
    }
    finally{

    }

}
export const deleteFromWishlist = (id) => async (dispatch) =>{
    try{
        const response =await DeleteDataHook(`/api/v1/wishlist/${id}`)
        dispatch(
            {
                type:DELETE_FROM_WISHLIST,
                payload:response
            }
        )
    }
    catch(e){
        dispatch({
            type:DELETE_FROM_WISHLIST,
            payload:e.response
        })
    }
    finally{

    }

}






