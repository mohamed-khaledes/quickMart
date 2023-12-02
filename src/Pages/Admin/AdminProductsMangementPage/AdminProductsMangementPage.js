import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminAllProducts from '../../../Components/Admin/AdminAllProducts/AdminAllProducts'
import './AdminProductsMangementPage.css'
const AdminProductsMangementPage = () => {
  return (
    <Container className="admin-products-mangement page">
        <Row className='admin-page-row'>
            <Col xs="12" md="3">
                <AdminSidebar productsMangement={"active-admin-page"}/>
            </Col>
            <Col xs="12" md="9">
            <AdminAllProducts />
            </Col>
        </Row>
    </Container>
  )
}

export default AdminProductsMangementPage