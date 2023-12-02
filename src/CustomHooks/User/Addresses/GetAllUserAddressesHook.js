import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allAddresses } from '../../../Redux/actions/userActions'
const GetAllUserAddressesHook = () => {
  const dispatch = useDispatch()
  const res = useSelector(state => state.userReducer.allAddresses)
  const loading = useSelector(state => state.userReducer.loading)

  useEffect(()=>{
        const get = async()=>{
            await dispatch(allAddresses())
        }
        get()
  },[])

  /*addresses */
  let addresses =[]
  try{
        if(loading===false){
            if(res){
                addresses=res
            }else{
                addresses = []
            }
        }
  }
catch(e){}

    return[addresses,loading]
}
export default GetAllUserAddressesHook