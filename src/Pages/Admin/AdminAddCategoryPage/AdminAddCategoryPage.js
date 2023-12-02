import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddCategory from '../../../Components/Admin/AdminAddCategory/AdminAddCategory'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'
import './AdminAddCategoryPage.css'
const AdminAddCategoryPage = () => {
  return (
    <Container className='admin-add-category-page page'>
    <Row className='admin-page-row'>
        <Col xs="12" md="3">
            <AdminSidebar addCategory={"active-admin-page"}/>
        </Col>
        <Col xs="12" md="9">
          <AdminAddCategory />
        </Col>
    </Row>
</Container>
  )
}

export default AdminAddCategoryPage