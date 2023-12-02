import React from 'react'
import { Col } from 'react-bootstrap'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import './PlaceOrder.css'
const PlaceOrder = ({orderFn,totalPrice,discountPrice,prodNum}) => {
  return (
    <Col className='place-order-parent' xs="12" md="4">
        <div className='order-info'>
            <div>
                <p>Subtotal({prodNum} item)</p>
                {
                    discountPrice>0?
                    <p>EGP {discountPrice}<del>{totalPrice}</del></p>
                    :
                    <p>EGP {totalPrice}</p>
                }
            </div>
            <div>
                <p>Shipping <a href='#'>Details</a></p>
                <p className='shipping-case'>Free</p>
            </div>
        </div>
        <div className='place-order'>
            <div>
                <p>Total<span>(Inclusive of VAT)</span></p>
                {
                    discountPrice>0?
                    <p>EGP {discountPrice}<del>{totalPrice}</del></p>
                    :
                    <p>EGP {totalPrice}</p>
                }
            </div>
            <div className='btn-box w-100' onClick={orderFn}>
            <ButtonComponent btnValue={"checkout"}/>
            </div>
        </div>
    </Col>
  )
}

export default PlaceOrder