import React from 'react'
import './AdminOrderDetailsPage.css'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminOrderDetails from '../../../Components/Admin/AdminOrderDetails/AdminOrderDetails'
import { useParams } from 'react-router-dom'
import GetSpecificUserOrderHook from '../../../CustomHooks/OrderHooks/GetSpecificUserOrderHook'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'

const AdminOrderDetailsPage = () => {
  const {id}=useParams()
  const [orderData,loading] = GetSpecificUserOrderHook(id)
  return (
    <Container className="admin-order-details-page page">
        <Row className='admin-page-row'>
            <Col xs="12" md="3">
                <AdminSidebar ordersMangement={"active-admin-page"}/>
            </Col>
            <Col xs="12" md="9">
              {
                loading===false?
                <AdminOrderDetails orderData={orderData}/>
                :<SpinnerComponent/>
              }
            </Col>
        </Row>
    </Container>
  )
}

export default AdminOrderDetailsPage