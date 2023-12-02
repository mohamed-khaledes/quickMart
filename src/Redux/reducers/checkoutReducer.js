import {CREATE_ORDER_CARD, CREATE_ORDER_CASH} from "../type"

const initialState = {
    orderCash:[],
    orderCard:[],
    loading:true
}
const checkoutReducer =(state=initialState,action)=>{
    switch(action.type){
        case  CREATE_ORDER_CASH:
            return{
                ...state,
                orderCash:action.payload,
                loading:false
            }
        case  CREATE_ORDER_CARD:
            return{
                ...state,
                orderCard:action.payload,
                loading:false
            }
            default:return{...state}
    }
}

export default checkoutReducer