import {useState,useEffect} from 'react'
import VeiwSearchProductsHook from '../Product/VeiwSearchProductsHook'
import { useNavigate } from 'react-router-dom'
const NavbarSearchHook = () => {
    const [,,,getAllProductsFn]= VeiwSearchProductsHook()
    const [searchWord,setSearchWord] =useState("")
    const Navigate = useNavigate()
// function for update the state when the search input change
const onChangeSearchWord =(e)=>{
    localStorage.setItem("searchWord",e.target.value)
    setSearchWord(e.target.value)
    const path = window.location.pathname
    if(path !== "/shopProductsPage"){
        Navigate("/shopProductsPage")
    }
}
    useEffect(()=>{
        const get = async()=>{
            await getAllProductsFn()
        }
        get()
    },[searchWord])

    
    return[searchWord,onChangeSearchWord]
}

export default NavbarSearchHook