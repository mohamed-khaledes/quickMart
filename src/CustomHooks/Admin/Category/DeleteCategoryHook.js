import {useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../Redux/actions/categoryAction";
const DeleteCategoryHook = (id) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await dispatch(deleteCategory(id));
    setShow(false);
    window.location.reload()
  };

  return [show,handleClose,handleShow,handleDelete]
};

export default DeleteCategoryHook;
