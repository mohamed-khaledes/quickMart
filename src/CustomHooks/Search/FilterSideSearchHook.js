import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoryAction } from '../../Redux/actions/categoryAction'
import {getAllBrandsAction } from '../../Redux/actions/brandAction'
import { useState } from 'react'
import VeiwSearchProductsHook from '../Product/VeiwSearchProductsHook'

const FilterSideSearchHook = () => {
    const [,,,getAllProductsFn,] = VeiwSearchProductsHook()
    const dispatch = useDispatch()
  useEffect(()=>{
    const get =async()=>{
        await dispatch(getAllCategoryAction())
        await dispatch(getAllBrandsAction())
    }
    get()
  },[])

  // get what we need from the data in backend (api) by useSelector
  // to get state from redux
  const allCat = useSelector((state) => state.categoryReducer.allCategories)
  const loadingCategories = useSelector((state) => state.categoryReducer.loading)
  // all brands
  const brands = useSelector((state) => state.brandReducer.brands)
  const loadingBrands = useSelector((state) => state.brandReducer.loading)

  //store all categories
  let allCategories=[]
  try{
    if(allCat.data){
        allCategories=allCat.data
    }else{
        allCategories=[]
    }
  }catch(e){}
  //store all brands
  let allBrands=[]
  try{
    if(brands.data){
        allBrands=brands.data
    }else{
        allBrands=[]
    }
  }catch(e){}

    // checked category
    let queryCat="";
    const [catChecked,setCatChecked] = useState([])
    const onCheckedCategory =(e)=>{
        let value =e.target.value
        if(value ==="0"){
            setCatChecked([])
        }else{
            if(e.target.checked === true){
                setCatChecked([...catChecked,value])
            }else if(e.target.checked===false){
                let newArray = catChecked.filter((e)=> e!==value)
                setCatChecked(newArray)
            }
        }
    }
    useEffect(()=>{
        queryCat = catChecked.map((val)=>"category[in][]="+val).join("&")
        localStorage.setItem("queryCat",queryCat)
        getAllProductsFn()
    },[catChecked])

    // checked Brand
    let queryBrand="";
    const [brandChecked,setBrandChecked] = useState([])
    const onCheckedBrand =(e)=>{
        let value =e.target.value
        if(value ==="0"){
            setBrandChecked([])
        }else{
            if(e.target.checked === true){
                setBrandChecked([...brandChecked,value])
            }else if(e.target.checked===false){
                let newArray = brandChecked.filter((e)=> e!==value)
                setBrandChecked(newArray)
            }
        }
    }
    useEffect(()=>{
        queryBrand = brandChecked.map((val)=>"brand[in][]="+val).join("&")
        localStorage.setItem("queryBrand",queryBrand)
        getAllProductsFn()
    },[brandChecked])

    // code to filter using price
    const [From, setPriceFrom] = useState(0)
    const [To, setToFrom] = useState(0)

    const priceFrom = (e) => {
        localStorage.setItem("priceFrom", e.target.value)
        setPriceFrom(e.target.value)
    }
    const priceTo = (e) => {
        localStorage.setItem("priceTo", e.target.value)
        setToFrom(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            getAllProductsFn();
        }, 1000);
    }, [From, To])
  return[allCategories,loadingCategories,allBrands,loadingBrands,onCheckedCategory,onCheckedBrand,priceFrom,priceTo]
}

export default FilterSideSearchHook