import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Notify from '../UseNotification'
import {updateReview } from '../../Redux/actions/reviewsAction'

const UpdateReviewHook = (item) => {
    const [showUpdate,setShowUpdate] = useState(false);

    const [review,setReview] = useState(item.review)
    const [rating,setRating] = useState(item.rating)
    const [loading,setLoding] = useState(true)

    const dispatch = useDispatch()
    const res = useSelector(state => state.reviewsReducer.updateReview)

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

   const onChangeReview =(e)=>{
    setReview(e.target.value)
   }
   const onChangeRating =(e)=>{
    setRating(e.target.value)
   }
  const handleUpdate =async(id)=>{
    setLoding(true)
    await dispatch(updateReview(id,{
        review:review,
        rating:rating
    }))
    setLoding(false)
    setShowUpdate(false)
    console.log(review)
    console.log(rating)
  }

  useEffect(()=>{
    if(loading===false){
        if(res){
            console.log(res)
            if(res.status && res.status===200){
                Notify("success","success")
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }else{
                Notify("there is a problem","error")
            }
        }
    }
  },[loading])
  return [showUpdate,handleUpdate,handleCloseUpdate,handleShowUpdate,onChangeRating,onChangeReview,review,rating]
}

export default UpdateReviewHook