import React, { useState, useRef } from "react";
import "./AdminCouponCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteCouponHook from "../../../CustomHooks/Admin/Coupon/DeleteCouponHook";
import SpinnerComponent from "../../Utility/SpinnerComponent/SpinnerComponent";
import { Modal } from "react-bootstrap";
import ButtonComponent from "../../Utility/ButtonComponent/ButtonComponent";
import UpdateCouponHook from "../../../CustomHooks/Admin/Coupon/UpdateCouponHook";
const AdminCouponCard = ({ id, name, expire, discount }) => {
  const [onDeleteCoupon, loading, isPress] = DeleteCouponHook();
  const [
    updateName,
    onChangeName,
    updateDiscount,
    onChangeDiscount,
    updateExpire,
    onChangeExpire,
    onUpdateCoupon,
    isPressUpdate,
    loadingUpdate,
  ] = UpdateCouponHook(name,expire,discount);
  const dateRef = useRef();
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  return (
    <>
      <div className="coupon_box">
        <div className="coupon-body">
          <h4 className="title">{name}</h4>

          <h2 className="how_much">
            {" "}
            <b> {discount}% </b>{" "}
          </h2>
          <h3> OFF </h3>
        </div>
        <button className="btn my-2"> {expire.slice(0, 10)} </button>
        <div className="coupon-update-box d-flex align-items-center justify-content-evenly">
          <button onClick={handleShow}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button onClick={handleShowUpdate}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Coupon delete confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, are you sure to delete this coupon</Modal.Body>
          <Modal.Footer>
            <div className="btn-box" onClick={handleClose}>
              <ButtonComponent btnValue={"cancel"}>cancel</ButtonComponent>
            </div>
            <div className="btn-box" onClick={() => onDeleteCoupon(id)}>
              <ButtonComponent btnValue={"Delete"}>Delete</ButtonComponent>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal show={showUpdate} onHide={handleCloseUpdate}>
          <Modal.Header closeButton>
            <Modal.Title>Coupon Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-inputs position-relative">
              <input
                className="custom-input"
                value={updateName}
                onChange={onChangeName}
                placeholder="Coupon name"
                type="text"
              />

              <input
                className="custom-input"
                ref={dateRef}
                onFocus={() => (dateRef.current.type = "date")}
                onBlur={() => (dateRef.current.type = "text")}
                type="text"
                placeholder="End date"
                value={updateExpire}
                onChange={onChangeExpire}
              />
              <input
                className="custom-input"
                placeholder="Discount"
                type="number"
                step={5}
                min={0}
                max={100}
                value={updateDiscount}
                onChange={onChangeDiscount}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="btn-box" onClick={handleCloseUpdate}>
              <ButtonComponent btnValue={"cancel"}>cancel</ButtonComponent>
            </div>
            <div className="btn-box" onClick={() =>onUpdateCoupon(id)}>
              <ButtonComponent btnValue={"Update"}>Update</ButtonComponent>
            </div>
          </Modal.Footer>
          {isPressUpdate===true?loadingUpdate===true?<SpinnerComponent />:null:null}
        </Modal>
        {isPress === true ? (
          loading === true ? (
            <SpinnerComponent />
          ) : null
        ) : null}
      </div>
    </>
  );
};

export default AdminCouponCard;
