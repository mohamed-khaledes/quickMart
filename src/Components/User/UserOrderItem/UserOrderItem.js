import React from 'react'
import './UserOrderItem.css'
import UserAllOrdersCard from '../UserAllOrdersCard/UserAllOrdersCard'
import NotFoundData from '../../Utility/NotFoundData/NotFoundData'
const UserOrderItem = ({item}) => {
  return (
    <div className='user-all-orders-item'>
        <h4 className='title'>Order #{item.id}</h4>
        <div className='order-item-content'>
          {
            item.cartItems?
            item.cartItems.map((el,index)=>{
              return(
                <UserAllOrdersCard key={index} el={el}/>
              )
            })
            :<NotFoundData />
          }
        </div>
        <div className='order-item-info'>
        <p><span>Is Delivered </span><span>({item.isDelivered===false?("No"):("Yes")})</span></p>
        <p><span>Is Paid </span><span>({item.isPaid===false?("No"):("Yes")})</span></p>
        <p><span>Payment method </span><span>{item.paymentMethodType}</span></p>
        <p><span>Total price </span>
        (
        <span>{item.totalOrderPrice}</span>
         <span className='font-size-14 fw-normal text-color'>egp</span>
        )
         </p>
        </div>
    </div>
  )
}

export default UserOrderItem