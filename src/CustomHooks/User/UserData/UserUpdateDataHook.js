import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { specificUser, updateUserData } from "../../../Redux/actions/userActions";
import Notify from "../../../CustomHooks/UseNotification";
import { useNavigate } from "react-router-dom";
const UserUpdateDataHook = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const res = useSelector((state) => state.userReducer.updateUserData);
  const userRes = useSelector((state) => state.userReducer.specificUser);
  const resLoading = useSelector((state) => state.userReducer.loading);
   /*states */
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [loading, setLoading] = useState(true);
   const [isPress, setIsPress] = useState(false);
   const [userLoading,setUserLoading] = useState(true)
  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const get=async()=>{
        setUserLoading(true)
        await dispatch(specificUser())
        setUserLoading(false)
    }
    get()
},[])
// set a current values to see what i update
useEffect(()=>{
    if(userLoading === false){
        if(userRes){
           if(userRes.data){
               setName(userRes.data.name)
               setEmail(userRes.data.email)
               setPhone(userRes.data.phone)
           }
        }
    }
},[userLoading])
 

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };
  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };

  let body;
  const onUpdateData = async () => {
    if(userRes.data.email === email){
        body={
            name: name,
            phone: phone,
        }
      }else{
        body={
            name: name,
            phone: phone,
            email: email,
        }
      }
    setIsPress(true);
    setLoading(true);
    await dispatch(
      updateUserData(body)
    );
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.status === 200) {
          Notify(res.data.status, "success");
          localStorage.setItem("user",JSON.stringify(res.data.data.user))
          setTimeout(() => {
            Navigate("/user/userAcountPage");
          }, 1000);
        }else if(res.status ===400){
            if(res.data.errors){
                Notify(res.data.errors[0].msg,"error")
            }
        }else {
          Notify("there is a problem", "error");
        }
      }
    }
  }, [loading]);

  return [
    name,
    onChangeName,
    phone,
    onChangePhone,
    email,
    onChangeEmail,
    onUpdateData,
    loading,
    isPress,
    resLoading
  ];
};

export default UserUpdateDataHook;
