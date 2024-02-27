import React,{useState} from "react";
import "./CartItem.css";
import { FaStar, FaTrash } from "react-icons/fa";
import { Col, Modal, Row } from "react-bootstrap";
import ButtonComponent from "../../Utility/ButtonComponent/ButtonComponent";
import DeleteCartHook from "../../../CustomHooks/Cart/DeleteCartHook";
import UpdateQuantityHook from "../../../CustomHooks/Cart/UpdateQuantityHook";
import baseUrl from "../../../Api/baseURL";
const CartItem = ({item}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [,onDeleteItemFromCart,,] = DeleteCartHook()
  const [onUpdateQuantity,count,onChangeCount] = UpdateQuantityHook(item)
let imageCover =""
  if(item?.product?.imageCover.includes(baseUrl.getUri(),baseUrl.getUri().length)){
    imageCover = item?.product?.imageCover.slice(baseUrl.getUri().length + 10,item?.product?.imageCover.length)
  }else{
    imageCover = item?.product?.imageCover
  }
  return (
    <Row className="cart-item" key={item._id}>
      {item ? (
          item?.product? (
            <>
              <Col xs="12" md="4" className="cart-item-img">
                <img
                  src={imageCover}
                  alt="cart-item-img"
                ></img>
              </Col>
              <Col xs="12" md="8" className="cart-item-description">
                <div className="cart-title">
                  <h4>{item.product.category.name}</h4>
                  <h4>{item.product.title}</h4>
                </div>
                <div className="cart-item-rate">
                  <div className="rate-value">
                    {
                        item.product.raningsAverage && item.product.ratingsQuantity ?
                       <>
                        <p>{item.product.ratingsAverage}<span><FaStar /></span></p> 
                        <p>({item.product.ratingsQuantity}) Ratings</p>
                       </>
                        :
                        null
                    }
                  </div>
                  <p className="price">
                    Now: <span>egp {item.price}</span>
                  </p>
                  <div className="d-flex align-items-center">
                    <span>color: </span>
                    <p
                      className="product-color"
                      style={{ backgroundColor:item.color }}
                    ></p>
                  </div>
                </div>
                  <div className="cart-item-brand">
                    <p>
                      Brand:{" "}
                      <span className="fw-bold">
                        {item.product.brand.name}
                      </span>
                    </p>
                  </div>
                  <div className="cart-item-quantity">
                    <div>
                        <label>quantity</label>
                        <input onChange={onChangeCount} value={count} type="number" min={1} className="custom-input" />
                    </div>
                    <div className="btn-box" onClick={()=>onUpdateQuantity(item._id)}>
                        <ButtonComponent btnValue={"update"}/>
                    </div>
                  </div>
                <div className="cart-item-remove" onClick={handleShow}>
                  <ButtonComponent btnValue={<FaTrash />} />
                </div>
              </Col>
            </>
          ) : null
      ) : null}
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>delete item from  cart confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, are you sure to this item from your cart</Modal.Body>
          <Modal.Footer>
            <div className="btn-box" onClick={handleClose}>
              <ButtonComponent btnValue={"cancel"}>cancel</ButtonComponent>
            </div>
            <div className="btn-box" onClick={()=>onDeleteItemFromCart(item._id)}>
              <ButtonComponent btnValue={"Delete"}>Delete</ButtonComponent>
            </div>
          </Modal.Footer>
        </Modal>
    </Row>
  );
};

export default CartItem;
