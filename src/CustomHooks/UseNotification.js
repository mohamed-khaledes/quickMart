// to show the notifications
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notify =(msg,type)=>{
    if(type=== "warn"){
      return toast.warn(msg)
    }else if(type === "success"){
      return toast.success(msg)
    }else if(type === "error"){
      return toast.error(msg)
    }
  }

export default Notify