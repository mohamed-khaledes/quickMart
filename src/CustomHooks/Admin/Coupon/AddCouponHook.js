import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Notify from '../../UseNotification'
import { addCoupon } from '../../../Redux/actions/couponAction'
const AddCouponHook = () => {
  /*states */
  const [name,setName] = useState("")
  const [expire,setExpire] = useState("")
  const [discount,setDiscount] = useState(0)
  const [addLoading,setLoading] = useState(true)
  const [isPress,setIsPress] = useState(false)
  
  const dispatch = useDispatch()
  const res = useSelector(state => state.couponReducer.addCoupon)

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
  const onAddCoupon = async()=>{
    /* const isUpperCase = (string) => /^[A-Z]*$/.test(string)*/
      if(name===""||expire===""||discount===0){
        Notify("please complete the data",'warn')
      }
      else{
          setIsPress(true)
          setLoading(true)
          await dispatch(addCoupon({
            "name":name,
            "expire":expire,
            "discount": discount
          }))
          setIsPress(false)
          setLoading(false)
      }
}

    useEffect(()=>{
        if(addLoading === false){
            if(res){
                if(res.status===200||res.status===201){
                    Notify("success","success")
                    setName("")
                    setDiscount(0)
                    setExpire("")
                    setTimeout(() => {
                      window.location.reload()
                    }, 1000);
                }else if(res.status === 400){
                    Notify(res.data.message,"warn")
                }else{
                    Notify("there is a problem","error")
                }
            }
        }
    },[addLoading])

    return[name,onChangeName,discount,onChangeDiscount,expire,onChangeExpire,onAddCoupon,addLoading,isPress]
}
export default AddCouponHook