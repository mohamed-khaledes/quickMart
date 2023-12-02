import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from '../../../Components/Admin/AdminSidebar/AdminSidebar'
import Pagenation from '../../../Components/Utility/Pagenation/Pagenation'
import './AdminOrdersMangementPage.css'
import GetAllUserOrdersHook from '../../../CustomHooks/OrderHooks/GetAllUserOrdersHook'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import NotFoundData from '../../../Components/Utility/NotFoundData/NotFoundData'
import AdminOrderItem from '../../../Components/Admin/AdminOrderItem/AdminOrderItem'
const AdminOrdersMangementPage = () => {
  const [ordersData,paginate,resuts,loading,onPress] = GetAllUserOrdersHook()
  return (
    <Container className='admin-orders-mangement page'>
    <Row className='admin-page-row'>
        <Col xs="12" md="3">
            <AdminSidebar ordersMangement={"active-admin-page"}/>
        </Col>
        <Col xs="12" md="9">
        <h4 className='custom-title'>Results {resuts}</h4>
        {
          loading===false?
          <div className='admin-all-orders'>
            {
              ordersData?
              ordersData.map((item,index)=>{
                return(
                  <AdminOrderItem item={item} key={index}/>
                )
              })
              :<NotFoundData/>
            }
          </div>
          :<SpinnerComponent/>
        }
        </Col>
    </Row>
    <Row>
      {
        paginate.numberOfPages>1?
        <Pagenation onPress={onPress} pageCount={paginate.numberOfPages} />
        :null
      }
    </Row>
</Container>
  )
}

export default AdminOrdersMangementPage