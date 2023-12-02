import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProducts, getAllProductsPage } from '../../../Redux/actions/productAction'

const GetAllProductsHook = () => {
    const dispatch = useDispatch()
    let limit =6;
    useEffect(()=>{
        const get =async()=>{
            await dispatch(getAllProducts(limit))
        }
        get()
    },[])

    const allProducts = useSelector((state)=>state.productReducer.allProducts)
    const loading = useSelector((state)=>state.productReducer.loading)

    let items =[];
    try{
        if(allProducts){
            items = allProducts.data
        }else{
            items =[];
        }
    }catch(e){}
    
    //pagenation code
    let pagenate =[];
    try{
        if(allProducts){
            if(allProducts.paginationResult){
                pagenate = allProducts.paginationResult.numberOfPages
            }
        }else{
            pagenate =[];
        }
    }catch(e){}
    const onPress = async(page)=>{
        await dispatch(getAllProductsPage(limit,page))
    } 
    try{
        if(pagenate){
            var pageCount = pagenate
          }else{
            pageCount = 0;
          }
    }catch(e){}
    
    return [items,loading,pageCount,onPress]
}

export default GetAllProductsHook