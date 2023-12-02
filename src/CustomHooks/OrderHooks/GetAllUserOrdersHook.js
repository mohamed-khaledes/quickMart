import {useEffect,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getUserOrders } from '../../Redux/actions/orderAction'

const GetAllUserOrdersHook = () => {
    const dispatch = useDispatch()
    // data from redux
    const orders = useSelector(state=>state.orderReducer.userOrders)
    // this hook states
    const [loading,setloading]=useState(true)
    const [paginate,setPaginate]=useState({})
    const [resuts,setResults] =useState(0)
    const [ordersData,setOrdersData]=useState([])

    const get =async()=>{
        setloading(true)
        await dispatch(getUserOrders("",3))
        setloading(false)
    }
    useEffect(()=>{
        get()
    },[])
    
    useEffect(()=>{
        if(loading===false){
            if(orders){
                if(orders.results){
                    setResults(orders.results)
                }
                if(orders.paginationResult){
                    setPaginate(orders.paginationResult)
                }
                if(orders.data){
                    setOrdersData(orders.data)
                }
            }
        }
    },[loading])

    const onPress =async(page)=>{
        setloading(true)
        await dispatch(getUserOrders(page,3))
        setloading(false)
    }
    return[ordersData,paginate,resuts,loading,onPress]
}

export default GetAllUserOrdersHook