import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddProduct from '../../../Components/Admin/AdminAddProduct/AdminAddProduct'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'

const AdminAddProductPage = () => {
  return (
    <Container className='admin-add-product-page page'>
    <Row className='admin-page-row'>
        <Col xs="12" md="3">
            <AdminSidebar addProduct={"active-admin-page"}/>
        </Col>
        <Col xs="12" md="9">
          <AdminAddProduct />
        </Col>
    </Row>
</Container>
  )
}

export default AdminAddProductPage