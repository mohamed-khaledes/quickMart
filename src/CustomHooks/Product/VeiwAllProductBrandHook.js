import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByBrand } from "../../Redux/actions/productAction";
const VeiwAllProductsBrandHook = (id) => {
    let limit =8;
    let page=""
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.allProductsByBrand);
    const loading = useSelector((state) => state.productReducer.loading);
    const getAllProductsFn = async () => {
      await dispatch(getAllProductsByBrand(limit,page,id));
    };
    useEffect(() => {
      getAllProductsFn();
    },[id]);
  
    let items = [];
    // Why i used try and catch? to don't have errors if something happend in api
    try {
      if (products.data) {
        items = products.data;
      } else {
        items = [];
      }
    } catch (e) {}
  
    let pagenate = [];
    try {
      if (products.paginationResult) {
        pagenate = products.paginationResult.numberOfPages;
      } else {
        pagenate = [];
      }
    } catch (e) {}

    if (pagenate) {
        var pageCount = pagenate;
      } else {
        pageCount = 0;
      }
   // On press function for pagenation
   const onPress = async (page) => {
    await dispatch(
      getAllProductsByBrand(limit,page,id)
    );
  };

  return[items,pageCount,onPress,loading]
}

export default VeiwAllProductsBrandHook