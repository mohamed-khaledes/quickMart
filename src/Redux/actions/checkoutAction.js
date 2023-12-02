import {CREATE_ORDER_CARD, CREATE_ORDER_CASH} from "../type";
import {PostDataHook} from "../../Hooks/PostDataHook";
import { useGetDataToken } from "../../Hooks/GetDataHook";

// create order cash action
export const createOrderCash = (id,body)=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await PostDataHook(`/api/v1/orders/${id}`,body)
        dispatch({
            type:CREATE_ORDER_CASH,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:CREATE_ORDER_CASH,
            payload:e.response
        })
    }
    finally{
    }
}
// create order card action
export const createOrderCard = (id,body)=> async(dispatch)=>{
    //The statements to be executed.
    try{
        const response = await useGetDataToken(`/api/v1/orders/checkout-session/${id}`,body)
        dispatch({
            type:CREATE_ORDER_CARD,
            payload:response
        })
    }
    //Statement that is executed if an exception is thrown in the try-block.
    catch(e){
        dispatch({
            type:CREATE_ORDER_CARD,
            payload:e.response
        })
    }
    finally{
    }
}
