import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notify from "../../UseNotification";
import { deleteCoupon } from "../../../Redux/actions/couponAction";
const DeleteCouponHook = () => {
  /*states */
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.couponReducer.deleteCoupon);

  /*on add coupon fn */
  const onDeleteCoupon = async (id) => {
    setIsPress(true);
    setLoading(true);
    await dispatch(deleteCoupon(id));
    setIsPress(false);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.status === 204 || res.status === 200) {
          Notify("Deleted", "success");
        } else if (res.status === 400) {
          Notify(res.data.message, "warn");
        } else {
          Notify("there is a problem", "error");
        }
      }
    }
  }, [loading]);

  return [onDeleteCoupon, loading,isPress];
};
export default DeleteCouponHook;
