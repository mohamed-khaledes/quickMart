import React, { useState } from 'react'
import './CheckoutPage.css'
import { Container, Row } from 'react-bootstrap'
import PaymentMethod from '../../Components/Checkout/PaymentMethod/PaymentMethod'
import PlaceOrder from '../../Components/Checkout/PlaceOrder/PlaceOrder'
import GetAllUserAddressesHook from '../../CustomHooks/User/Addresses/GetAllUserAddressesHook'
import OrderPayCashHook from '../../CustomHooks/Checkout/OrderPayCashHook'
import GetAllCartHook from '../../CustomHooks/Cart/GetAllCartHook'
import SpinnerComponent from '../../Components/Utility/SpinnerComponent/SpinnerComponent'
import Notify from '../../CustomHooks/UseNotification'
import OrderPayCardHook from '../../CustomHooks/Checkout/OrderPayCardHook'
const CheckoutPage = () => {
  // get all user addresses hook
  const [addresses,loading] = GetAllUserAddressesHook()
  // order cash hook
  const [handleChooseAddress,address_details,createOrderCashFn] = OrderPayCashHook()
  // get all user cart hook
  const[productsNumber,totalPrice,,totalPriceAfterDiscount,,cartLoading,] = GetAllCartHook()
  // order card hook
  const [createOrderCardFn] = OrderPayCardHook(address_details)
  const [payMethod,setPayMethod] = useState()
  const onChangePayMethod = (e)=>{
    setPayMethod(e.target.value)
  }
  const handleOrder =()=>{
    if(payMethod==="CASH"){
      createOrderCashFn()
    }else if(payMethod==="CARD"){
      createOrderCardFn()
    }else{
      Notify("please choose payment method","warn")
    }
  }
  return (
    <div className='page checkout-page'>
        <Container>
        <h2>Payment</h2>
        {
          loading===false&&cartLoading===false?
        <Row>
        <PaymentMethod
        onChangePayMethod={onChangePayMethod}
        addresses={addresses} loading={loading}
        handle={handleChooseAddress}/>
        <PlaceOrder
        orderFn={handleOrder}
        totalPrice={totalPrice}
        discountPrice={totalPriceAfterDiscount}
        prodNum={productsNumber}/>
        </Row>
        :<SpinnerComponent/>
        }
        </Container>
    </div>
  )
}

export default CheckoutPage