import React,{useState} from 'react'
import './CartCheckout.css'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import DeleteCartHook from '../../../CustomHooks/Cart/DeleteCartHook'
import { Modal } from 'react-bootstrap'
import ApplyCouponHook from '../../../CustomHooks/Cart/ApplyCouponHook'
const CartCheckout = ({totalPrice,totalAfterDiscount,coupon,productsNumber}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [onDeleteAllCart,,,] = DeleteCartHook()
  const [onApplyCoupon,couponName,onChangeCouponName] =ApplyCouponHook(coupon)
  return (
    <div className='cart-checkout'>
        <h3>Order Summary</h3>
        <div className='form'>
        <input value={couponName} onChange={onChangeCouponName} type={"text"} placeholder="Coupon Code"/>
            <div className='w-auto' onClick={onApplyCoupon}>
              <ButtonComponent btnValue={"Apply"}/>
            </div>
        </div>
        <div className='order-info'>
            <div>
              {
                productsNumber===1?
                <p>Subtotal(one item)</p>
                :
                <p>Subtotal({productsNumber} items)</p>
              }
                {
                  totalAfterDiscount>0?
                  <p>EGP <del>{totalPrice}</del> EGP <ins>{totalAfterDiscount}</ins></p>
                  :
                  <p>EGP {totalPrice}</p>
                }
            </div>
            <div>
                <p>Shipping <a href='#'>Details</a></p>
                <p className='shipping-case'>Free</p>
            </div>
        </div>
        <div className='checkout'>
            <div>
                <p>Total<span>(Inclusive of VAT)</span></p>
                {
                  totalAfterDiscount>0?
                  <p>EGP <del>{totalPrice}</del> EGP <ins>{totalAfterDiscount}</ins></p>
                  :
                  <p>EGP {totalPrice}</p>
                }
            </div>
            <Link style={{textDecoration:"none"}} to={"/checkoutPage"}>
            <ButtonComponent btnValue={"CHECKOUT"}/>
            </Link>
        </div>
        <div className='btn-box my-2' onClick={handleShow}>
                  <ButtonComponent btnValue={"Delete All"}/>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>delete cart confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, are you sure to delete all your cart</Modal.Body>
          <Modal.Footer>
            <div className="btn-box" onClick={handleClose}>
              <ButtonComponent btnValue={"cancel"}>cancel</ButtonComponent>
            </div>
            <div className="btn-box" onClick={onDeleteAllCart}>
              <ButtonComponent btnValue={"Delete"}>Delete</ButtonComponent>
            </div>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default CartCheckout