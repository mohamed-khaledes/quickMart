import {useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCategoryAction } from '../../../Redux/actions/categoryAction'
import { getAllBrandsAction } from '../../../Redux/actions/brandAction'
import {getOneCategorySub} from '../../../Redux/actions/subCategoryAction'
import {createProduct} from '../../../Redux/actions/productAction'
import Notify from '../../UseNotification'
const AddProductHook = () => {
  const dispatch = useDispatch()
  const get =async()=>{
    await dispatch(getAllCategoryAction())
    await dispatch(getAllBrandsAction())
  }
  useEffect(()=>{
    get()
  },[])
  // categories data from redux
  const category = useSelector(state =>state.categoryReducer.category)
  // brands data from redux
  const brands = useSelector(state =>state.brandReducer.brands)
  // oneCategory sub from redux 
  const oneCategorySub = useSelector(state =>state.subCategoryReducer.subCategory)
  // products data  from redux 
  const products = useSelector(state =>state.productReducer.products)
  // when select category
  // products images values
  const [images,setImages] = useState([]);
  //=================================================
  //states values
  const [options,setOptions] = useState([])
  const [prodName,setProdName] = useState("")
  const [prodDes,setProdDes] = useState("")
  const [price,setPrice] = useState("")
  const [priceAfterDiscount,setPriceAfterDiscount] = useState("")
  const [qty,setQty] = useState("")
  const [catId,setCatId] = useState("0")
  const [brandId,setBrandId] = useState("0")
  // const [subCatId,setSubCatId] = useState([])
  const [selectedSubId,setSelectedSubId] = useState([])
  const [loading,setLoading] = useState(true)
  //functions for onchange the states
  const onChangeProdName =(e)=>{
    setProdName(e.target.value)
  }
  const onChangeProdDes =(e)=>{
    setProdDes(e.target.value)
  }
  const onChangePrice =(e)=>{
    setPrice(e.target.value)
  }
  const onChangePriceAfter =(e)=>{
    setPriceAfterDiscount(e.target.value)
  }
  const onChangeQty =(e)=>{
    setQty(e.target.value)
  }
  const onChangeColor =()=>{
    setShowColor(!showColor)
  }
  //===================================================
  // subcategory code
    const onSelect=(selectedList)=>{
        setSelectedSubId(selectedList)
      }
      const onRemove=(selectedList)=>{
        setSelectedSubId(selectedList)
      }
      //On select category
      const onSelectCategory =async(e)=>{
        if(e.target.value!=="0"){
          await dispatch(getOneCategorySub(e.target.value))
        }
        setCatId(e.target.value)
      }
      // when select brand
      const onSelectBrand =(e)=>{
        setBrandId(e.target.value)
      }
      useEffect(()=>{
        try{
          if(catId !=="0"){
            if(oneCategorySub.data){
              setOptions(oneCategorySub.data)
            }
          }
        }catch(e){}
      },[catId])
      //==============================================================
      //code for show and hide the color picker
      const [showColor,setShowColor] = useState(false)
      // state for change color
      const [colors,setColors] = useState([])
      // handle change color in compactpicker
      const handleChangeComplete = (color)=>{
        setColors([...colors,color.hex])
      }
      //remove color function
      const removeColor = (color)=>{
        const newColors = colors.filter((e)=> e!== color)
        setColors(newColors)
      }
      // function to convert base64 to file
      function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
      //handle submit function
      const handleSubmit =async(e)=>{
        e.preventDefault()
        if(prodName ===""||
          prodDes ===""||
          catId ===""||
          images==={}||
          price==="0"||
          brandId ===""||
          qty===""
        ){
          Notify("please complete the data","warn")
        }else{
          const imageCover = dataURLtoFile(images[0],Math.random()+".png")
          //to convert all of images from base64 to files
          const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item,index)=>{
              return dataURLtoFile(images[index],Math.random()+".png")
            }
          )
          const formData = new FormData()
          formData.append("title",prodName)
          formData.append("description",prodDes)
          formData.append("quantity",qty)
          formData.append("price",price)
          formData.append("priceAfterDiscount",priceAfterDiscount)
          formData.append("imageCover",imageCover)
          formData.append("category",catId)
          formData.append("brand",brandId)
          //=====================================================
          // only in formData we will do this
          colors.map((color)=>formData.append("availableColors",color))
          selectedSubId.map((item)=>formData.append("subcategory",item._id))
          itemImages.map((img)=>formData.append("images",img))
          //=====================================================
          setLoading(true)
          await dispatch(createProduct(formData))
          setLoading(false)
        }
      }
    
      useEffect(()=>{
        if(loading === false){
          setProdName("")
          setProdDes("")
          setCatId("0")
          setBrandId("0")
          setPrice("")
          setPriceAfterDiscount("")
          setSelectedSubId([])
          setQty("")
          setImages({})
          setColors([])
          setTimeout(() => {
            setLoading(true)
          }, 1500);
          if(products){
            if(products.status===201){
              Notify("Product added","success")
              setTimeout(() => {
                window.location.reload()
              },1500);
            }else{
              Notify("there is a problem")
            }
          }
        }
      },[loading])

      return [images,setImages,
        prodDes,onChangeProdDes,
        prodName,onChangeProdName,
        price,onChangePrice,
        priceAfterDiscount,onChangePriceAfter,
        qty,onChangeQty,handleSubmit,
      onSelectCategory,category,
      onSelectBrand,brands,brandId,catId,
      colors,removeColor,
      showColor,onChangeColor,handleChangeComplete,
      options,onSelect,onRemove]
}

export default AddProductHook