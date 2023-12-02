import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './AdminOrderItem.css'
import { Link } from 'react-router-dom'
const AdminOrderItem = ({item}) => {
  return (
    <Row className='order-item'>
    <Col xs="12" className='order-item-description'>
    <div className='order-item-rate'>
        <h3 className='custom-title'>
                <Link to={`/admin/orderDetailsPage/${item._id}`}>order #{item.id}</Link>
        </h3>
        </div>
        <div className='order-item-brand'>
            <p><span className='fw-bold'>Name:</span><span>{item.user.name}</span></p>
            <p><span className='fw-bold'>Email:</span><span>{item.user.email}</span></p>
            <p><span className='fw-bold'>Phone:</span><span>{item.user.phone}</span></p>
        </div>
        <div className='order-item-info'>
        <p><span>Is Delivered</span> <span>{item.isDelivered===false?("No"):("Yes")}</span></p>
        <p><span>Is Paid</span> <span>{item.isPaid===false?("No"):("Yes")}</span></p>
        <p><span>Payment method</span> <span>{item.paymentMethodType}</span></p>
        <p><span>Total price</span> <span>{item.totalOrderPrice} Egp</span></p>
        </div>
    </Col>
          
</Row>
  )
}

export default AdminOrderItem