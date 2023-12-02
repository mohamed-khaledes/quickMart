/*
Tasks of reducer 
    - take the actions and update the state just this is a task of reducer
    - Reducer should be pure functions and no any side effect
    - Actions cant handle async request alone
    - Reducer take something and return the same thing after update

    So,where should add async (rest API) code?
*/

// all of imports 
import {GET_ALL_BRANDS,GET_ERROR,CREATE_BRAND,GET_SPECIFIC_BRAND, DELETE_BRAND} from '../type'

// initial state in one object
const initialState = {
    brands:[],
    loading:true,
    specificBrand:[],
    specificBrandLoading:true,
    createBrand:[],
    deleteBrand:[],
}

const brandReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_BRANDS:
            return{
                ...state,
                brands:action.payload,
                loading:false,
            }
        case GET_SPECIFIC_BRAND:
            return{
                ...state,
                specificBrand:action.payload,
                specificBrandLoading:false,
            }
            case CREATE_BRAND:
                return{
                    createBrand:action.payload,
                    loading:false
                }
            case DELETE_BRAND:
                return{
                    deleteBrand:action.payload,
                    loading:false
                }
        case GET_ERROR:
            return{
                brands:action.payload,
                createBrand:action.payload,
                specificBrand:action.payload,
                loading:true
            }
        default:
            return state;
    }
}

export default brandReducer