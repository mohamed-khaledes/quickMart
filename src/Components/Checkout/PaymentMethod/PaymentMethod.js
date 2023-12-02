import React from 'react'
import './PaymentMethod.css'
import { Col } from 'react-bootstrap'
import paypal from '../../../imgs/paypal.png'
import visa from '../../../imgs/visa.png'
import credit from '../../../imgs/credit-card.png'
const PaymentMethod = ({addresses,loading,handle,onChangePayMethod}) => {
  return (
        <Col className='payment-methods p-0' xs="12" md="8">
            <form action='/'>
            <div className='radio-parent'>
              <div className='d-flex align-items-center'>
                <input onChange={onChangePayMethod} type="radio" id="Debit/Credit-Card" name="payment-method" value="CARD"/>
                <label htmlFor="Debit/Credit-Card">Debit/Credit Card</label>
              </div>
              <div className='payment-icons'>
                <img src={paypal} alt="payment-icon"></img>
                <img src={visa} alt="payment-icon"></img>
                <img src={credit} alt="payment-icon"></img>
              </div>
            </div>
            <div className='radio-parent'>
              <div className='d-flex align-items-center'>
                <input onChange={onChangePayMethod}  type="radio" id="Cash On Delivery" name="payment-method" value="CASH"/>
                <label htmlFor="Cash On Delivery">Cash On Delivery</label>
              </div>
              <span>Cash</span>
            </div>
            </form>
            <div className='choose-address-wrapper p-3 my-3 mx-0'>
              <label className='d-block my-2'>choose address</label>
              {
                loading===false?
                <select className='custom-select' onChange={handle}>
                  <option value="0" className='address-option'>select address</option>
                {
                  addresses?
                  addresses.data?
                  addresses.data.map((item)=>{
                    return(
                      <option key={item._id} className='address-option' value={item._id}>{item.alias}</option>
                    )
                  })
                  :
                  <option value="0" className='address-option'>no addresses</option>
                  :
                  <option  value="0" className='address-option'>no addresses</option>
                }
              </select>
                :null
              }
            </div>
        </Col>
  )
}

export default PaymentMethod