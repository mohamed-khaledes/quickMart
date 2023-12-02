import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Notify from '../UseNotification'
import { deleteReview } from '../../Redux/actions/reviewsAction'

const DeleteReviewHook = () => {
    const [showDelete,setShowDelete] = useState(false);

    const [isUser,setIsUser] = useState([])
    const [loading,setLoding] = useState(true)

    const dispatch = useDispatch()
    const res = useSelector(state => state.reviewsReducer.deleteReview)

   useEffect(()=>{
    if(localStorage.getItem("user") !== null){
        setIsUser(JSON.parse(localStorage.getItem("user")))
    }
   },[])
 

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  const handleDelete =async(id)=>{
    setLoding(true)
    await dispatch(deleteReview(id))
    setLoding(false)
    setShowDelete(false)
  }

  useEffect(()=>{
    if(loading===false){
        if(res){
            console.log(res)
            if(res.status === 200 || res.status ===201|| res.status === 204){
                Notify("your review removed","success")
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }else{
                Notify("there is a problem","error")
            }
        }
    }
  },[loading])
  return[isUser,showDelete,handleDelete,handleClose,handleShow]
}

export default DeleteReviewHook