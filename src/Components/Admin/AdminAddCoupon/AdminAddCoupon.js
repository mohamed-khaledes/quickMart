import React,{useRef} from 'react'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import AddCouponHook from '../../../CustomHooks/Admin/Coupon/AddCouponHook'
import GetAllCouponsHook from '../../../CustomHooks/Admin/Coupon/GetAllCouponsHook'
import AdminCouponCard from '../AdminCouponCard/AdminCouponCard'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import Pagenation from '../../../Components/Utility/Pagenation/Pagenation'
const AdminAddCoupon = () => {
  const date_Ref = useRef()
  const [name,onChangeName,discount,onChangeDiscount,expire,onChangeExpire,onAddCoupon,addLoading,isPress]=AddCouponHook()
  const [coupons,loading,pageCount,onPress]= GetAllCouponsHook()
  return (
    <div className='admin-add-coupon'>
        <h4 className='text-left custom-title'>Add coupon</h4>
        <div className='form-inputs position-relative'>
        <input className='custom-input'
        value={name}
        onChange={onChangeName}
        placeholder='Coupon name'
        type='text'/>

        <input className='custom-input'
        ref={date_Ref}
        onFocus={()=>date_Ref.current.type="date"}
        onBlur={()=>date_Ref.current.type="text"}
        type='text'
        placeholder='End date'
        value={expire}
        onChange={onChangeExpire}
        />
        <input className='custom-input'
        placeholder='Discount'
        type='number'
        step={5}
        min={0}
        max={100}
        value={discount}
        onChange={onChangeDiscount}
        />
        <div className='btn-box' onClick={onAddCoupon}>
            <ButtonComponent btnValue={"save coupon"}/>
        </div>
        {addLoading===true&&isPress===true?
        <SpinnerComponent />
        :null  
      }
        </div>
        <div className='all-coupons position-relative'>
          <div className='row'>
          {
            loading===false?
            coupons?
            coupons.data.map((coupon)=>{return(
              <div className='col-12 col-sm-6 col-md-4' key={coupon._id}>
              <AdminCouponCard id={coupon._id} name={coupon.name} discount={coupon.discount} expire={coupon.expire}/>
              </div>
            )})
            :<p>not found coupons</p>
            :<SpinnerComponent />
          }
          </div>
          <div className='row'>
            <Pagenation pageCount={pageCount} onPress={onPress} />
          </div>
        </div>
    </div>
  )
}

export default AdminAddCoupon