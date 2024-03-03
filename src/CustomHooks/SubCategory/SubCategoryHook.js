import {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCategoryAction } from '../../Redux/actions/categoryAction'
import { subCategoryAction } from '../../Redux/actions/subCategoryAction'
import Notify from '../UseNotification'
const SubCategoryHook = () => {
    const [id,setId] = useState("0")
    const [name,setName] = useState("")
    const [categories,setCategories] = useState([])
    const [getLoading,setGetLoading] = useState(true)
    const [loading,setLoading] = useState(true)
    const [isPress,setIsPress] = useState(false)
    const dispatch = useDispatch()
    //selectors for category
    const allCategories = useSelector(state => state.categoryReducer.allCategories)
    // const categoryLoading = useSelector(state => state.categoryReducer.loading)
    // selectors for subcategory
    const subCategory = useSelector(state =>state.subCategoryReducer.subCategory)
    //   const subCLoading = useSelector(state =>state.subCategoryReducer.loading)
    
    const getData = async()=>{
      setGetLoading(true)
      await dispatch(getAllCategoryAction())
      setGetLoading(false)
    }
      useEffect(()=>{
        getData()
      },[])
      useEffect(()=>{
        if(getLoading===false){
          if(allCategories){
            setCategories(allCategories?.data)
          }else{
            setCategories([])
          }
        }
      },[getLoading])
    
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
        if(id==="0" || name===""){
          Notify("Please complete the data","warn")
        }else{
          setLoading(true)
          setIsPress(true)
          await dispatch(subCategoryAction(
            {
              "name":name,
              "category":id
           }
          ))
          setLoading(false)
          setIsPress(false)
        }
    }
    //===================================================================
      // start useeffect to handle response state
      useEffect(()=>{
        if(loading === false){
          if(subCategory){
            if(subCategory?.status === 201){
              setName("")
              setId("0")
              Notify("Data added","success")
            }else if(subCategory?.status===400){
              Notify(subCategory?.data?.message,"error")
            }else{
              Notify("there is a problem","error")
            }
          }
        }
      },[loading])

      return [name,hadleChange,handleSubmit,onChangeName,loading,getLoading,isPress,categories,id]
}

export default SubCategoryHook