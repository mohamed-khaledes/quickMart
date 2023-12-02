// to combine all of reducers 
import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import brandReducer from "./brandReducer";
import subCategoryReducer from '../reducers/subCategoryReducer'
import productReducer from '../reducers/productReducer'
import authReducer from './authReducer'
import reviewsReducer from './reviewsReducer'
import wishlistReducer from './wishlistReducer'
import couponReducer from './couponReducer'
import userReducer from './userReducer'
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import orderReducer from "./orderReducer";
export default combineReducers({
    userReducer:userReducer,
    categoryReducer:categoryReducer,
    brandReducer:brandReducer,
    subCategoryReducer:subCategoryReducer,
    productReducer:productReducer,
    authReducer:authReducer,
    reviewsReducer:reviewsReducer,
    wishlistReducer:wishlistReducer,
    couponReducer:couponReducer,
    cartReducer:cartReducer,
    checkoutReducer:checkoutReducer,
    orderReducer:orderReducer,
})  