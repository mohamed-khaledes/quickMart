import {useState,useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { specificAddress } from '../../Redux/actions/userActions'
import GetAllCartHook from '../Cart/GetAllCartHook'
import { createOrderCash } from '../../Redux/actions/checkoutAction'
import Notify from '../../CustomHooks/UseNotification'
import { useNavigate } from 'react-router-dom'
const OrderPayCashHook = () => {
 const dispatch = useDispatch()
 const Navigate = useNavigate()
 // data from redux states
 const res = useSelector(state => state.userReducer.specificAddress)
 const orderCashResponse = useSelector(state => state.checkoutReducer.orderCash)
// states of this hook
 const [loading,setLoading] = useState(true)
 const [orderCash_loading,set_orderCash_Loading] = useState(true)
 const [address_details,set_address_details] = useState([])

// hook to get cart id 
 const[,,,,,,cardID] = GetAllCartHook()
// when the user choose a specific address
 const handleChooseAddress =(e)=>{
    set_address_details([])
    if(e.target.value!=="0"){
        get(e.target.value)
    }
   }
// to get details of specific address
   const get=async(id)=>{
    setLoading(true)
    await dispatch(specificAddress(id))
    setLoading(false)
}
// to store address details in his state
useEffect(()=>{
    if(loading === false){
        if(res&&res.status==="success"){
            set_address_details(res.data)
        }else{
            set_address_details([])
        }
    }
},[loading])
// create order cash function
const createOrderCashFn =async()=>{
    if(cardID==="0"){
        Notify("please add a product to your cart","warn")
    }else if(address_details.length<=0){
        Notify("please choose an address","warn")
    }else{
        set_orderCash_Loading(true)
        await dispatch(createOrderCash(cardID,{
            shippingAddress:{
                details:address_details.alias,
                phone:address_details.phone,
                city:address_details.city,
                postalCode:address_details.postalCode
                }
        }))
        set_orderCash_Loading(false)
    }
}
useEffect(()=>{
if(orderCash_loading===false){
    if(orderCashResponse.status===201){
        Notify("Order completed","success")
        setTimeout(() => {
            Navigate('user/allorders')
        },1000);
    }else{
        Notify("there is a problem","warn")
    }
}
},[orderCash_loading])
return[handleChooseAddress,address_details,createOrderCashFn]
}

export default OrderPayCashHook