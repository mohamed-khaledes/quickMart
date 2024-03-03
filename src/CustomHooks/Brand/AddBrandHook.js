import {useState,useEffect} from 'react'
import uploadImg from '../../imgs/upload.png'
import {useSelector,useDispatch} from 'react-redux'
import { createBrandAction } from '../../Redux/actions/brandAction'
//custom hook to show notifications to user 
import Notify from '../UseNotification'
const AddBrandHook = () => {
    const dispatch = useDispatch()
    // to get the responce from the reducer
    const res = useSelector(state => state.brandReducer.createBrand)
    // useState for store img choosed
    const [img,setImg] = useState(uploadImg)
    // useState for store name of brand 
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
    const onChangeInputValue =(e)=>{
          setInputVlue(e.target.value)
    }
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
        await dispatch(createBrandAction(formData))
        setLoding(false)
        setIspress(false)
      }
    }
    
    useEffect(()=>{
     if(loading === false){
      setImg(uploadImg)
      setInputVlue("")
      setSelectedFile(null)
      setLoding(true)
      setIspress(false)
      if(res.status === 201){
       // succes
       Notify("Brand added","success")
      }else{
       //Bad request
       Notify("you already have this brand","warn")
      }
     }
    },[loading])

    return [img,onImageChange,inputValue,onChangeInputValue,handelSubmit,ispress,loading]
}

export default AddBrandHook