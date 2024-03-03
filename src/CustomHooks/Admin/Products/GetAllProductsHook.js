import {useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProducts, getAllProductsPage } from '../../../Redux/actions/productAction'

const GetAllProductsHook = () => {
    const [items,setItems] =useState([])
    const [pagenate,setPagenate] =useState(0)
    const [pageCount,setPageCount] =useState(0)
    const [loading,setLoading] =useState(true)
    const dispatch = useDispatch()
    let limit =6;
   
    const allProducts = useSelector((state)=>state.productReducer.allProducts)
    const deleteProductRes = useSelector((state)=>state.productReducer.deleteProduct)
    // const loading = useSelector((state)=>state.productReducer.loading)
    // get data function
    const get =async()=>{
        setLoading(true)
        await dispatch(getAllProducts(limit))
        setLoading(false)
    }
    useEffect(()=>{
        get()
    },[])
    // re-render when delete product
    useEffect(()=>{
        if(deleteProductRes){
            get()
        }
    },[deleteProductRes])
    // on press on the pagenation
    const onPress = async(page)=>{
        setLoading(true)
        await dispatch(getAllProductsPage(limit,page))
        setLoading(false)
    } 
useEffect(()=>{
    if(loading===false){
        if(allProducts){
            setItems(allProducts?.data)
            setPagenate(allProducts?.paginationResult?.numberOfPages)
            setPageCount(allProducts?.paginationResult?.numberOfPages)
        }else{
            setItems([])
            setPagenate(0)
            setPageCount(0)
        }
    }
},[loading])

    return [items,loading,pageCount,onPress]
}

export default GetAllProductsHook