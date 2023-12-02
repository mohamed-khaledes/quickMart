import {useState,useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Notify from '../../UseNotification'
import { specificAddress,updateAddress } from '../../../Redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
const UserUpdateAddressHook = (id) => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    //states
    const [alias,setAlias] = useState("")
    const [city,setCity] = useState("")
    const [phone,setPhone] = useState("")
    const [details,setDetails] = useState("")
    const [postalCode,setPostalCode] = useState("")
    const [updateLoading,setUpdateLoading] = useState(true)
    const [isPress,setIsPress] = useState(false)
    const [loading,setLoading] = useState(true)
    //selector
    const res = useSelector(state => state.userReducer.specificAddress)
    const updateRes = useSelector(state => state.userReducer.updateAddress)
    useEffect(()=>{
        const get=async()=>{
            setLoading(true)
            await dispatch(specificAddress(id))
            setLoading(false)
        }
        get()
    },[])
    // set a current values to see what i update
    useEffect(()=>{
        if(loading === false){
            if(res&&res.status==="success"){
                setAlias(res.data.alias)
                setCity(res.data.city)
                setPhone(res.data.phone)
                setDetails(res.data.details)
                setPostalCode(res.data.postalCode)
            }
        }
    },[loading])
  
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
    const onUpdateAddress = async()=>{
        if(alias===""||details===""||phone===""||postalCode===""||city===""){
          Notify("please complete the data",'warn')
        }
        else{
            setIsPress(true)
            setUpdateLoading(true)
            await dispatch(updateAddress(id,{
                alias:alias,
                details:details,
                phone:phone,
                city:city,
                postalCode:postalCode
            }))
            setIsPress(false)
            setUpdateLoading(false)
        }
  }
  
      useEffect(()=>{
          if(updateLoading === false){
              if(updateRes){
                  if(updateRes.status===200){
                      Notify(updateRes.data.message,"success")
                      setTimeout(() => {
                        Navigate("/user/userPersonalAddressesPage")
                      }, 1000);
                  }else if(updateRes.status === 400){
                      Notify(updateRes.data.message,"warn")
                  }else{
                      Notify("there is a problem","error")
                  }
              }
          }
      },[updateLoading])
  
      return[alias,onChangeAlias,details,onChangeDetails,phone,onChangePhone,city,onChangeCity,
        postalCode,onChangePostalCode,updateLoading,isPress,onUpdateAddress]
}

export default UserUpdateAddressHook