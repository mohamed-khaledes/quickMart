import React from "react";
import "./UserAllOrdersCard.css";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import baseUrl from '../../../Api/baseURL'
const UserAllOrdersCard = ({el}) => {
  return (
    <div className="user-all-order-card" id={el._id}>
      <Row className="user-order-card">
        <Col xs="12" sm="3" >
          <img className="user-order-card-img" src={
             baseUrl.getUri() +
             "/products/" +
            el.product.imageCover} alt="user-order-card-img"></img>
        </Col>
        <Col xs="12" sm="9" className="user-order-card-description text-start">
          <div className="user-order-card-title">
          <h3 className="order-name fw-bold">{el.product.title}</h3>
          </div>
          <div className="user-order-card-rate my-2 mx-0">
            <div className="rate-value d-flex align-items-center">
              <p><span>{el.product.ratingsAverage || 0}</span><span className="mx-1"><FaStar /></span></p>
              <p>({el.product.ratingsQuantity || 0}) Ratings</p>
            </div>
          </div>
          <div className="user-order-card-properties">
          <div className="price fw-bold"><span>Price:</span> <span className="egp">egp</span><span>{el.price}</span></div>
            <div className="d-flex align-items-center my-2">
              <span>Count:</span><p className="circle">{el.count}</p>
              </div>
            <div className="color-wrapper d-flex align-items-center my-2">
              <span>Color:</span>
              <p style={{backgroundColor:el.color}} className="circle">{el.Color}</p></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrdersCard;
