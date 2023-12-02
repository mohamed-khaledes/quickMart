
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Notify from '../UseNotification'
import { addReview } from '../../Redux/actions/reviewsAction'
import { useParams } from 'react-router-dom'
const AddRateHook = () => {
    const dispatch = useDispatch()
    const res = useSelector(state => state.reviewsReducer.addReview)

    const [rateText,setRateText] = useState("")
    const [rateStar,setRateStar] = useState("")
    const [loading,setLoding] = useState(true)

    const onChangeRateText =(e)=>{
        setRateText(e.target.value)
    }
    const onChangeRateStar =(e)=>{
        setRateStar(e.target.value)
    }
  
    // function to handel submit and store the data on data base
    const id = useParams()
    const handelSubmit = async (event)=>{
        const Id =id.id
      event.preventDefault()
      if(rateStar=== ""||rateText === ""){
        return  Notify("Please complete the data","warn")
      }else{
        // if we need send images will do this
        setLoding(true)
        await dispatch(addReview(Id,{
            review:rateText,
            rating:rateStar,
        }))
        setLoding(false)
      }
    }
    
    useEffect(()=>{
     if(loading === false){
      setRateStar("")
      setRateText("")
      setLoding(true)
      if(res.status && res.status === 201 || res.status === 200){
       // succes
       Notify("review added","success")
       setTimeout(() => {
        window.location.reload()
       }, 1000);
      }else if(res.status ===403){
       //Bad request
       Notify(res.data.message,"warn")
      }else if(res.status ===400 && res.data.errors){
       Notify(res.data.errors[0].msg,"warn")
      }else{
        Notify("there is a problem","error")
      }
     }
    },[loading])

    let user=[]
    if(localStorage.getItem("user")!=null){
        user=JSON.parse(localStorage.getItem("user"))
    }
    return [rateStar,rateText,onChangeRateStar,onChangeRateText,handelSubmit,user,loading]
}

export default AddRateHook