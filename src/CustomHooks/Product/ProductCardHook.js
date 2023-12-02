import {useEffect,useState} from 'react'
import redHeart from '../../imgs/heart.png'
import blackHeart from '../../imgs/like.png'
import { useDispatch,useSelector } from 'react-redux'
import {addToWishlist, deleteFromWishlist} from '../../Redux/actions/wishlistAction'
import Notify from '../../CustomHooks/UseNotification'

const ProductCardHook = (item,favProduct) => {
    const dispatch = useDispatch()
    const resAdd = useSelector(state =>state.wishlistReducer.addToWishlist)
    const resDelete = useSelector(state =>state.wishlistReducer.deleteFromWishlist)
    let user=null
    if(localStorage.getItem("user")!==null){
        user=JSON.parse(localStorage.getItem("user"))
    }else{
        user=null
    }
    const [imgFav,setImgFav] = useState(blackHeart)
    const [loadingAdd,setLoadingAdd] = useState(true)
    const [loadingDelete,setLoadingDelete] = useState(true)
    let isFavoriteProduct = favProduct.some((fItem)=>fItem === item._id)
    const [isFav,setIsFav] = useState(isFavoriteProduct)
  
  
    useEffect(()=>{
      setIsFav(favProduct.some((fItem)=>fItem === item._id))
    },[favProduct])
  
    const handleFav =()=>{
      if(localStorage.getItem("token")!==null){
        if(user.role!=="admin"){
          if(isFav){
            deleteFromFn()
          }else{
            addToFn()
          }
        }else{
          Notify("You have not access on this action","warn")
        }
      }else{
        Notify("please login first","warn")
      }
    }
    useEffect(()=>{
        if(isFav===true){
          setImgFav(redHeart)
        }else{
          setImgFav(blackHeart)
        }
    },[isFav])
    /*add to wishlist function*/
    const addToFn = async()=>{
      setIsFav(true)
      setImgFav(redHeart)
      setLoadingAdd(true)
      await dispatch(addToWishlist({
        productId:item._id
      }))
      setLoadingAdd(false)
    }
    useEffect(()=>{
      if(loadingAdd === false){
        if(resAdd&&resAdd.status === 200){
          Notify(resAdd.data.message,"success")
        }else{
          Notify("there is a problem","error")
      }
      }
    },[loadingAdd])
  
    /*delete from wishlist function */
    const deleteFromFn = async()=>{
      setIsFav(false)
      setImgFav(blackHeart)
      setLoadingDelete(true)
      await dispatch(deleteFromWishlist(item._id))
      setLoadingDelete(false)
    }
    useEffect(()=>{
      if(loadingDelete===false){
        if(resDelete && resDelete.status === 200){
          Notify(resDelete.data.message,"warn")
        }else{
          Notify("there is a problem","error")
        }
      }
    },[loadingDelete])


    return [imgFav,handleFav]
}

export default ProductCardHook