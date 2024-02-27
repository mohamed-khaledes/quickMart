import {useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBrandAction } from "../../../Redux/actions/brandAction";
const DeleteBrandHook = (id) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await dispatch(deleteBrandAction(id));
    setShow(false);
  };

  return [show,handleClose,handleShow,handleDelete]
};

export default DeleteBrandHook;
