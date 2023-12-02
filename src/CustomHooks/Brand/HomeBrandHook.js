import {useEffect} from 'react'
// import everything for redux to use the api
import { useSelector,useDispatch } from 'react-redux'
import { getAllBrandsAction } from '../../Redux/actions/brandAction'
const HomeBrandHook = () => {
    const dispatch = useDispatch()
    const brands = useSelector(state => state.brandReducer.brands)
    const loading = useSelector(state => state.brandReducer.loading)

    useEffect(()=>{
      const get =async()=>{
        await dispatch(getAllBrandsAction())
      }
      get()
    },[])
  
    let data =[]
    try{
      if(brands){
        data =brands
      }else{
         data=[];
      }
    }catch(e){}

    return [data,loading]
}

export default HomeBrandHook