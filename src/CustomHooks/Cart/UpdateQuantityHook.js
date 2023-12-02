import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Notify from '../../CustomHooks/UseNotification'
import { updateProductInCart } from '../../Redux/actions/cartAction'
const UpdateQuantityHook = (item) => {
  const dispatch = useDispatch()
  const res = useSelector(state => state.cartReducer.updateProductInCart)
   /*states */
   const [count,setCount] = useState(0)
   const [loading,setLoading] = useState(true)
useEffect(()=>{
    if(item){
        if(item.item){
            setCount(item.item.count)
        }
    }else{
        setCount(0)
    }
},[])

  /*change states functions*/
  const onChangeCount =(e)=>{
    e.persist()
    setCount(e.target.value)
  }
 
  /*on add coupon fn */
  const onUpdateQuantity = async(id)=>{
      if(count===""){
        Notify("please complete the data",'warn')
      }
      else{
        setLoading(true)
          await dispatch(updateProductInCart(id,{
            "count":count,
          }))
          setLoading(false)
      }
}
    useEffect(()=>{
        if(loading === false){
            if(res){
                if(res.status===200){
                    Notify("count updated","success")
                    setTimeout(() => {
                        window.location.reload(false)
                    },1000);
                }else if(res.status === 400){
                    Notify(res.data.message,"warn")
                }else{
                    Notify("there is a problem","error")
                }
            }
        }
    },[loading])

    return[onUpdateQuantity,count,onChangeCount] 
}
export default UpdateQuantityHook