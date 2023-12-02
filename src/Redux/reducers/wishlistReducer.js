/*
Tasks of reducer 
    - take the actions and update the state just this is a task of reducer
    - Reducer should be pure functions and no any side effect
    - Actions cant handle async request alone
    - Reducer take something and return the same thing after update

    So,where should add async (rest API) code?
*/

// all of imports 
import {GET_ALL_WISHLIST,ADD_TO_WISHLIST,DELETE_FROM_WISHLIST,GET_ERROR} from '../type'

// initial state in one object
const initialState = {
    wishlist:[],
    addToWishlist:[],
    deleteFromWishlist:[],
    loading:true
}

const wishlistReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_WISHLIST:
            return{
                ...state,
                addToWishlist:action.payload,
                loading:false,
            }
        case GET_ALL_WISHLIST:
            return{
                ...state,
                wishlist:action.payload,
                loading:false,
            }
        case DELETE_FROM_WISHLIST:
            return{
                ...state,
                deleteFromWishlist:action.payload,
                loading:false,
            }
        case GET_ERROR:
            return{
                wishlist:action.payload,
                addToWishlist:action.payload,
                deleteFromWishlist:action.payload,
                loading:true
            }
        default:
            return state;
    }
}

export default wishlistReducer