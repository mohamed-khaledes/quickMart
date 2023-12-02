import {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCategoryAction } from '../../Redux/actions/categoryAction'
const HomeCategoryHook = () => {
    const dispatch = useDispatch()
    const Categories = useSelector(state => state.categoryReducer.allCategories)
    const [loading,setLoading]=useState(true)
    const [items,setItems]=useState([])
    useEffect(()=>{
      const get =async()=>{
        setLoading(true)
        await dispatch(getAllCategoryAction(""))
        setLoading(false)
      }
      get()
    },[])
    useEffect(()=>{
      if(loading===false){
        if(Categories){
            if(Categories.data){
              if(Categories.data.length>0){
                setItems(Categories.data)
              }
            }else{
              setItems([])
            }
          }else{
            setItems([])
          }
        }
    },[loading])

    return [loading,items]
}

export default HomeCategoryHook