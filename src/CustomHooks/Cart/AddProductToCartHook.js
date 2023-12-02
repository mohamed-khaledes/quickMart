import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Notify from '../../CustomHooks/UseNotification'
import { addProductToCart } from '../../Redux/actions/cartAction'
const AddProductToCartHook = (prodId,item) => {
    const dispatch = useDispatch()
    const res = useSelector(state => state.cartReducer.addProductToCart)
    let user=null
    if(localStorage.getItem("user")!==null){
        user=JSON.parse(localStorage.getItem("user"))
    }else{
        user=null
    }
    /*states */
    const [cartAddingLoading,setLoading] = useState(true)
    const [isPress,setIsPress] = useState(false)
    const [colorText,setColorText] = useState("")
    const [colorIndex,setColorIndex] = useState("")

    const onClickColor =(index,color)=>{
        setColorIndex(index)
        setColorText(color)
    }
  
    /*on add product to cart fn */
    const onAddProductToCart = async()=>{
        if(user.role!=="admin"){
            if(item){
                if(item.availableColors.length>1){
                    if(colorText===""){
                        Notify("please choose a color","warn")
                        return
                    }
                }else{
                    setColorText("")
                }
            }
            setColorText("")
                setIsPress(true)
                setLoading(true)
                await dispatch(addProductToCart({
                    "productId":prodId,
                    "color":colorText
                }))
                setIsPress(false)
                setLoading(false)
        }else{
            Notify("You have not access on this action","warn")
        }

}
  
      useEffect(()=>{
          if(cartAddingLoading === false){
              if(res){
                  if(res.status===200||res.status===201){
                    if(res.data){
                    Notify(res.data.message,"success")
                    }
                    setTimeout(() => {
                        window.location.reload(false)
                    },1000);
                  }else if(res.status === 400){
                      Notify(res.data.message,"warn")
                  }else{
                      Notify("there is a problem","error")
                  }
              }
          }
      },[cartAddingLoading])
  
      return[onClickColor,onAddProductToCart,colorIndex,cartAddingLoading,isPress]
}

export default AddProductToCartHook