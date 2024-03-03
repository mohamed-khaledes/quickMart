import {useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBrandAction } from "../../../Redux/actions/brandAction";
const DeleteBrandHook = (id) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch();

  // const res = useSelector((state) => state.brandReducer.deleteBrand)

  const handleDelete = async (e) => {
    e.preventDefault()
    setLoading(true)
    await dispatch(deleteBrandAction(id));
    setLoading(false)
    setShow(false);
  };

  return [show,handleClose,handleShow,handleDelete]
};

export default DeleteBrandHook;
