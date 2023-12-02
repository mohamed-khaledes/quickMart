import React from 'react'
import './UserFavoriteProductsPage.css'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from '../../../Components/User/UserSidebar/UserSidebar'
import UserFavoriteProducts from '../../../Components/User/UserFavoriteProducts/UserFavoriteProducts'

const UserFavoriteProductsPage = () => {
  return (
    <Container className='user-favorite-products-page page'>
    <Row className='user-page-row'>
        <Col xs="12" md="3">
            <UserSidebar favoriteProducts={"active-user-page"}/>
        </Col>
        <Col xs="12" md="9">
        <UserFavoriteProducts />
        </Col>
    </Row>
</Container>
  )
}

export default UserFavoriteProductsPage