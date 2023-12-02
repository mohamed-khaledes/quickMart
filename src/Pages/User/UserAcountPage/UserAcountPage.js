import React from 'react'
import './UserAcountPage.css'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from '../../../Components/User/UserSidebar/UserSidebar'
import UserAcount from '../../../Components/User/UserAcount/UserAcount'
const UserAcountPage = () => {
  return (
    <Container className='user-acount-page page'>
    <Row className='user-page-row'>
        <Col xs="12" md="3">
            <UserSidebar Acount={"active-user-page"}/>
        </Col>
        <Col xs="12" md="9">
          <UserAcount />
        </Col>
    </Row>
</Container>
  )
}

export default UserAcountPage