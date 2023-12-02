import {GET_ERROR,ADD_REVIEW,GET_ALL_REVIEWS,DELETE_REVIEW,UPDATE_REVIEW} from "../type";
import {GetDataHook} from "../../Hooks/GetDataHook";
import {PostDataHook} from "../../Hooks/PostDataHook";
import DeleteDataHook from '../../Hooks/DeleteDataHook'
import {UpdateDataHook} from '../../Hooks/UpdateDataHook'

// get all reviews on specific product
export const getAllReviews = (id,page,limit)=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await GetDataHook(`/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`)
        dispatch({
            type:GET_ALL_REVIEWS,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:GET_ERROR,
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
export const addReview = (id,data) => async (dispatch) =>{
    try{
        const response =await PostDataHook(`/api/v1/products/${id}/reviews`,data)
        dispatch(
            {
                type:ADD_REVIEW,
                payload:response
            }
        )
    }
    catch(e){
        dispatch({
            type:ADD_REVIEW,
            payload:e.response
        })
    }
    finally{

    }

}
export const deleteReview = (id) => async (dispatch) =>{
    try{
        const response =await DeleteDataHook(`/api/v1/reviews/${id}`)
        dispatch(
            {
                type:DELETE_REVIEW,
                payload:response
            }
        )
    }
    catch(e){
        dispatch({
            type:DELETE_REVIEW,
            payload:e.response
        })
    }
    finally{

    }

}
export const updateReview = (id,data) => async (dispatch) =>{
    try{
        const response =await UpdateDataHook(`/api/v1/reviews/${id}`,data)
        dispatch(
            {
                type:UPDATE_REVIEW,
                payload:response
            }
        )
    }
    catch(e){
        dispatch({
            type:UPDATE_REVIEW,
            payload:e.response
        })
    }
    finally{

    }

}





