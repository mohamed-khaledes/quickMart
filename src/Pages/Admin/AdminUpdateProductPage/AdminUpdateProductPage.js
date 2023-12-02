import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'
import { useParams } from 'react-router-dom'
import AdminUpdateProduct from '../../../Components/Admin/AdminUpdateProduct/AdminUpdateProduct'
const AdminUpdateProductPage = () => {
  const {id} = useParams()
  return (
    <Container className='admin-add-product-page page'>
    <Row className='admin-page-row'>
        <Col xs="12" md="3">
            <AdminSidebar productsMangement={"active-admin-page"}/>
        </Col>
        <Col xs="12" md="9">
          <AdminUpdateProduct id={id}/>
        </Col>
    </Row>
</Container>
  )
}

export default AdminUpdateProductPage