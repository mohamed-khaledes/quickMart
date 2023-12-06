import React from 'react'
import ProductsCard from '../../Products/ProductsCard/ProductsCard'
import { Col, Row } from 'react-bootstrap'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import NotFoundData from '../../../Components/Utility/NotFoundData/NotFoundData'
import WishlistHook from '../../../CustomHooks/Wishlist/WishlistHook'
const UserFavoriteProducts = () => {
  const [wishlist,loading,wishlistItems] = WishlistHook()
  return (
    <div className='user-favorite-products'>
        <Row className='min-vh-100 position-relative'>
        {
          loading===false?
          wishlistItems?
         wishlistItems.map((item,index)=>{return(
          <Col key={index} xs="6" md="4" lg="3">
            <ProductsCard favProduct={wishlist} item={item}/>
          </Col>
          )})
          :<NotFoundData/>
          :<SpinnerComponent />
        }
        </Row>
    </div>
  )
}

export default UserFavoriteProducts