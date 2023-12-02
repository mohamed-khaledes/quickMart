import {useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getAllProductsByCategoryMobile,
    getAllProductsByCategoryPcCore,
    getAllProductsByCategorySchoolTools }
    from '../../Redux/actions/productAction'
const VeiwHomeProductsHook = () => {
    let limit =10;
    const dispatch = useDispatch()
    const allProductsMobile = useSelector((state)=>state.productReducer.allProductsByCategoryMobile)
    const allProductsPcCore = useSelector((state)=>state.productReducer.allProductsByCategoryPcCore)
    const allProductsSchoolTools = useSelector((state)=>state.productReducer.allProductsByCategorySchoolTools)
    // mobile states
    const [mobile_loading,set_mobile_loading]=useState(true)
    const [mobile_items,set_mobile_items]=useState([])
    // pc core states
    const [pcCore_loading,set_pcCore_loading]=useState(true)
    const [pcCore_items,set_PcCore_items]=useState([])
    // school tools states
    const [schoolTools_loading,set_schoolTools_loading]=useState(true)
    const [schoolTools_items,set_schoolTools_items]=useState([])
    // get mobile products
    const getMobile =async()=>{
        set_mobile_loading(true)
        await dispatch(getAllProductsByCategoryMobile(limit,"")) 
        set_mobile_loading(false)
    }
    // get pc core products
    const getPcCore =async()=>{
        set_pcCore_loading(true)
        await dispatch(getAllProductsByCategoryPcCore(limit,"")) 
        set_pcCore_loading(false)
    }
    // get shool tools products
    const getSchoolTools =async()=>{
        set_schoolTools_loading(true)
        await dispatch(getAllProductsByCategorySchoolTools(limit,"")) 
        set_schoolTools_loading(false)
    }
    useEffect(()=>{
        getMobile()
        getPcCore()
        getSchoolTools()
    },[])
    // set mobile data in state
    useEffect(()=>{
        if(mobile_loading===false){
            if(allProductsMobile){
                if(allProductsMobile.data){
                    set_mobile_items(allProductsMobile.data)
                }
            }else{
                set_mobile_items([])
            }
        }
    },[mobile_loading])
    // set pc core data in state
    useEffect(()=>{
        if(pcCore_loading===false){
            if(allProductsPcCore){
                if(allProductsPcCore.data){
                    set_PcCore_items(allProductsPcCore.data)
                }
            }else{
                set_PcCore_items([])
            }
        }
    },[pcCore_loading])
    // set school tools data in state
    useEffect(()=>{
        if(schoolTools_loading===false){
            if(allProductsSchoolTools){
                if(allProductsSchoolTools.data){
                    set_schoolTools_items(allProductsSchoolTools.data)
                }
            }else{
                set_schoolTools_items([])
            }
        }
    },[schoolTools_loading])

    return [mobile_items,mobile_loading,pcCore_items,pcCore_loading,schoolTools_items,schoolTools_loading]
}

export default VeiwHomeProductsHook