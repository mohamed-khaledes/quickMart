import {useState,useEffect}from 'react'
//actions
import { useSelector,useDispatch } from 'react-redux'
import { getAllCategoryAction } from '../../../Redux/actions/categoryAction'
import { getAllBrandsAction } from '../../../Redux/actions/brandAction'
import {getOneCategorySub} from '../../../Redux/actions/subCategoryAction'
import {getProductDetails, updateProduct} from '../../../Redux/actions/productAction'
import Notify from '../../UseNotification'
const UpdateProductHook = (id) => {
      // products images values
      const [images, setImages] = useState({});
      //=================================================
      //states values
      const [options,setOptions] = useState([])
      const [prodName,setProdName] = useState("")
      const [prodDes,setProdDes] = useState("")
      const [priceBefore,setPriceBefore] = useState("price before discount")
      const [priceAfter,setPriceAfter] = useState("price after discount")
      const [qty,setQty] = useState("available quantity")
      const [catId,setCatId] = useState("0")
      const [brandId,setBrandId] = useState("0")
      const [subCatId,setSubCatId] = useState([])
      const [selectedSubId,setSelectedSubId] = useState([])
      const [loading,setLoading] = useState(true)
      const [showColor,setShowColor] = useState(false)
      const [colors,setColors] = useState([])
    //===============================================================
    // subcategory code
    const onSelect=(selectedList)=>{
      setSelectedSubId(selectedList)
    }
    const onRemove=(selectedList)=>{
      setSelectedSubId(selectedList)
    }
    //===============================================================
      const dispatch = useDispatch()
      useEffect(()=>{
        const dispatches = async()=>{
            await dispatch(getAllCategoryAction())
            await dispatch(getAllBrandsAction())
            await dispatch(getProductDetails(id))
        }
        dispatches();
      },[])
      // categories data from redux
      const category = useSelector(state =>state.categoryReducer.category)
      // brands data from redux
      const brands = useSelector(state =>state.brandReducer.brands)
      // oneCategory sub from redux 
      const oneCategorySub = useSelector(state =>state.subCategoryReducer.subCategory)
      // products data  from redux 
    //   const products = useSelector(state =>state.productReducer.products)
      const item = useSelector(state =>state.productReducer.productDetails)
      // state of product update
      const updateProductState = useSelector(state =>state.productReducer.updateProduct)
      // set values of product when the page load
      useEffect(()=>{
        try{
            if(item.data){
                setImages(item.data.images)
                setProdName(item.data.title)
                setProdDes(item.data.description)
                setPriceBefore(item.data.price)
                setQty(item.data.quantity)
                setCatId(item.data.category)
                setBrandId(item.data.brand)
                setColors(item.data.availableColors)
            }
        }catch(e){
            
        }
      },[item])
      // when select category
      const onSelectCategory =async(e)=>{
        setCatId(e.target.value)
      }
      useEffect(()=>{
        if(catId !== 0){
            const run =async()=>{
                await dispatch(getOneCategorySub(catId))
            }
            run();
        }
      },[catId])

      useEffect(()=>{
        if(oneCategorySub){
            setOptions(oneCategorySub.data)
        }
      },[oneCategorySub])
      // when select brand
      const onSelectBrand =(e)=>{
        setBrandId(e.target.value)
      }
      //==============================================================
      // handle change color in compactpicker
      const handleChangeComplete = (color)=>{
        setColors([...colors,color.hex])
      }
      //remove color function
      const removeColor = (color)=>{
        const newColors = colors.filter((e)=> e!== color)
        setColors(newColors)
      }
       //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    //convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };

      //handle submit function
      const handleSubmit =async(e)=>{
        e.preventDefault()
        if(prodName ===""||
          prodDes ===""||
          catId ==="0"||
          images === ""||
          priceBefore==="price before discount"||
          brandId ===""||
          qty===""
        ){
          Notify("please complete the data","warn")
        }else{
            let imageCover;
            if (images[0].length <= 1000) {
                convertURLtoFile(images[0]).then(val => imageCover = val)
            } else {
                imageCover = dataURLtoFile(images[0], Math.random() + ".png")
            }
    
            let itemImages = []
            //convert array of base 64 image to file 
            Array.from(Array(Object.keys(images).length).keys()).map(
                (item, index) =>{
                  if (images[index].length <= 1000) {
                      convertURLtoFile(images[index]).then(val => itemImages.push(val))
                  }
                  else {
                      itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
                  }
                }
                )

          const formData = new FormData()
          formData.append("title",prodName)
          formData.append("description",prodDes)
          formData.append("quantity",qty)
          formData.append("price",priceBefore)
          setTimeout(() => {
                formData.append("imageCover",imageCover)
                itemImages.map((img)=>formData.append("images",img))
            },500);
          formData.append("category",catId)
          formData.append("brand",brandId)
          //=====================================================
          // only in formData we will do this
          colors.map((color)=>formData.append("availableColors",color))
          selectedSubId.map((item)=>formData.append("subcategory",item._id))
          //=====================================================
          setTimeout(async() => {
              setLoading(true)
              await dispatch(updateProduct(id,formData))
              setLoading(false)
          },500);
        }
      }
    
      useEffect(()=>{
        if(loading === false){
          setProdName("")
          setProdDes("")
          setCatId(0)
          setBrandId(0)
          setPriceBefore("price before discount")
          setPriceAfter("price after discount")
          setSelectedSubId([])
          setQty("available quantity")
          setImages({})
          setColors([])

          setTimeout(() => {
            setLoading(true)
          }, 1500);
          if(updateProductState){
            if(updateProductState.status===200){
              Notify("Data updated","success")
            }else{
              Notify("there is a problem")
            }
          }
        }
      },[loading])

      return [images,setImages,
        prodDes,setProdDes,
        prodName,setProdName,
        priceBefore,setPriceBefore,
        priceAfter,setPriceAfter,
        qty,setQty,handleSubmit,
      onSelectCategory,category,catId,
      onSelectBrand,brands,brandId,colors,removeColor,
      showColor,setShowColor,handleChangeComplete,
      options,onSelect,onRemove]
}

export default UpdateProductHook