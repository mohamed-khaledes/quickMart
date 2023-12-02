import {GET_USER_ORDERS,GET_SPESIFIC_USER_ORDER,UPDATE_ORDER_TO_DELIVERD,UPDATE_ORDER_TO_PAID} from "../type";
import { useGetDataToken } from "../../Hooks/GetDataHook";
import {UpdateDataHook} from '../../Hooks/UpdateDataHook'

// get all reviews on specific product
export const getUserOrders = (page,limit)=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await useGetDataToken(`/api/v1/orders?page=${page}&limit=${limit}`)
        dispatch({
            type:GET_USER_ORDERS,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:GET_USER_ORDERS,
            payload:e.response
        })
    }
    finally{
    }
}
// get all reviews on specific product
export const getSpesificUserOrder = (id)=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await useGetDataToken(`/api/v1/orders/${id}`)
        dispatch({
            type:GET_SPESIFIC_USER_ORDER,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:GET_SPESIFIC_USER_ORDER,
            payload:e.response
        })
    }
    finally{
    }
}
// get all reviews on specific product
export const updateOrderToPaid = (id)=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await UpdateDataHook(`/api/v1/orders/${id}/pay`)
        dispatch({
            type:UPDATE_ORDER_TO_PAID,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:UPDATE_ORDER_TO_PAID,
            payload:e.response
        })
    }
    finally{
    }
}
// get all reviews on specific product
export const updateOrderToDeliverd = (id)=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await UpdateDataHook(`/api/v1/orders/${id}/deliver`)
        dispatch({
            type:UPDATE_ORDER_TO_DELIVERD,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:UPDATE_ORDER_TO_DELIVERD,
            payload:e.response
        })
    }
    finally{
    }
}
