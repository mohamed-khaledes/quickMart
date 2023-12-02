import { useGetDataToken } from "../../Hooks/GetDataHook"
import { PostDataHook } from "../../Hooks/PostDataHook"
import { UpdateDataHook } from "../../Hooks/UpdateDataHook"
import useDeleteData from '../../Hooks/DeleteDataHook'
import {ADD_PRODUCT_TO_CART, APPLAY_COUPON, DELETE_PRODUCT_FROM_CART, GET_ALL_CART, REMOVE_ALL_CART, UPDATE_PRODUCT_IN_CART} from "../type"

export const  addProductToCart =(body)=> async (dispatch)=>{
    try{
        const response = await PostDataHook("/api/v1/cart",body)
        dispatch({
            type:ADD_PRODUCT_TO_CART,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:ADD_PRODUCT_TO_CART,
            payload:e.response
        })
    }
}
export const  deleteProductFromCart =(id)=> async (dispatch)=>{
    try{
        const response = await useDeleteData(`/api/v1/cart/${id}`)
        dispatch({
            type:DELETE_PRODUCT_FROM_CART,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:DELETE_PRODUCT_FROM_CART,
            payload:e.response
        })
    }
}
export const  updateProductInCart =(id,body)=> async (dispatch)=>{
    try{
        const response = await UpdateDataHook(`/api/v1/cart/${id}`,body)
        dispatch({
            type:UPDATE_PRODUCT_IN_CART,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:UPDATE_PRODUCT_IN_CART,
            payload:e.response
        })
    }
}
export const  allCart =()=> async (dispatch)=>{
    try{
        const response = await useGetDataToken(`/api/v1/cart`)
        dispatch({
            type:GET_ALL_CART,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_CART,
            payload:e.response
        })
    }
}
export const  applyCoupon =(body)=> async (dispatch)=>{
    try{
        const response = await UpdateDataHook(`/api/v1/cart/applyCoupon`,body)
        dispatch({
            type:APPLAY_COUPON,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:APPLAY_COUPON,
            payload:e.response
        })
    }
}
export const  removeAllCart =()=> async (dispatch)=>{
    try{
        const response = await useDeleteData(`/api/v1/cart`)
        dispatch({
            type:REMOVE_ALL_CART,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:REMOVE_ALL_CART,
            payload:e.response
        })
    }
}
