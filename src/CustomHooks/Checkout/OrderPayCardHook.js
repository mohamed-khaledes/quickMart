import {useState,useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux'
import GetAllCartHook from '../Cart/GetAllCartHook'
import { createOrderCard} from '../../Redux/actions/checkoutAction'
import Notify from '../../CustomHooks/UseNotification'
const OrderPayCardHook = (address_details) => {
 const dispatch = useDispatch()
 // data from redux states
 const orderCardResponse = useSelector(state => state.checkoutReducer.orderCard)
// states of this hook
 const [loading,setLoading] = useState(true)

// hook to get cart id 
 const[,,,,,,cardID] = GetAllCartHook()

// create order cash function
const createOrderCardFn =async()=>{
    if(cardID==="0"){
        Notify("please add a product to your cart","warn")
    }else if(address_details.length<=0){
        Notify("please choose an address","warn")
    }else{
        setLoading(true)
        await dispatch(createOrderCard(cardID,{
            shippingAddress:{
                details:address_details.alias,
                phone:address_details.phone,
                city:address_details.city,
                postalCode:address_details.postalCode
                }
        }))
        setLoading(false)
    }
}
useEffect(()=>{
if(loading===false){
    console.log(orderCardResponse)
    if(orderCardResponse&&orderCardResponse.status==="success"){
        window.open(orderCardResponse.session.url)
    }else{
        Notify("there is a problem","warn")
    }
}
},[loading])

return [createOrderCardFn,loading]
}

export default OrderPayCardHook


/*
# Tips For payment using card
    - we can't do payment using card as a programmers we should do that by a provider company 
        between us and the user Otherwise it will be called theft
    - one of the proviers companies calld stripe 
    - the backend developer who work on the procces to let this more secure 
    - the frontend developer can do that on the frontend using (React with stripe) but to let this more secure the backend
        do this will be better for our business
    - stripe will  not work with you without a real host specifically the backend should be on a real host to do your pay

    - (Heroku) is a free host of backend files
*/