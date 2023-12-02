import baseUrl from "../Api/baseURL";

// this is custom hook called useDeleteData like useEffect and other hooks
const useDeleteData = async(url)=>{
    // url for our url from api
    const config={
        headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.delete(url,config)
    return res
}

export default useDeleteData