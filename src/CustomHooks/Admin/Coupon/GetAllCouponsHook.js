import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allCoupons } from '../../../Redux/actions/couponAction'
const GetAllCouponsHook = () => {
  const dispatch = useDispatch()
  const res = useSelector(state => state.couponReducer.allCoupons)
  const loading = useSelector(state => state.couponReducer.loading)

  const get = async()=>{
      await dispatch(allCoupons())
  }
  useEffect(()=>{
        get()
  },[])

  /*coupons */
  let coupons =[]
  try{
        if(loading===false){
            if(res){
                coupons=res
            }else{
                coupons = []
            }
        }
  }
catch(e){}
   
/*page count for pagenation */
let pageCount =0;
try{
    if(res){
        pageCount = res.paginationResult.numberOfPages
    }else{
        pageCount=0
    }
}catch(e){}

/*on press fn for pagenation */
const onPress =async(page)=>{
    await dispatch(allCoupons(page))
}
    return[coupons,loading,pageCount,onPress]
}
export default GetAllCouponsHook