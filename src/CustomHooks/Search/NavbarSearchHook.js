import {useState,useEffect} from 'react'
import VeiwSearchProductsHook from '../Product/VeiwSearchProductsHook'
const NavbarSearchHook = () => {
    const [,,,getAllProductsFn]= VeiwSearchProductsHook()

    const [searchWord,setSearchWord] =useState("")
// function for update the state when the search input change
const onChangeSearchWord =(e)=>{
    localStorage.setItem("searchWord",e.target.value)
    setSearchWord(e.target.value)
    const path = window.location.pathname
    if(path !== "/shopProductsPage"){
        window.location.href = "/shopProductsPage"
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