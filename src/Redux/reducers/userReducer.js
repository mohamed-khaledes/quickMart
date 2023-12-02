import { ADD_ADDRESS,DELETE_ADDRESS,DELETE_USER,GET_ALL_ADDRESSES,GET_SPECIFIC_ADDRESSES,SPECIFIC_USER,UPDATE_ADDRESS, UPDATE_USER_DATA, UPDATE_USER_PASS } from "../type"

const initialState = {
    allAddresses:[],
    addAddress:[],
    updateAddress:[],
    deleteAddress:[],
    specificAddress:[],
    updateUserData:[],
    deleteUser:[],
    updatePass:[],
    specificUser:[],
    loading:true
}
const userReducer =(state=initialState,action)=>{
    switch(action.type){
        case  GET_ALL_ADDRESSES:
            return{
                ...state,
                allAddresses:action.payload,
                loading:false
            }
        case ADD_ADDRESS:
            return{
                ...state,
                addAddress:action.payload,
                loading:false
            }
        case UPDATE_ADDRESS:
            return{
                ...state,
                updateAddress:action.payload,
                loading:false
            }
        case DELETE_ADDRESS:
            return{
                ...state,
                deleteAddress:action.payload,
                loading:false
            }
        case GET_SPECIFIC_ADDRESSES:
            return{
                ...state,
                specificAddress:action.payload,
                loading:false
            }
        case UPDATE_USER_DATA:
            return{
                ...state,
                updateUserData:action.payload,
                loading:false
            }
        case DELETE_USER:
            return{
                ...state,
                deleteUser:action.payload,
                loading:false
            }
        case UPDATE_USER_PASS:
            return{
                ...state,
                updatePass:action.payload,
                loading:false
            }
        case SPECIFIC_USER:
            return{
                ...state,
                specificUser:action.payload,
                loading:false
            }
            default:return{...state}
    }
}

export default userReducer