import {useState,useEffect} from 'react'
import Notify from '../UseNotification'
import { useDispatch,useSelector } from 'react-redux'
import { resetPassword } from '../../Redux/actions/authAction'
const ResetPasswordHook = () => {
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [newPass,setNewPass] = useState("")
    const [loading,setLoading] = useState(true)
    const [isPress,setIsPress] = useState(false)
    const res = useSelector((state)=>state.authReducer.resetPassword)

    const onChangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const onChangeNewPass = (e)=>{
        setNewPass(e.target.value)
    }
    const onSubmit = async(e)=>{
        e.preventDefault()
        if(email === ""||newPass===""){
            Notify("complete the data","warn")
        }else{
            setLoading(true)
            setIsPress(true)
            await dispatch(resetPassword({
                email:email,
                newPassword:newPass
            }))
            setLoading(false)
            setIsPress(false)
        }
    }
    useEffect(()=>{
        if(loading === false){
            if(res){
                if(res.status===200){
                    Notify("Password updated","success")
                    window.location.href="/"
                }else{
                    Notify("there is a problem","error")
                }
            }
        }
    },[loading])
    return[email,onChangeEmail,newPass,onChangeNewPass,onSubmit,loading,isPress]
}

export default ResetPasswordHook