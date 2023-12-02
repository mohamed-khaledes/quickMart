import React from 'react'
import './AdminOrderDetails.css'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import AdminOrderItemCard from '../../../Pages/Admin/AdminOrderItemCard/AdminOrderItemCard'
import UpdateOrderStatusHook from '../../../CustomHooks/OrderHooks/UpdateOrderStatusHook'
const AdminOrderDetails = ({orderData}) => {
  const [,,,,
    onClickOrderPaid,onChangePayStatus,onClickOrderDeliverd,
    onChangeDeliverStatus] = UpdateOrderStatusHook(orderData._id)
  return (
    <div className='admin-order-details bg-white p-3'>
        <h4 className='custom-title'>Order #{orderData.id}</h4>
        {
          orderData.cartItems?
          orderData.cartItems.map((item,index)=>{
            return(
              <AdminOrderItemCard key={index} el={item}/>
            )
          })
          :null
        }
        <div className='order-item-info'>
        <p><span>Is Delivered </span><span>({orderData.isDelivered===false?("No"):("Yes")})</span></p>
        <p><span>Is Paid </span><span>({orderData.isPaid===false?("No"):("Yes")})</span></p>
        <p><span>Payment method </span><span>({orderData.paymentMethodType})</span></p>
        <p><span>Total price </span>
        (
        <span>{orderData.totalOrderPrice}</span>
         <span className='font-size-14 fw-normal text-color'>egp</span>
        )
         </p>
        </div>
        <div className='admin-order-info'>
          {
            orderData.user?
        <div className='client-info'>
            <h4 className='custom-title'>Client Info</h4>
            <p><span className='fw-bold'>Name:</span><span className='font-size-16 fw-normal text-color'>{orderData.user.name}</span></p>
            <p><span className='fw-bold'>Email:</span><span className='font-size-16 fw-normal text-color'>{orderData.user.email}</span></p>
            <p><span className='fw-bold'>Phone:</span><span className='font-size-16 fw-normal text-color'>{orderData.user.phone}</span></p>
        </div>
            :null
          }
        <div className='admin-order-status d-flex align-items-center justify-content-between'>
          <div className='change-pay-status'>
            <select className='custom-select' onChange={onChangePayStatus}>
                  <option value="0" className='address-option'>paying off</option>
                  <option value={true} className='address-option'>paid</option>
                  <option value={false} className='address-option'>not paid</option>
              </select>
              <div className='btn-box my-2' onClick={onClickOrderPaid}>
              <ButtonComponent btnValue={"save"}/>
              </div>
          </div>
          <div className='change-deliver-status'>
            <select className='custom-select' onChange={onChangeDeliverStatus}>
                  <option value="0" className='address-option'>delivering</option>
                  <option value={true} className='address-option'>delivered</option>
                  <option value={false} className='address-option'>not delivered</option>
              </select>
              <div className='btn-box  my-2' onClick={onClickOrderDeliverd}>
              <ButtonComponent btnValue={"save"}/>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default AdminOrderDetails