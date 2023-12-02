import { GET_ERROR ,CREATE_SUB_CATEGORY,GET_ONE_CATEGORY_SUB } from "../type";


const initialState  = {
    subCategory:[],
    loading : true
}

const subCategoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case CREATE_SUB_CATEGORY:
            return{
                ...state,
                subCategory:action.payload,
                loading:false
            }
        case GET_ONE_CATEGORY_SUB:
            return{
                subCategory:action.payload,
                loading:false
            }
        case GET_ERROR:
            return{
                ...state,
                subCategory:action.payload,
                loading:true
            }
            default:
                return state;
    }
}
export default subCategoryReducer