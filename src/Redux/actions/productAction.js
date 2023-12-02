import {
  GET_ERROR,
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_SIMILAR_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTS_BY_CATEGORY,
  GET_ALL_PRODUCTS_BY_CATEGORY_MOBILE,
  GET_ALL_PRODUCTS_BY_CATEGORY_PCCORE,
  GET_ALL_PRODUCTS_BY_CATEGORY_SCHOOL_TOOLS,
  GET_ALL_PRODUCTS_BY_BRAND,
} from "../type";
import {GetDataHook} from "../../Hooks/GetDataHook";
import DeleteDataHook from "../../Hooks/DeleteDataHook";
import { PostDataHookWithImage } from "../../Hooks/PostDataHook";
import {UpdateDataHookWithImage} from "../../Hooks/UpdateDataHook";
// create product actions
export const createProduct = (formData) => async (dispatch) => {
  try {
    const response = await PostDataHookWithImage("/api/v1/products", formData);
    dispatch({
      type: CREATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};
// get all products actions
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload:e.response,
    });
  }
};
// get all products by category
export const getAllProductsByCategory = (limit,page,category_id) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products?limit=${limit}&page=${page}&category=${category_id}`);
    dispatch({
      type: GET_ALL_PRODUCTS_BY_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload:e.response,
    });
  }
};
// get all products by category
export const getAllProductsByCategoryMobile = (limit,page) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products?limit=${limit}&page=${page}&category=64b191a737b50578b48d8997`);
    dispatch({
      type: GET_ALL_PRODUCTS_BY_CATEGORY_MOBILE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload:e.response,
    });
  }
};
// get all products by category
export const getAllProductsByCategoryPcCore = (limit,page) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products?limit=${limit}&page=${page}&category=65685f39ae4aa8d9525c5749`);
    dispatch({
      type: GET_ALL_PRODUCTS_BY_CATEGORY_PCCORE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload:e.response,
    });
  }
};
// get all products by category
export const getAllProductsByCategorySchoolTools = (limit,page) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products?limit=${limit}&page=${page}&category=6568572dae4aa8d9525c551d`);
    dispatch({
      type: GET_ALL_PRODUCTS_BY_CATEGORY_SCHOOL_TOOLS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload:e.response,
    });
  }
};
// get all products by brand
export const getAllProductsByBrand = (limit,page,brand_id) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products?limit=${limit}&page=${page}&brand=${brand_id}`);
    dispatch({
      type: GET_ALL_PRODUCTS_BY_BRAND,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload:e.response,
    });
  }
};
// get all products with pagination
export const getAllProductsPage = (limit, page) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products?limit=${limit}&page=${page}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  } finally {
  }
};
// get all products actions
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products?${queryString}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};
// get product details actions
export const getProductDetails = (id) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};
export const getSimilarProducts = (id) => async (dispatch) => {
  try {
    const response = await GetDataHook(`/api/v1/products?category[in][]=${id}`);
    dispatch({
      type: GET_SIMILAR_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await DeleteDataHook(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};
export const updateProduct = (id,formData) => async (dispatch) => {
  try {
    const response = await UpdateDataHookWithImage(`/api/v1/products/${id}`,formData);
    console.log(response)
    dispatch({
      type: UPDATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};
