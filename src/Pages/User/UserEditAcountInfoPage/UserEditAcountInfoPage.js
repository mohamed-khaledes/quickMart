import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from '../../../Components/User/UserSidebar/UserSidebar'
import UserEditAcountInfo from '../../../Components/User/UserEditAcountInfo/UserEditAcountInfo'

const UserEditAcountInfoPage = () => {
  return (
    <Container className='user-acount-page page'>
    <Row className='user-page-row'>
        <Col xs="12" md="3">
            <UserSidebar Acount={"active-user-page"}/>
        </Col>
        <Col xs="12" md="9">
            <UserEditAcountInfo />
        </Col>
    </Row>
</Container>
  )
}

export default UserEditAcountInfoPage