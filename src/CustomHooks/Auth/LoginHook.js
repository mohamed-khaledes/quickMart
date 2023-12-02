import {useState,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { loginAction } from '../../Redux/actions/authAction'
import Notify from '../UseNotification'

const LoginHook = () => {
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(true)
    const [isPress,setIsPress] = useState(false)
    const response = useSelector((state)=>state.authReducer.loginUser)
    // functions for states
    const onChangeEmail =(e)=>{
        setEmail(e.target.value)
    }
    // validation email
    const isEmail =(emailAdress)=>{
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
      if (emailAdress.match(regex)) 
        return true; 
    
       else 
        return false; 
    }
    // function for validation
    const validation =()=>{
        if(email===""||password===""){
            Notify("please complete the data","error")
        }
        if(isEmail(email)===false){
            Notify("Invalid email","error")
        }
        
    }
    const onChangePassword =(e)=>{
        setPassword(e.target.value)
    }
    const onSubmit =async(e)=>{
        e.preventDefault()
        setIsPress(true)
        setLoading(true)
        validation()
        await dispatch(loginAction(
            {
                email:email,
               password:password
           }
        ))
        setLoading(false)
        setIsPress(false)
    }
    useEffect(()=>{
        if(loading===false){
            if(response){
                if(response.data.token){
                    localStorage.setItem("token",response.data.token)
                    localStorage.setItem("user",JSON.stringify(response.data.data))
                    if(response.status===200){
                        Notify("login success","success")
                        setEmail("")
                        setPassword("")
                        setTimeout(() => {
                            window.location.href = "/"
                        },1000);
                    }
                }else{
                    localStorage.removeItem("token")
                }
                 if(response.data.errors){
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    Notify(`${response.data.errors[0].msg}`,"error")
                }else if(response.data.message){
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    Notify(`${response.data.message}`,"error")
                }
            }
        }
    },[loading])

    return [loading,email,password,onChangeEmail,onChangePassword,onSubmit,isPress]
}

export default LoginHook