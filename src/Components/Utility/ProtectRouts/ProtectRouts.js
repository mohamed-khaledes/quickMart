import React from 'react'
import { Navigate, Outlet,useLocation } from 'react-router-dom'

const ProtectRouts = ({auth,children}) => {
    const location=useLocation()
    if(auth===false){
        return <Navigate to="/" state={{from:location}} replace/>
    }
    // We will return the children when we want to protect one Rout
    // We will return the OUtlet when we want to protect some of Routs
    return children?children:<Outlet/>
}

export default ProtectRouts