import baseUrl from "../Api/baseURL";

// this is custom hook called useGetData like useEffect and other hooks

// if we need to post data without images
export const PostDataHook = async(url,params)=>{
    // url for our url from api
    // params if we need to put a params 
    // params => {key:"value"}
    const config={
        headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.post(url,params,config)
    return res
}

// if we need to post data with images
export const PostDataHookWithImage = async(url,params)=>{
    const config ={
        headers:{"Content-type":"multipart/form-data",
        "Authorization":`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.post(url,params,config)
    return res
}
