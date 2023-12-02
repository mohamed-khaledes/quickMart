import { useGetDataToken } from "../../Hooks/GetDataHook"
import { PostDataHook } from "../../Hooks/PostDataHook"
import { UpdateDataHook } from "../../Hooks/UpdateDataHook"
import useDeleteData from '../../Hooks/DeleteDataHook'
import { ADD_COUPON, ALL_COUPONS, DELETE_COUPON, UPDATE_COUPON } from "../type"

export const  addCoupon =(body)=> async (dispatch)=>{
    try{
        const response = await PostDataHook("/api/v1/coupons",body)
        dispatch({
            type:ADD_COUPON,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:ADD_COUPON,
            payload:e.response
        })
    }
}
export const  deleteCoupon =(id)=> async (dispatch)=>{
    try{
        const response = await useDeleteData(`/api/v1/coupons/${id}`)
        dispatch({
            type:DELETE_COUPON,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:DELETE_COUPON,
            payload:e.response
        })
    }
}
export const  updateCoupon =(id,body)=> async (dispatch)=>{
    try{
        const response = await UpdateDataHook(`/api/v1/coupons/${id}`,body)
        dispatch({
            type:UPDATE_COUPON,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:UPDATE_COUPON,
            payload:e.response
        })
    }
}
export const  allCoupons =(page)=> async (dispatch)=>{
    try{
        const response = await useGetDataToken(`/api/v1/coupons?limit=6&page=${page}`)
        dispatch({
            type:ALL_COUPONS,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:ALL_COUPONS,
            payload:e.response
        })
    }
}