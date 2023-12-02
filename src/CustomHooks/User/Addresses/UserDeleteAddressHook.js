import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notify from "../../UseNotification";
import { deleteAddress } from "../../../Redux/actions/userActions";
const UserDeleteAddressHook = () => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.userReducer.deleteAddress);
  /*states */
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  /*on delete address*/
  const onDeleteAddress = async (id) => {
    setIsPress(true);
    setLoading(true);
    await dispatch(deleteAddress(id));
    setIsPress(false);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.status === 200) {
          Notify(res.data.message, "success");
          setTimeout(() => {
            window.location.reload()
          },1000);
        } else if (res.status === 400) {
          Notify(res.data.message, "warn");
        } else {
          Notify("there is a problem", "error");
        }
      }
    }
  }, [loading]);

  return [onDeleteAddress, loading,isPress];
};
export default UserDeleteAddressHook;
