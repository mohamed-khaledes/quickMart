/*
Tasks of reducer 
    - take the actions and update the state just this is a task of reducer
    - Reducer should be pure functions and no any side effect
    - Actions cant handle async request alone
    - Reducer take something and return the same thing after update

    So,where should add async (rest API) code?
*/

// all of imports 
import {GET_ALL_CATEGORY,GET_ERROR,CREATE_CATEGORY,GET_SPECIFIC_CATEGORY,DELETE_CATEGORY} from '../type'

// initial state in one object
const initialState = {
    allCategories:[],
    createCategory:[],
    loading:true,
    specificCategory:[],
    deleteCategory:[],
    SCLoading:true
}

const categoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_CATEGORY:
            return{
                ...state,
                allCategories:action.payload,
                loading:false,
            }
            case CREATE_CATEGORY:
                return{
                    ...state,
                    createCategory:action.payload,
                    loading:false
                }
            case DELETE_CATEGORY:
                return{
                    ...state,
                    deleteCategory:action.payload,
                    loading:false
                }
            case GET_SPECIFIC_CATEGORY:
                return{
                    ...state,
                    specificCategory:action.payload,
                    SCLoading:false
                }
        case GET_ERROR:
            return{
                SCLoading:true,
                loading:true
            }
        default:
            return state;
    }
}

export default categoryReducer