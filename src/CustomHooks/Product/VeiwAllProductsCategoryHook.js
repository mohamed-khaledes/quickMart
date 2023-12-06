import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from "../../Redux/actions/productAction";
const VeiwAllProductsCategoryHook = (id) => {
    let limit =8;
    let page=""
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.allProductsByCategory);
    const [loading,setLoading] = useState(true)
    const getAllProductsFn = async () => {
      setLoading(true)
      await dispatch(getAllProductsByCategory(limit,page,id));
      setLoading(false)
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
     setLoading(true)
    await dispatch(getAllProductsByCategory(limit,page,id));
      setLoading(false)
  };

  return[items,pageCount,onPress,loading]
}

export default VeiwAllProductsCategoryHook