import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {specificAddress } from '../../../Redux/actions/userActions'
const GetSpecificAddressHook = (id) => {
  const dispatch = useDispatch()
  const res = useSelector(state => state.userReducer.specificAddress)
  const loading = useSelector(state => state.userReducer.loading)

  useEffect(()=>{
        const get = async()=>{
            await dispatch(specificAddress(id))
        }
        get()
  },[])

  /*addresses */
  let address =[]
  try{
        if(loading===false){
            if(res){
                address=res
            }else{
                address = []
            }
        }
  }
catch(e){}

    return[address,loading]
}
export default GetSpecificAddressHook