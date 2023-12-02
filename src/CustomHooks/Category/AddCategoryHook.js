import {useState,useEffect} from 'react'
import uploadImg from '../../imgs/upload.png'
import {useSelector,useDispatch} from 'react-redux'
import {createCategoryAction} from '../../Redux/actions/categoryAction'
//custom hook to show notifications to user 
import Notify from '../UseNotification'
const AddCategoryHook = () => {
    const dispatch = useDispatch()
    // to get the responce from the reducer
    const res = useSelector(state => state.categoryReducer.createCategory)
    // useState for store img choosed
    const [img,setImg] = useState(uploadImg)
    // useState for store name of category 
    const [inputValue,setInputVlue] = useState("")
    const [selectedFile,setSelectedFile] = useState()
    
    const [loading,setLoding] = useState(true)
    const [ispress,setIspress] = useState(false)
  
    // when user choose photo this method will store this photo
    const onImageChange =(event)=>{
      if(event.target.files && event.target.files[0]){
        setImg(URL.createObjectURL(event.target.files[0]))
        setSelectedFile(event.target.files[0])
      }
    }
    const onChangeInputValue =(e)=>{setInputVlue(e.target.value)}
    // function to handel submit and store the data on data base
    const handelSubmit = async (event)=>{
      event.preventDefault()
      if(inputValue === ""||selectedFile === null){
        return  Notify("Please complete the data","warn")
      }else{
        // if we need send images will do this
        const formData =new FormData();
        formData.append("name",inputValue)
        formData.append("image",selectedFile)
        setLoding(true)
        setIspress(true)
        await dispatch(createCategoryAction(formData))
        setLoding(false)
      }
    }
    
    useEffect(()=>{
     if(loading === false){
      if(res.status === 201){
       Notify("Category added","success")
       setImg(uploadImg)
      setInputVlue("")
      setSelectedFile(null)
      setLoding(true)
      setIspress(false)
      }else{
       //Bad request
       Notify("there is a problem","error")
      }
     }
    },[loading])
    return [img,onImageChange,inputValue,onChangeInputValue,handelSubmit,ispress,loading]
}

export default AddCategoryHook