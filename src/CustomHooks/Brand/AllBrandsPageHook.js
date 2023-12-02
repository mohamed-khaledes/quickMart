import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllBrandPageAction } from '../../Redux/actions/brandAction'

const AllBrandsPageHook = () => {
  const limit=8;
 // put useDispatch in a varialbe
  // to run the redux
  const dispatch = useDispatch()
  // run the dispatch function by useEffect hook
  // will execute when first load
  useEffect(()=>{
    const get =async()=>{
      await dispatch(getAllBrandPageAction("",limit))
    }
    get()
  },[])

  // get what we need from the data in backend (api) by useSelector
  // to get state from redux
  const brand = useSelector((state) => state.brandReducer.brands)
  const loading = useSelector((state) => state.brandReducer.loading)
  // to get page count
  let pageCount = 0;
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