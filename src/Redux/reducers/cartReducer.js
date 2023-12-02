import { ADD_PRODUCT_TO_CART, APPLAY_COUPON, DELETE_PRODUCT_FROM_CART, GET_ALL_CART, REMOVE_ALL_CART, UPDATE_PRODUCT_IN_CART } from "../type"

const initialState = {
    allCart:[],
    addProductToCart:[],
    deleteProductFromCart:[],
    updateProductInCart:[],
    removeAllCart:[],
    applyCoupon:[],
    loading:true
}
const cartReducer =(state=initialState,action)=>{
    switch(action.type){
        case  GET_ALL_CART:
            return{
                ...state,
                allCart:action.payload,
                loading:false
            }
        case ADD_PRODUCT_TO_CART:
            return{
                ...state,
                addProductToCart:action.payload,
                loading:false
            }
        case UPDATE_PRODUCT_IN_CART:
            return{
                ...state,
                updateProductInCart:action.payload,
                loading:false
            }
        case DELETE_PRODUCT_FROM_CART:
            return{
                ...state,
                deleteProductFromCart:action.payload,
                loading:false
            }
        case REMOVE_ALL_CART:
            return{
                ...state,
                removeAllCart:action.payload,
                loading:false
            }
        case APPLAY_COUPON:
            return{
                ...state,
                applyCoupon:action.payload,
                loading:false
            }
            default:return{...state}
    }
}

export default cartReducer