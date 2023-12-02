import {useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllReviews } from '../../Redux/actions/reviewsAction'
const GetAllReviewsHook = (id) => {

    const [loading ,setLoading] =useState(true)
    const dispatch = useDispatch()
    const allReviews = useSelector((state)=>state.reviewsReducer.reviews)
    const limit =5;
    const page =1;
    useEffect(()=>{
        const getData =async()=>{
            setLoading(true)
            await dispatch(getAllReviews(id,page,limit))
            setLoading(false)
        }
        getData()
    },[])
    
    let reviews =[];
    if(allReviews){
        reviews = allReviews
        //we can do this too if we need
        // items = allProducts.data.slice(0,4)
    }else{
        reviews =[];
    }

    // onpress for pagenation
    const onPress =async(page)=>{
        await dispatch(getAllReviews(id,page,limit))
    }
    return [reviews,loading,onPress]
}

export default GetAllReviewsHook