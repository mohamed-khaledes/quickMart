import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { forgetPassword } from '../../Redux/actions/authAction'
import Notify from '../../CustomHooks/UseNotification'
const ForgetPasswordHook = () => {
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(true)
    const [isPress,setIsPress] = useState(false)
    const res = useSelector((state)=>state.authReducer.forgetPassword)

    const onChangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const onSubmit = async(e)=>{
        e.preventDefault()
        if(email === ""){
            Notify("Enter Email","error")
            // return
        }else{
            setLoading(true)
            setIsPress(true)
            await dispatch(forgetPassword({
                email:email
            }))
            setLoading(false)
            setIsPress(false)
        }
    }
    useEffect(()=>{
        if(loading === false){
            if(res){
                if(res.status===200){
                    Notify("code sent check your email","success")
                    window.location.pathname="/verifyCodePage"
                }else{
                    Notify("there is a problem","error")
                }
            }
        }
    },[loading])
    return[email,onChangeEmail,onSubmit,loading,isPress]
}

export default ForgetPasswordHook