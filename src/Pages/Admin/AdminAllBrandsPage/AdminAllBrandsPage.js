import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminAllBrands from '../../../Components/Admin/AdminAllBrands/AdminAllBrands'
const AdminAllBrandsPage = () => {
  return (
    <Container className='admin-add-brand-page page'>
    <Row className='admin-page-row'>
        <Col xs="12" md="3">
            <AdminSidebar allBrands={"active-admin-page"}/>
        </Col>
        <Col xs="12" md="9">
          <AdminAllBrands />
        </Col>
    </Row>
</Container>
  )
}

export default AdminAllBrandsPage