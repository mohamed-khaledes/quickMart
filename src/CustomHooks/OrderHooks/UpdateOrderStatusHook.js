import {useEffect,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {updateOrderToDeliverd, updateOrderToPaid } from '../../Redux/actions/orderAction'
import Notify from '../../CustomHooks/UseNotification'
const UpdateOrderStatusHook = (id) => {
    const dispatch = useDispatch()
    // data from redux
    const orderPay = useSelector(state=>state.orderReducer.updateOrderPay)
    const orderDeliver = useSelector(state=>state.orderReducer.updateOrderDeliver)
    // this hook states
    const [loadingPay,setloadingPay]=useState(true)
    const [pay,setPay]=useState("0")
    const [loadingDeliver,setloadingDeliver]=useState(true)
    const [deliver,setDeliver]=useState("0")
    // on change pay status
    const onChangePayStatus = (e)=>{
        setPay(e.target.value)
    }
    // on click order paid
    const onClickOrderPaid =async()=>{
        console.log(pay)
        if(pay==="true"){
            setloadingPay(true)
            await dispatch(updateOrderToPaid(id))
            setloadingPay(false)
        }else if(pay==="false"){
            Notify("this is a default status","warn")
        }else{
            Notify("Please select an option","warn")
        }
    }
    useEffect(()=>{
        if(loadingPay===false){
            if(orderPay){
                console.log(orderPay)
                if(orderPay.status===200){
                    Notify("Order updated","success")
                    setTimeout(() => {
                        window.location.reload()
                    },1000);
                }else{
                    Notify("there is a problem","warn")
                }
            }
        }
       
    },[loadingPay])
//=================================================================================
    // on change pay status
    const onChangeDeliverStatus = (e)=>{
        setDeliver(e.target.value)
    }
    // on click order deliver
    const onClickOrderDeliverd =async()=>{
        if(deliver==="true"){
            setloadingDeliver(true)
            await dispatch(updateOrderToDeliverd(id))
            setloadingDeliver(false)
        }else if(deliver==="false"){
            Notify("this is a default status","warn")
        }else{
            Notify("Please select an option","warn")
        }
    }
    useEffect(()=>{
        if(loadingDeliver===false){
            if(orderDeliver){
                if(orderDeliver.status===200){
                    Notify("Order updated","success")
                    setTimeout(() => {
                        window.location.reload()
                    },1000);
                }else{
                    Notify("there is a problem","warn")
                }
            }
        }
       
    },[loadingDeliver])

    return[loadingPay,loadingDeliver,orderPay,orderDeliver,
        onClickOrderPaid,onChangePayStatus,onClickOrderDeliverd,
        onChangeDeliverStatus]
}

export default UpdateOrderStatusHook