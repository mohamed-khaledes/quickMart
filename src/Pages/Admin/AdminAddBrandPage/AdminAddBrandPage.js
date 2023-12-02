import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddBrand from '../../../Components/Admin/AdminAddBrand/AdminAddBrand'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'
import './AdminAddBrandPage.css'
const AdminAddBrandPage = () => {
  return (
    <Container className='admin-add-brand-page page'>
    <Row className='admin-page-row'>
        <Col xs="12" md="3">
            <AdminSidebar addBrand={"active-admin-page"}/>
        </Col>
        <Col xs="12" md="9">
          <AdminAddBrand />
        </Col>
    </Row>
</Container>
  )
}

export default AdminAddBrandPage