import baseUrl from "../Api/baseURL";

// this is custom hook called useGetData like useEffect and other hooks
const GetDataHook = async(url,params)=>{
    // url for our url from api
    // params if we need to put a params (we will use those params when we need to post something to api)
    const res = await baseUrl.get(url,params)
    return res.data
}

// when we need to get a user information using api not localstorage
const useGetDataToken = async (url,params) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.get(url, config);
    return res.data;
}

export {GetDataHook,useGetDataToken}
