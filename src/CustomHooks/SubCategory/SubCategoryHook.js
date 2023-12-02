import {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCategoryAction } from '../../Redux/actions/categoryAction'
import { subCategoryAction } from '../../Redux/actions/subCategoryAction'
import Notify from '../UseNotification'
const SubCategoryHook = () => {
    const [id,setId] = useState("0")
    const [name,setName] = useState("")
    const [loading,setLoading] = useState(true)
  
    //selectors for category
    const category = useSelector(state => state.categoryReducer.category)
    const categoryLoading = useSelector(state => state.categoryReducer.loading)
  
    const dispatch = useDispatch()
      useEffect(()=>{
        if(!navigator.onLine){
            Notify("check your internet connection","warn")
        }
        dispatch(getAllCategoryAction())
      },[categoryLoading])
      
      // selectors for subcategory
      const subCategory = useSelector(state =>state.subCategoryReducer.subCategory)
    //   const subCLoading = useSelector(state =>state.subCategoryReducer.loading)
    //===================================================================
    const onChangeName =(e)=>{
        e.persist()
        setName(e.target.value)
      }
    //===================================================================
    //start handle change id of slection option function
      const hadleChange = (e)=>{
        setId(e.target.value)
      } 
    //===================================================================
    //start handle submit function
    const handleSubmit =async(e)=>{
      e.preventDefault()
        if(!navigator.onLine){
            Notify("check your internet connection","warn")
        }
        if(id==="0" || name===""){
          Notify("Please complete the data","warn")
        }else{
          setLoading(true)
          await dispatch(subCategoryAction(
            {
              "name":name,
              "category":id
           }
          ))
          setLoading(false)
        }
    }
    //===================================================================
      // start useeffect to handle response state
      useEffect(()=>{
        if(loading === false){
          setName("")
          setId("0")
          if(subCategory.status === 201){
            Notify("Data added","success")
          }else if(subCategory === "errorAxiosError: Request failed with status code 400"){
            Notify("this name is duplicated please write another name","warn")
          }else{
            Notify("there is a problem","warn")
          }
        }
        setLoading(true)
      },[loading])

      return [name,hadleChange,handleSubmit,onChangeName,categoryLoading,category]
}

export default SubCategoryHook