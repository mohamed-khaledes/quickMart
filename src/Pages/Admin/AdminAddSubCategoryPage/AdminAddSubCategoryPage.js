import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddSubCategory from '../../../Components/Admin/AdminAddSubCategory/AdminAddSubCategory'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'

const AdminAddSubCategoryPage = () => {
  return (
    <Container className='admin-add-subcategory-page page'>
    <Row className='admin-page-row'>
        <Col xs="12" md="3">
            <AdminSidebar addSub={"active-admin-page"} />
        </Col>
        <Col xs="12" md="9">
          <AdminAddSubCategory />
        </Col>
    </Row>
</Container>
  )
}

export default AdminAddSubCategoryPage