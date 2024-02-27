import React from 'react'
import './CartPage.css'
import emptyCart from '../../imgs/emptyCart.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartCheckout from '../../Components/Cart/CartCheckout/CartCheckout'
import CartItem from '../../Components/Cart/CartItem/CartItem'
import ButtonComponent from '../../Components/Utility/ButtonComponent/ButtonComponent'
import GetAllCartHook from '../../CustomHooks/Cart/GetAllCartHook'
import SpinnerComponent from '../../Components/Utility/SpinnerComponent/SpinnerComponent'
import NotFoundData from '../../Components/Utility/NotFoundData/NotFoundData'
const CartPage = () => {
  const[productsNumber,totalPrice,items,totalAfterDiscount,coupon,loading]= GetAllCartHook()
      return (
        <div className='page cart-page position-relative'>
          <Container>
            <h2 className='cart-page-title'>
            Cart {productsNumber===1?<span> (one item)</span>:<span> ({productsNumber} items)</span>}
            </h2>
              {
                loading===false?
                items?
                items.length>0?
                <Row>
                <Col md="8">
                  {
                    items.map((item,index)=>{return(
                      <CartItem item={item} key={index}/>
                    )})
                  }
                </Col>
                <Col xs="12" md="4">
                <CartCheckout productsNumber={productsNumber} totalAfterDiscount={totalAfterDiscount} coupon={coupon}  totalPrice={totalPrice}/>
                </Col>
                </Row>
                :
                <Row>
                <Col>
                <div>
                    <div className='empty-cart text-center'>
                      <img src={emptyCart} alt="empty-cart-img"></img>
                      <h2>Your shopping cart looks empty</h2>
                      <p>What are you waiting for?</p>
                      <Link to="/">
                      <ButtonComponent btnValue={"START SHOPPING"}/>
                      </Link>
                    </div>
                </div>
                </Col>
                </Row>
                :<NotFoundData/>
                :<SpinnerComponent />
              }
          </Container>
        </div>
      )
}
export default CartPage
