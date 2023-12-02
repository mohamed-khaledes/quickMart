import {GET_SPESIFIC_USER_ORDER, GET_USER_ORDERS, UPDATE_ORDER_TO_DELIVERD, UPDATE_ORDER_TO_PAID} from "../type"

const initialState = {
    userOrders:[],
    specificOrder:[],
    updateOrderPay:[],
    updateOrderDeliver:[],
    loading:true
}
const orderReducer =(state=initialState,action)=>{
    switch(action.type){
        case  GET_USER_ORDERS:
            return{
                ...state,
                userOrders:action.payload,
                loading:false
            }
        case  GET_SPESIFIC_USER_ORDER:
            return{
                ...state,
                specificOrder:action.payload,
                loading:false
            }
        case  UPDATE_ORDER_TO_PAID:
            return{
                ...state,
                updateOrderPay:action.payload,
                loading:false
            }
        case  UPDATE_ORDER_TO_DELIVERD:
            return{
                ...state,
                updateOrderDeliver:action.payload,
                loading:false
            }
            default:return{...state}
    }
}

export default orderReducer