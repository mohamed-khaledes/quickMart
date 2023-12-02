import {useEffect,useState}from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { getAllWishlist } from '../../Redux/actions/wishlistAction'

const WishlistHook = () => {
    const dispatch = useDispatch()
    const res =useSelector(state=>state.wishlistReducer.wishlist)
    const [loading,setLoading] = useState(true)
    const [wishlist,setWishlist] = useState([])
    const [wishlistItems,setWishlistItems] = useState([])
    const [wishlistNum,setWishlistNum] = useState(0)
  
    useEffect(()=>{
      const get =async()=>{
        setLoading(true)
        await dispatch(getAllWishlist())
        setLoading(false)
      }
      get()
    },[])
  
    useEffect(()=>{
      if(loading===false){
          if(res){
            if(res.data.length>=1){
              setWishlist(res.data.map((item)=>item._id))
            }else{
              setWishlist([])
            }
            if(res.data){
              setWishlistItems(res.data)
              setWishlistNum(res.data.length)
            }else{
              setWishlistItems([])
              setWishlistNum(0)
            }
          }else{
            setWishlist([])
            setWishlistItems([])
          }
        }
    },[loading])

    return[wishlist,loading,wishlistItems,wishlistNum]
}

export default WishlistHook