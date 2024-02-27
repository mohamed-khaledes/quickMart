import React,{useRef,useEffect, useState} from 'react'
import './NavBarLogin.css'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import egyptFlag from  '../../../imgs/egyptFlag.jpg'
import logo from '../../../imgs/logo02.png'
import NavbarSearchHook from '../../../CustomHooks/Search/NavbarSearchHook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import {faCartShopping, faSignOut } from '@fortawesome/free-solid-svg-icons'
import SignUp from '../../Authentication/SignUp/SignUp'
import Login from '../../Authentication/Login/Login'
import Dropdown from 'react-bootstrap/Dropdown';
import GetAllCartHook from '../../../CustomHooks/Cart/GetAllCartHook'
import { Link,useNavigate } from 'react-router-dom'
import GetAllUserAddressesHook from '../../../CustomHooks/User/Addresses/GetAllUserAddressesHook'
import WishlistHook from '../../../CustomHooks/Wishlist/WishlistHook'
const NavBarLogin = () => {
  //states
  const [seensignup, setSeensignup] = useState(false);
  const [seenlogin, setSeenlogin] = useState(false);
  const [user,setUser] =useState({})
  const focusInput = useRef(null)
  const [,onChangeSearchWord] = NavbarSearchHook()
  // get all cart hook
  const [productsNumber] = GetAllCartHook()
  // get all user addresses hook
  const [addresses] = GetAllUserAddressesHook();
  // wishlist hook 
  const [,,,wishlistNum] = WishlistHook()
  // get user address
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
  const Navigate = useNavigate()
  //======================================================
  // word of search
  let word="";
    if(localStorage.getItem("searchWord") !== null){
            word = localStorage.getItem("searchWord");
    }else{word=""}
  useEffect(()=>{
          focusInput.current.focus()
          if(localStorage.getItem("user")!==null){
            setUser(JSON.parse(localStorage.getItem("user")))
          }else{
            setUser(null)
          }
  },[])
  // logout function
  const logOut =()=>{
    setTimeout(() => {
      setUser({})
      localStorage.clear()
        window.location.href='/'
      },300);
  }
  // Start function of signUp and login
  const handleClickSignUp = () => {
    setSeensignup(!seensignup);
  };
  const handleClickLogin = () => {
    setSeenlogin(!seenlogin);
  };
  // End function of signUp and login
  return (
    <div className='d-none d-md-block navBar-login'>
      <Navbar expand="lg" className='navBar'>
      <Container fluid className='flex-nowrap'>
        <Link to={"/"} aria-label='logo'>
        <div className='quickmart-logo'>
        <img loading='lazy' src={logo} alt='logo-quickmart'></img>
        </div>
        </Link>
        <Nav>
          <Link to='/user/userPersonalAddressesPage' className='border-0' aria-label='to to user addresses page'>
          <div className='dilver'>
            <p  className='text-color fw-bold font-size-14 m-0'>
              <img className='egypt-flag' src={egyptFlag} alt='egypt-flag'/>
              <span>Dilver To {address ||"..."}</span>
            </p>
          </div>
          </Link>
        </Nav>
          <Form className="search d-flex">
            <Form.Control
            ref={focusInput}
              onChange={onChangeSearchWord}
              value={word}
              type="search"
              placeholder="What are you looking for?"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          {/* <div className='language'>
            <button className='bg-transparent border-0 fw-bold text-color'>English</button>
          </div> */}
          {user!==null?(
            <>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       {`Ahllan ${user.name}`}
      </Dropdown.Toggle>
      {
        user.role==="admin"?
        <Dropdown.Menu>
        <Dropdown.Item onClick={()=>Navigate("/admin/adminProductsMangementPage")}>
          <FontAwesomeIcon icon={faUser}/> Dashboard
        </Dropdown.Item>
        <Dropdown.Item onClick={logOut}>
          <FontAwesomeIcon icon={faSignOut}/> logOut
          </Dropdown.Item>
      </Dropdown.Menu>
        :
        <Dropdown.Menu>
        <Dropdown.Item onClick={()=>Navigate("/user/userAcountPage")}>
        <FontAwesomeIcon icon={faUser}/> profile
        </Dropdown.Item>
        <Dropdown.Item onClick={logOut}>
          <FontAwesomeIcon icon={faSignOut}/> logOut
          </Dropdown.Item>
      </Dropdown.Menu>
      }
    </Dropdown>
            {user.role==="admin"?
            null
            :
            <div className='links-parent px-2 mx-2 d-flex'>
            <Link to="/cartPage" className='custom-nav-link' aria-label='go to cart'>
            <span className="cart-badge">{productsNumber}</span>
            <span className='text-color font-size-14 mx-1'>Cart</span><FontAwesomeIcon icon={faCartShopping}/>
            </Link>
            <Link to="/user/userFavoriteProductsPage" className='custom-nav-link' aria-label='go to wishlist'>
            <span className="cart-badge">{wishlistNum}</span>
            <span className='text-color font-size-14 mx-1'>Wishlist</span><FontAwesomeIcon icon={faHeart}/>
            </Link>
            </div>
          }
            </>
          ):(
          <Nav
            className="me-auto my-2 my-lg-0 font"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                <button className='navBtn' onClick={handleClickSignUp}>Sign up <FontAwesomeIcon icon={faUser}/></button>
                  {seensignup ? (<SignUp handleClick={handleClickSignUp} />) : null}
                  
                <button className='navBtn' onClick={handleClickLogin}>login<FontAwesomeIcon icon={faUser}/></button>
                  {seenlogin ? (<Login handleClick={handleClickLogin} />) : null}
          </Nav>
          )}
      </Container>
    </Navbar>
    </div>
  )
}
export default NavBarLogin
