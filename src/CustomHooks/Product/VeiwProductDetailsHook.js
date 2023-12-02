import {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getProductDetails, getSimilarProducts } from '../../Redux/actions/productAction'
import {getSpecificCategory} from "../../Redux/actions/categoryAction"
import {getSpecificBrand} from '../../Redux/actions/brandAction'
const VeiwProductDetailsHook = (id) => {
    const [loading,setLoading]=useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        const get =async()=>{
            setLoading(true)
            await dispatch(getProductDetails(id))
            setLoading(false)
        }
        get()
    },[id])
    //product details
    const productDetails = useSelector((state)=>state.productReducer.productDetails)
    // const loadingDetails = useSelector((state)=>state.productReducer.productDetailsLoading)
    //category
    const category = useSelector((state)=>state.categoryReducer.specificCategory)
    const catLoading = useSelector((state)=>state.categoryReducer.SCLoading)

    //brand
    const brandDetails = useSelector(state =>state.brandReducer.specificBrand)
    const brLoading = useSelector(state =>state.brandReducer.specificBrandLoading)
    
    //similar products
    const similarProducts = useSelector((state)=>state.productReducer.similarProducts)
    // const similarProductsLoading = useSelector((state)=>state.productReducer.similarProductsLoading)
    let item =[];
    //product details
    try{
        if(loading===false){
            if(productDetails){
                if(productDetails.data){
                    item = productDetails.data
                }
            }else{
                item =[];
            }
        }
        
    }catch(e){}
    // useEffect depending on item
    useEffect(()=>{
        const get =async()=>{
            if(item.category){
                await dispatch(getSpecificCategory(item.category))
                await dispatch(getSimilarProducts(item.category))
            }
            if(item.brand){
                await dispatch(getSpecificBrand(item.brand))
            }
        }
        get()
    },[item])

    let cat = [];
    let brand = [];
    let similarItems =[];
    try{
        // start code of category
        if(item){
            cat =category.data
        }else{
            cat = [];
        }
        // start brand code
        if(item){
            brand = brandDetails.data
        }else{
            brand = [];
        }
        // similar items code
        if(similarProducts){
            similarItems = similarProducts.data
        }else{
            similarItems =[];
        }
    }catch(e){}
    return [item,loading,cat,brand,similarItems,catLoading,brLoading]
}

export default VeiwProductDetailsHook