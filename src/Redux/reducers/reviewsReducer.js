/*
Tasks of reducer 
    - take the actions and update the state just this is a task of reducer
    - Reducer should be pure functions and no any side effect
    - Actions cant handle async request alone
    - Reducer take something and return the same thing after update

    So,where should add async (rest API) code?
*/

// all of imports 
import {ADD_REVIEW,GET_ALL_REVIEWS,GET_ERROR,DELETE_REVIEW,UPDATE_REVIEW} from '../type'

// initial state in one object
const initialState = {
    reviews:[],
    addReview:[],
    deleteReview:[],
    updateReview:[],
    loading:true,
}

const reviewsReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_REVIEW:
            return{
                ...state,
                addReview:action.payload,
                loading:false,
            }
        case GET_ALL_REVIEWS:
            return{
                ...state,
                reviews:action.payload,
                loading:false,
            }
        case DELETE_REVIEW:
            return{
                ...state,
                deleteReview:action.payload,
                loading:false,
            }
        case UPDATE_REVIEW:
            return{
                ...state,
                updateReview:action.payload,
                loading:false,
            }
        case GET_ERROR:
            return{
                reviews:action.payload,
                addReview:action.payload,
                deleteReview:action.payload,
                loading:true
            }
        default:
            return state;
    }
}

export default reviewsReducer