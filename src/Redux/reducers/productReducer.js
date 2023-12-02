/*
Tasks of reducer 
    - take the actions and update the state just this is a task of reducer
    - Reducer should be pure functions and no any side effect
    - Actions cant handle async request alone
    - Reducer take something and return the same thing after update

    So,where should add async (rest API) code?
*/

// all of imports
import {
  GET_ERROR,
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_BY_CATEGORY,
  GET_ALL_PRODUCTS_BY_BRAND,
  GET_PRODUCT_DETAILS,
  GET_SIMILAR_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTS_BY_CATEGORY_MOBILE,
  GET_ALL_PRODUCTS_BY_CATEGORY_PCCORE,
  GET_ALL_PRODUCTS_BY_CATEGORY_SCHOOL_TOOLS,
} from "../type";

// initial state in one object
const initialState = {
  loading: true,
  products:[],
  allProducts:[],
  allProductsByCategory:[],
  allProductsByCategoryMobile:[],
  allProductsByCategoryPcCore:[],
  allProductsByCategorySchoolTools:[],
  allProductsByBrand:[],
  productDetails: [],
  similarProducts: [],
  deleteProduct: [],
  updateProduct: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts:action.payload,
        loading:false,
      };
    case GET_ALL_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        allProductsByCategory:action.payload,
        loading:false,
      };
    case GET_ALL_PRODUCTS_BY_CATEGORY_MOBILE:
      return {
        ...state,
        allProductsByCategoryMobile:action.payload,
        loading:false,
      };
    case GET_ALL_PRODUCTS_BY_CATEGORY_PCCORE:
      return {
        ...state,
        allProductsByCategoryPcCore:action.payload,
        loading:false,
      };
    case GET_ALL_PRODUCTS_BY_CATEGORY_SCHOOL_TOOLS:
      return {
        ...state,
        allProductsByCategorySchoolTools:action.payload,
        loading:false,
      };
    case GET_ALL_PRODUCTS_BY_BRAND:
      return {
        ...state,
        allProductsByBrand:action.payload,
        loading:false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload,
        productDetailsLoading: false,
      };
    case GET_SIMILAR_PRODUCTS:
      return {
        ...state,
        similarProducts: action.payload,
        similarProductsLoading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
        deleteProductLoading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct:action.payload,
        updateProductLoading: false,
      };
    case GET_ERROR:
      return {
        products:action.payload,
        loading: true,
      };
    default:
      return state
  }
};

export default productReducer;
