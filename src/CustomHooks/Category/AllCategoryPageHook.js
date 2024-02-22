import {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllCategoryAction,getAllCategoryPageAction } from '../../Redux/actions/categoryAction'

const AllCategoryPageHook = (limit) => {
  // states 
  const [loading,setLoading]=useState(true)
 // put useDispatch in a varialbe
  // to run the redux
  const dispatch = useDispatch()
  // get what we need from the data in backend (api) by useSelector
  // to get state from redux
  const categoryRes = useSelector((state) => state.categoryReducer.allCategories)
  // const loading = useSelector((state) => state.categoryReducer.loading)
  // run the dispatch function by useEffect hook
  // will execute when first load
  useEffect(()=>{
    const get =async()=>{
      setLoading(true)
      await dispatch(getAllCategoryAction(limit))
      setLoading(false)
    }
    get()
  },[])

  // to get page count
  let pageCount = 0;
  // to wait the data load
  try{
    if(categoryRes){
      if(categoryRes.paginationResult){
        pageCount = categoryRes.paginationResult.numberOfPages
      }
    }
  }catch(e){}
  // will execute when press on pagenation
  const getPage = async(page)=>{
    await dispatch(getAllCategoryPageAction(page,limit))
  }

  let category =[]
  try{
    if(loading===false){
      if(categoryRes){
        if(categoryRes.data && categoryRes.data.length>0){
          category=categoryRes.data
        }
      }else{
        category=[]
      }
    }else{
      category=[]
    }
  }catch(e){}
  
  return [loading,category,pageCount,getPage] 
}

export default AllCategoryPageHook