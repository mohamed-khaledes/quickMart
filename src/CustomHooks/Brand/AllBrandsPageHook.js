import {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllBrandPageAction } from '../../Redux/actions/brandAction'

const AllBrandsPageHook = () => {
  // states
  const [loading,setLoading]=useState(true)
  const limit=8;
  // to get page count
  let pageCount = 0;
 // put useDispatch in a varialbe
  // to run the redux
  const dispatch = useDispatch()
  // get what we need from the data in backend (api) by useSelector
  // to get state from redux
  const brand = useSelector((state) => state.brandReducer.brands)
  const deleteBrandRes = useSelector((state) => state.brandReducer.deleteBrand)
  // const loading = useSelector((state) => state.brandReducer.loading)
  // run the dispatch function by useEffect hook
  // will execute when first load
  const get =async()=>{
    setLoading(true)
    await dispatch(getAllBrandPageAction("",limit))
    setLoading(false)
  }
  useEffect(()=>{
    get()
  },[])
  useEffect(()=>{
    if(deleteBrandRes){
      get()
    }
  },[deleteBrandRes])

  // to wait the data load
  if(brand && brand.paginationResult){
    pageCount = brand.paginationResult.numberOfPages
  }
  // will execute when press on pagenation
  const getPage = async(page)=>{
    await dispatch(getAllBrandPageAction(page,limit))
  }
  return [loading,brand,pageCount,getPage] 
}

export default AllBrandsPageHook