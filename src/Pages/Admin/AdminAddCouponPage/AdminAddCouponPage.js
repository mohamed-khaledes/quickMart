import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar';
import AdminAddCoupon from '../../../Components/Admin/AdminAddCoupon/AdminAddCoupon';
import { ToastContainer } from 'react-toastify';

const AdminAddCouponPage = () => {
      return (
        <Container className='admin-add-subcategory-page page'>
        <Row className='admin-page-row'>
            <Col xs="12" md="3">
                <AdminSidebar addCoupon={"active-admin-page"} />
            </Col>
            <Col xs="12" md="9">
              <AdminAddCoupon />
            </Col>
        </Row>
        <ToastContainer />
    </Container>
      )
}

export default AdminAddCouponPage