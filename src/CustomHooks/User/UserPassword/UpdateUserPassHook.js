import {useState,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { updatePassword } from '../../../Redux/actions/userActions'
import Notify from '../../UseNotification'

const UpdateUserPassHook = () => {
    const dispatch = useDispatch()
    const res = useSelector(state => state.userReducer.updatePass)

     // states
     const [currentPass,setCurrentPass] = useState("")
     const [password,setPassword] = useState("")
     const [confirmPassword,setConfirmPass] = useState("")
     const [loading,setLoading] = useState(true)
     const [isPress,setIsPress] = useState(false)

     // functions
     const onChangeCurrentPass = (e)=>{
        e.persist()
        setCurrentPass(e.target.value)
     }
     const onChangePassword = (e)=>{
        e.persist()
        setPassword(e.target.value)
     }
     const onChangeConfirmPass = (e)=>{
        e.persist()
        setConfirmPass(e.target.value)
     }

     const onUpdatePass = async()=>{
        if(currentPass===""||password===""||confirmPassword===""){
            Notify("please complete the data","warn")
        }else{
        setIsPress(true)
        setLoading(true)
        await dispatch(updatePassword({
            "currentPassword":currentPass,
            "password":password,
            "passwordConfirm":confirmPassword
        }))
        setLoading(false)
        setIsPress(false)
        }
     }

     useEffect(()=>{
        if(loading===false){
            if(res){
                if(res.status===200){
                    Notify("password updated","success")
                    localStorage.setItem("token",res.data.token)
                    setCurrentPass("")
                    setPassword("")
                    setConfirmPass("")
                }else if(res.status===400){
                    if(res.data.errors){
                        Notify(res.data.errors[0].msg,"warn")
                    }
                }else if(res.status===401){
                        Notify(res.data.message,"error")
                }else{
                    Notify("there is a problem","error")
                }
            }
        }
     },[loading])

     return[currentPass,onChangeCurrentPass,password,onChangePassword,confirmPassword,onChangeConfirmPass,loading,isPress,onUpdatePass]
}   

export default UpdateUserPassHook