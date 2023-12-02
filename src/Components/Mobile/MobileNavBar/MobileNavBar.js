import React,{useState} from 'react'
import './MobileNavBar.css'
import { Nav } from 'react-bootstrap'
import {FaHome,FaUser} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faShop, faSignIn, faStore, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import GetAllCartHook from '../../../CustomHooks/Cart/GetAllCartHook'
import {Link} from 'react-router-dom'
import SignUp from '../../Authentication/SignUp/SignUp'
import Login from '../../Authentication/Login/Login'
const MobileNavBar = () => {
  const [productsNumber] = GetAllCartHook()
  const [seensignup, setSeensignup] = useState(false);
  const [seenlogin, setSeenlogin] = useState(false);
   // Start function of signUp and login
   const handleClickSignUp = () => {
    setSeensignup(!seensignup);
  };
  const handleClickLogin = () => {
    setSeenlogin(!seenlogin);
  };
  // End function of signUp and login
  return (
    <div className='mobile-navbar d-sm-block d-md-none'>
        <Nav className='mobile-navbar-content' as="ul">
      <Nav.Item as="li">
        <Link to="/">
            <div className='mobile-navbar-item'>
              <span><FaHome /></span>
                <span>Home</span>
            </div>
        </Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Link to='/allCategoryPage'>
        <div className='mobile-navbar-item'>
          <span><FontAwesomeIcon icon={faShop}/></span>
                <span>Categories</span>
        </div>
        </Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Link to='/shopProductsPage'>
        <div className='mobile-navbar-item'>
        <span><FontAwesomeIcon icon={faStore}/></span>
                <span>Products</span>
        </div>
        </Link>
      </Nav.Item>
      {
        localStorage.getItem("user")!==null?
        <>
      <Nav.Item as="li">
        <Link  to='/user/userAcountPage'>
        <div className='mobile-navbar-item'>
                <span><FaUser /></span>
                <span>My Acount</span>
        </div>
        </Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Link  to='/cartPage'>
        <div className='mobile-navbar-item position-relative'>
        <span><FontAwesomeIcon icon={faCartShopping}/></span>
        <span>Cart</span>
        <span className="mobile-cart-badge">{productsNumber}</span>
        </div>
        </Link>
      </Nav.Item>
        </>
        :
        <>
        <Nav.Item as="li">
          <div className='mobile-navbar-item mobile-sign-up'onClick={handleClickSignUp}>
          <span><FontAwesomeIcon icon={faUserPlus}/></span>
          <span>Sign up</span>
          </div>
          {seensignup ? (<SignUp handleClick={handleClickSignUp} />) : null}
        </Nav.Item>
  
        <Nav.Item as="li">
          <div className='mobile-navbar-item mobile-login' onClick={handleClickLogin}>
          <span><FontAwesomeIcon icon={faSignIn}/></span>
          <span>Login</span>
          </div>
          {seenlogin ? (<Login handleClick={handleClickLogin} />) : null}
        </Nav.Item>
          </>
      }

    </Nav>
    </div>
  )
}
export default MobileNavBar
