import React ,{useRef,useEffect}from 'react'
import './MobileSearch.css'
import noon from '../../../imgs/noon.png'
import { FaLocationArrow,FaCaretDown } from "react-icons/fa"
import NavbarSearchHook from '../../../CustomHooks/Search/NavbarSearchHook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import GetAllUserAddressesHook from '../../../CustomHooks/User/Addresses/GetAllUserAddressesHook'
import WishlistHook from '../../../CustomHooks/Wishlist/WishlistHook'
const MobileSearch = () => {
  const [,onChangeSearchWord] = NavbarSearchHook()
  const ref = useRef()
  useEffect(()=>{ref.current.focus()},[])
  let word="";
  if(localStorage.getItem("searchWord") !== null){
            word = localStorage.getItem("searchWord");
  }else{word=""}
  // get all user addresses hook
  const [addresses] = GetAllUserAddressesHook();
  let address;
  try{
    if(addresses){
      if(addresses.data){
        if(addresses.data.length>0){
          address=addresses.data[0].city
        }
      }
    }
  }catch(e){}
  // wishlist hook 
  const [,,,wishlistNum] = WishlistHook()
  return (
    <div className='mobile-search d-block d-md-none'>
        <div className='form-parent'>
            <Link to="/">
              <div className='mobile-logo'>
              <img src={noon} alt="noon-logo"></img>
              </div>
            </Link>
            <form>
                <input ref={ref}  type="search" value={word} onChange={onChangeSearchWord} placeholder='What are you looking for?'/>
            </form>
            {
              localStorage.getItem("user")!==null?
            <Link to="/user/userFavoriteProductsPage" className='custom-nav-link'>
            <span className="cart-badge">{wishlistNum}</span>
            <FontAwesomeIcon icon={faHeart}/>
            </Link>
            :null
            }
        </div>
        <div className='deliver-to-city'>
          <Link to="/user/userPersonalAddressesPage" className='text-black'>
            <span><FaLocationArrow /></span>
            <span>Deliver to {address ||"..."}</span>
            <span><FaCaretDown /></span>
          </Link>
        </div>
    </div>
  )
}
export default MobileSearch
