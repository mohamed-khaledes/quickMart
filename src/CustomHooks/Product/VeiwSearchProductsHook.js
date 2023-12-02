import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllProductsSearch,} from "../../Redux/actions/productAction";

const VeiwSearchProductsHook = () => {
  let limit =8;
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productReducer.allProducts);
  const getAllProductsFn = async () => {
    getStorage();
    sortData();
    await dispatch(getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${searchWord}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`
    ));
  };
  useEffect(() => {
    getAllProductsFn();
  },[]);

  let items = [];
  //why i used try and catch? to dont have errors if something happend in api
  try {
    if (allProducts.data) {
      items = allProducts.data;
    } else {
      items = [];
    }
  } catch (e) {}

  let pagenate = [];
  try {
    if (allProducts.paginationResult) {
      pagenate = allProducts.paginationResult.numberOfPages;
    } else {
      pagenate = [];
    }
  } catch (e) {}

  let results = 0;
  try {
    if (allProducts.results) {
      results = allProducts.results;
    } else {
      results = 0;
    }
  } catch (e) {}

  //on press function for pagenation
  const onPress = async (page) => {
    getStorage();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${searchWord}&page=${page}${queryCat}${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };
  let searchWord = "",
    queryCat ="",
    queryBrand="",
    priceFrom="",
    priceTo="";
    let priceFromString = "",priceToString =""
  //======================================================
  //function to get values from localStorage
  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null) {
      searchWord = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("queryCat") != null) {
      queryCat = localStorage.getItem("queryCat");
    }
    if (localStorage.getItem("queryBrand") != null) {
      queryBrand = localStorage.getItem("queryBrand");
    }
    if (localStorage.getItem("priceFrom") != null) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }
    if (priceFrom === "" || priceFrom <= 0) {
        priceFromString = ""
    } else {
        priceFromString = `&price[gt]=${priceFrom}`
    }
    if (priceTo === "" || priceTo <= 0) {
        priceToString = ""
    } else {
        priceToString = `&price[lte]=${priceTo}`
    }
  };
  //============================================================
  if (pagenate) {
    var pageCount = pagenate;
  } else {
    pageCount = 0;
  }

  //sort products
  let sortType = "",
    sort = "";
  const sortData = () => {
    if (localStorage.getItem("sortType") != null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "high to low") {
      sort = "-price";
    } else if (sortType === "low to high") {
      sort = "price";
    } else if (sortType === "recomended") {
      sort = "recomended";
    } else if (sortType === "more sold") {
      sort = "sold";
    } else if (sortType === "rating") {
      sort = "ratingsQuantity";
    } else if (sortType === "No sort") {
      sort = "";
    }
  };

  return [items, pageCount, onPress, getAllProductsFn, results];
};

export default VeiwSearchProductsHook;
