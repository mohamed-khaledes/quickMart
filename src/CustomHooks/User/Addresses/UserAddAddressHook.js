import {useState,useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Notify from '../../UseNotification'
import { addAddress } from '../../../Redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
const UserAddAddressHook = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const res = useSelector(state => state.userReducer.addAddress)
  
    /*states */
    const [alias,setAlias] = useState("")
    const [city,setCity] = useState("")
    const [phone,setPhone] = useState("")
    const [details,setDetails] = useState("")
    const [postalCode,setPostalCode] = useState("")
    const [addLoading,setLoading] = useState(true)
    const [isPress,setIsPress] = useState(false)
  
    /*change states functions*/
    const onChangeAlias =(e)=>{
      e.persist()
      setAlias(e.target.value)
    }
    const onChangeCity =(e)=>{
      e.persist()
      setCity(e.target.value)
    }
    const onChangePhone =(e)=>{
      e.persist()
      setPhone(e.target.value)
    }
    const onChangeDetails =(e)=>{
      e.persist()
      setDetails(e.target.value)
    }
    const onChangePostalCode =(e)=>{
      e.persist()
      setPostalCode(e.target.value)
    }
  
    /*on add coupon fn */
    const onAddAddress = async()=>{
        if(alias===""||details===""||phone===""||postalCode===""||city===""){
          Notify("please complete the data",'warn')
        }
        else{
            setIsPress(true)
            setLoading(true)
            await dispatch(addAddress({
                "alias": alias,
                "details": details,
                "phone": phone,
                "city": city,
                "postalCode": postalCode
            }))
            setIsPress(false)
            setLoading(false)
        }
  }
  
      useEffect(()=>{
          if(addLoading === false){
              if(res){
                  if(res.status===200||res.status===201){
                      Notify(res.data.message,"success")
                      setAlias("")
                      setCity("")
                      setDetails("")
                      setPhone("")
                      setPostalCode("")
                      setTimeout(() => {
                        Navigate("/user/userPersonalAddressesPage")
                      }, 1000);
                  }else if(res.status === 400){
                      Notify(res.data.message,"warn")
                  }else{
                      Notify("there is a problem","error")
                  }
              }
          }
      },[addLoading])
  
      return[alias,onChangeAlias,details,onChangeDetails,phone,onChangePhone,city,onChangeCity,
        postalCode,onChangePostalCode,addLoading,isPress,onAddAddress]
}

export default UserAddAddressHook