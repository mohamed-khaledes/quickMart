import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {verifyCode } from '../../Redux/actions/authAction'
import Notify from '../UseNotification'
const VerifyCodeHook = () => {
    const dispatch = useDispatch()
    const [code,setCode] = useState("")
    const [loading,setLoading] = useState(true)
    const [isPress,setIsPress] = useState(false)
    const res = useSelector((state)=>state.authReducer.forgetPassword)

    const onChangeCode = (e)=>{
        setCode(e.target.value)
    }
    const onSubmit = async(e)=>{
        e.preventDefault()
        if(code === ""){
            Notify("Enter code","error")
            // return
        }else{
            setLoading(true)
            setIsPress(true)
            await dispatch(verifyCode({
                resetCode:code
            }))
            setLoading(false)
            setIsPress(false)
        }
    }
    useEffect(()=>{
        if(loading === false){
            if(res){
                if(res.status===200){
                    Notify("success","success")
                    setTimeout(() => {
                        window.location.href="/resetPasswordPage"
                    }, 1000);
                }else{
                    Notify("there is a problem","error")
                }
            }
        }
    },[loading])
    return[code,onChangeCode,onSubmit,loading,isPress]
}

export default VerifyCodeHook