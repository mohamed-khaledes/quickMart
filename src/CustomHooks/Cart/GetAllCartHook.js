import {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allCart } from '../../Redux/actions/cartAction'
const GetAllCartHook = () => {
  // states of this hook
      const [cartLoading,setLoading] = useState(true)
      const [cardID,setCardID] = useState("0")
      const [items,setItems]=useState([])
      const [productsNumber,setProductsNumber]=useState("0")
      const [totalPrice,setTotalPrice]=useState("0")
      const [totalPriceAfterDiscount,setTotalPriceAfterDiscount]=useState("0")
      const [coupon,setCoupon]=useState("")
    const dispatch = useDispatch()
// the data from redux store
  const res = useSelector(state =>state.cartReducer.allCart)
  const resAdd = useSelector(state => state.cartReducer.addProductToCart)
  const removeAllCartRes = useSelector((state) => state.cartReducer.removeAllCart);
  const deleteOneItemRes = useSelector((state) => state.cartReducer.deleteProductFromCart);
  const updateQuantityRes = useSelector(state => state.cartReducer.updateProductInCart)
  const couponRes = useSelector(state =>state.cartReducer.applyCoupon)
//===================================================================
// to get all the cart when the page load 
const get = async()=>{
  setLoading(true)
  await dispatch(allCart())
  setLoading(false)
}
  useEffect(()=>{
      get()
  },[])
  useEffect(()=>{
    if(resAdd || removeAllCartRes || deleteOneItemRes || updateQuantityRes || couponRes){
      get()
    }
  },[resAdd,removeAllCartRes,deleteOneItemRes,updateQuantityRes,couponRes])
//************************************************************************************ */
// to store all of data in states
  useEffect(()=>{
    if(cartLoading===false){
        if(res){
            if(res.status==="success"){
              if(res.data){
              setProductsNumber(res.numOfCartItems)
               setCardID(res.data._id)
               setTotalPrice(res.data.totalCartPrice)
               setTotalPriceAfterDiscount(res.data.totalAfterDiscount)
               setCoupon(res.data.coupon)
               setItems(res.data.products)
              }else{
                setProductsNumber("0")
               setCardID("0")
               setTotalPrice("0")
               setTotalPriceAfterDiscount("0")
               setCoupon("")
               setItems([])
              }
           }else if(res.status===404){
            setProductsNumber("0")
            setCardID("0")
               setTotalPrice("0")
               setTotalPriceAfterDiscount("0")
               setCoupon("")
               setItems([])
           }
          }
    }
  },[cartLoading])

    return[productsNumber,totalPrice,items,totalPriceAfterDiscount,coupon,cartLoading,cardID]
}
export default GetAllCartHook