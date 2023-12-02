import React from 'react'
import './UserSidebar.css'
import { Link } from 'react-router-dom'
const UserSidebar = ({favoriteProducts,ordersMangement,personalAddresses,Acount}) => {
  return (
    <div className='user-sidebar'>
        <ul>
            <Link to={"/user/userAcountPage"}><li className={Acount}>Acount</li></Link>
            <Link to={"/user/allorders"}><li className={ordersMangement}>Orders Mangement</li></Link>
            <Link to={"/user/userFavoriteProductsPage"}><li className={favoriteProducts}>Favorite Products</li></Link>
            <Link to={"/user/userPersonalAddressesPage"}><li className={personalAddresses}>Personal addresses</li></Link>
        </ul>
    </div>
  )
}

export default UserSidebar