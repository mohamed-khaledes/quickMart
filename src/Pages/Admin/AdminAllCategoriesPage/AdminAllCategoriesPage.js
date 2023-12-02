import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminAllCategories from '../../../Components/Admin/AdminAllCategories/AdminAllCategories'
const AdminAllCategoriesPage = () => {
  return (
    <Container className='admin-add-brand-page page'>
    <Row className='admin-page-row'>
        <Col xs="12" md="3">
            <AdminSidebar allCategories={"active-admin-page"}/>
        </Col>
        <Col xs="12" md="9">
          <AdminAllCategories />
        </Col>
    </Row>
</Container>
  )
}

export default AdminAllCategoriesPage