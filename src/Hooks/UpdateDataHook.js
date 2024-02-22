import baseUrl from "../Api/baseURL";


// if we need to update data without images
export const UpdateDataHook = async(url,params)=>{
    // url for our url from api
    // params if we need to put a params 
    // params => {key:"value"}
    const config={
        headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url,params,config)
    return res
}

// if we need to update data with images
export const UpdateDataHookWithImage = async(url,params)=>{
    const config ={
        headers:{"Content-type":"multipart/form-data",
        "Authorization":`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url,params,config)
    return res
}
