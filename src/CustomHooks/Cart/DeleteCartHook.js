import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFromCart,removeAllCart } from "../../Redux/actions/cartAction";
import Notify from "../UseNotification";
const DeleteCartHook = () => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.cartReducer.removeAllCart);
  const deleteOneItemRes = useSelector((state) => state.cartReducer.deleteProductFromCart);
  /*states */
  const [loading, setLoading] = useState(true);
  const [loadingOneItem,setLoadingOneItem] = useState(true);
  const [isPress, setIsPress] = useState(false);

  /*on add coupon fn */
  const onDeleteAllCart = async () => {
    setIsPress(true);
    setLoading(true);
    await dispatch(removeAllCart());
    setIsPress(false);
    setLoading(false);
  };
  const onDeleteItemFromCart = async (id) => {
    setLoadingOneItem(true);
    await dispatch(deleteProductFromCart(id));
    setLoadingOneItem(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res)
        if(res.status===204){
            window.location.reload(false)
        }
      }
    }
  }, [loading]);

  useEffect(() => {
    if (loadingOneItem === false) {
      if (deleteOneItemRes) {
        console.log(deleteOneItemRes)
        if(deleteOneItemRes.status===200){
            Notify("product deleted","success")
            setTimeout(() => {
                window.location.reload(false)
            },1000);
        }else{
            Notify("there is a problem","error")
        }
      }
    }
  },[loadingOneItem]);

  return [onDeleteAllCart,onDeleteItemFromCart,loading,isPress];
};
export default DeleteCartHook;
