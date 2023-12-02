import {useState} from 'react'
import Notify from '../UseNotification'
import { useDispatch ,useSelector} from 'react-redux'
import { signUpAction } from '../../Redux/actions/authAction'
import { useEffect } from 'react'
const SignUpHook = () => {
    const dispatch = useDispatch()
    const response = useSelector((state)=>state.authReducer.createNewUser)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPass,setConfirmPass] = useState("")
    const [loading,setloading] = useState(true)
    const [isPress,setIsPress] = useState(false)

    // function for states
    const onChangeName =(e)=>{
        setName(e.target.value)
    }
    const onChangeEmail =(e)=>{
        setEmail(e.target.value)
    }
    const onChangePhone =(e)=>{
        setPhone(e.target.value)
    }
    const onChangePassword =(e)=>{
        setPassword(e.target.value)
    }
    const onChangeConfirmPass =(e)=>{
        setConfirmPass(e.target.value)
    }
     // validation email
     const isEmail =(emailAdress)=>{
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
      if (emailAdress.match(regex)) 
        return true; 
    
       else 
        return false; 
    }
    //function validation
    const validation =()=>{
        if(name===""||email===""||password===""){
            Notify("please complete the data","error")
        }else if(isEmail(email) === false){
            Notify("Invalid email")
        }
        else if(phone.length <= 10){
            Notify("please complete the phone number","error")
        }else if(confirmPass !== password){
            Notify("please check your confirm password","error")
        }
    }
    // on submit fn
    const onSubmit =async(e)=>{
        e.preventDefault()
        validation()
        setIsPress(true)
        setloading(true)
        await dispatch(signUpAction({
            name:name,
            email:email,
            phone:phone,
            password:password,
            passwordConfirm:confirmPass
        }))
        setloading(false)
        setIsPress(false)
    }
    useEffect(()=>{
        if(loading ===  false){
            if(response){
                if(response.data.token){
                    localStorage.setItem("token",response.data.token)
                    if(response.status===201){
                        Notify("sign up complete","success")
                        setName("")
                        setEmail("")
                        setPhone("")
                        setPassword("")
                        setConfirmPass("")
                        setTimeout(() => {
                            window.location.href = "/"
                        },1500);
                    }
                }else if(response.data.errors){
                Notify(`${response.data.errors[0].msg}`,"error")
                }
            }
        }
    },[loading])
    return [name,email,phone,password,confirmPass,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onChangeConfirmPass,onSubmit,loading,isPress]
}

export default SignUpHook