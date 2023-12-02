import React from 'react'
import './UserPersonalAddressesPage.css'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from '../../../Components/User/UserSidebar/UserSidebar'
import UserPersonalAddresses from '../../../Components/User/UserPersonalAddresses/UserPersonalAddresses'
const UserPersonalAddressesPage = () => {
  return (
    <Container className='user-personal-addresses-page page'>
    <Row className='user-page-row'>
        <Col xs="12" md="3">
            <UserSidebar personalAddresses={"active-user-page"}/>
        </Col>
        <Col xs="12" md="9">
          <UserPersonalAddresses />
        </Col>
    </Row>
</Container>
  )
}

export default UserPersonalAddressesPage