import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Notify from '../UseNotification'
import { applyCoupon } from '../../Redux/actions/cartAction'
const ApplyCouponHook = (coupon) => {
  const dispatch = useDispatch()
  const res = useSelector(state =>state.cartReducer.applyCoupon)
   /*states */
   const [couponName,setCouponName] = useState(coupon)
   const [loading,setLoading] = useState(true)

  /*change states functions*/
  const onChangeCouponName =(e)=>{
    e.persist()
    setCouponName(e.target.value)
  }
 

  /*on add coupon fn */
  const onApplyCoupon = async()=>{
      if(couponName===""){
        Notify("please complete the data",'warn')
      }
      else{
        console.log(couponName)
        setLoading(true)
          await dispatch(applyCoupon({
            couponName:couponName,
          }))
          setLoading(false)
      }
}
    useEffect(()=>{
        if(loading === false){
            if(res){
                if(res.status===200){
                    Notify("coupon added","success")
                }else if(res.status === 400){
                    Notify(res.data.message,"warn")
                }else{
                    Notify("there is a problem","error")
                }
            }
        }
    },[loading])

    return[onApplyCoupon,couponName,onChangeCouponName] 
}
export default ApplyCouponHook