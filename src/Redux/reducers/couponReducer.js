import { ADD_COUPON,ALL_COUPONS,DELETE_COUPON,UPDATE_COUPON } from "../type"

const initialState = {
    allCoupons:[],
    addCoupon:[],
    updateCoupon:[],
    deleteCoupon:[],
    loading:true
}
const couponReducer =(state=initialState,action)=>{
    switch(action.type){
        case  ALL_COUPONS:
            return{
                ...state,
                allCoupons:action.payload,
                loading:false
            }
        case ADD_COUPON:
            return{
                ...state,
                addCoupon:action.payload,
                loading:false
            }
        case UPDATE_COUPON:
            return{
                ...state,
                updateCoupon:action.payload,
                loading:false
            }
        case DELETE_COUPON:
            return{
                ...state,
                deleteCoupon:action.payload,
                loading:false
            }
            default:return{...state}
    }
}

export default couponReducer