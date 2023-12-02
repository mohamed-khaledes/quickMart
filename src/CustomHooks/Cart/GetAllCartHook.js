import {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allCart } from '../../Redux/actions/cartAction'
const GetAllCartHook = () => {
    const dispatch = useDispatch()
// states of this hook
    const [cartLoading,setLoading] = useState(true)
    const [cardID,setCardID] = useState("0")
    const [items,setItems]=useState([])
    const [productsNumber,setProductsNumber]=useState("0")
    const [totalPrice,setTotalPrice]=useState("0")
    const [totalPriceAfterDiscount,setTotalPriceAfterDiscount]=useState("0")
    const [coupon,setCoupon]=useState("")
// the data from redux store
  const res = useSelector(state =>state.cartReducer.allCart)
  const loadingRes = useSelector(state => state.cartReducer.loading)
//===================================================================
// to get all the cart when the page load 
  useEffect(()=>{
      const get = async()=>{
          setLoading(true)
          await dispatch(allCart())
          setLoading(false)
      }
      get()
  },[])
// to store all of data in states
  useEffect(()=>{
    if(cartLoading===false){
        if(res){
            if(res.status==="success"){
              setProductsNumber(res.numOfCartItems)
              if(res.data){
               setCardID(res.data._id)
               setTotalPrice(res.data.totalCartPrice)
               setTotalPriceAfterDiscount(res.data.totalAfterDiscount)
               setCoupon(res.data.coupon)
               setItems(res.data.products)
              }else{
               setCardID("0")
               setTotalPrice("0")
               setTotalPriceAfterDiscount("0")
               setCoupon("")
               setItems([])
              }
           }else if(res.status===404){
            return 
           }
          }
    }
  },[cartLoading])

    return[productsNumber,totalPrice,items,totalPriceAfterDiscount,coupon,cartLoading,cardID]
}
export default GetAllCartHook