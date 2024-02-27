import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Notify from '../../UseNotification'
import {updateCoupon } from '../../../Redux/actions/couponAction'
const UpdateCouponHook = (name,expire,discount) => {
  const dispatch = useDispatch()
  const res = useSelector(state => state.couponReducer.updateCoupon)

  /*states */
  const [updateName,setName] = useState(name)
  const [updateExpire,setExpire] = useState(expire.slice(0,10))
  const [updateDiscount,setDiscount] = useState(discount)
  const [loadingUpdate,setLoading] = useState(true)
  const [isPressUpdate,setIsPressUpdate] = useState(false)

  /*change states functions*/
  const onChangeName =(e)=>{
    setName(e.target.value)
  }
  const onChangeExpire =(e)=>{
    setExpire(e.target.value)
  }
  const onChangeDiscount =(e)=>{
    setDiscount(Number(e.target.value))
  }

  /*on add coupon fn */
  const onUpdateCoupon = async(id)=>{
    /* const isUpperCase = (string) => /^[A-Z]*$/.test(string)*/
      if(updateName===""||updateExpire===""||updateDiscount===0){
        Notify("please complete the data",'warn')
      }
      else{
          setLoading(true)
          setIsPressUpdate(true)
          await dispatch(updateCoupon(id,{
            "name":updateName,
            "expire":updateExpire,
            "discount": updateDiscount
          }))
          setLoading(false)
          setIsPressUpdate(false)
      }
}
    useEffect(()=>{
        if(loadingUpdate === false){
            if(res){
              console.log(res)
                if(res.status===200||res.status===201){
                    Notify("Updated","success")
                    setName("")
                    setDiscount(0)
                    setExpire("")
                }else if(res.status === 400){
                    Notify(res.data.message,"warn")
                }else{
                    Notify("there is a problem","error")
                }
            }
        }
    },[loadingUpdate])

    return[updateName,onChangeName,updateDiscount,onChangeDiscount,updateExpire,onChangeExpire,onUpdateCoupon,isPressUpdate,loadingUpdate] 
}
export default UpdateCouponHook