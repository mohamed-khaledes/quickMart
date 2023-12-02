import {useEffect,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getSpesificUserOrder } from '../../Redux/actions/orderAction'

const GetSpecificUserOrderHook = (id) => {
    const dispatch = useDispatch()
    // data from redux
    const order = useSelector(state=>state.orderReducer.specificOrder)
    // this hook states
    const [loading,setloading]=useState(true)
    const [orderData,setOrderData]=useState([])

    const get =async()=>{
        setloading(true)
        await dispatch(getSpesificUserOrder(id))
        setloading(false)
    }
    useEffect(()=>{
        get()
    },[])
    
    useEffect(()=>{
        if(loading===false){
            if(order){
                if(order.data){
                    setOrderData(order.data)
                }
            }
        }
    },[loading])

    return[orderData,loading]
}

export default GetSpecificUserOrderHook