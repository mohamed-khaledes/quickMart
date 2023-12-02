import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from '../../../Components/User/UserSidebar/UserSidebar'
import UserOrderItem from '../../../Components/User/UserOrderItem/UserOrderItem'
import GetAllUserOrdersHook from '../../../CustomHooks/OrderHooks/GetAllUserOrdersHook'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import NotFoundData from '../../../Components/Utility/NotFoundData/NotFoundData'
import Pagenation from '../../../Components/Utility/Pagenation/Pagenation'
const UserAllOrdersPage = () => {
  const [ordersData,paginate,resuts,loading,onPress] = GetAllUserOrdersHook()
  return (
    <Container className='user-add-brand-page page'>
    <Row className='user-page-row'>
        <Col xs="12" md="3">
            <UserSidebar ordersMangement={"active-user-page"}/>
        </Col>
        <Col xs="12" md="9">
        <div className='title'>
        <h3 className='custom-title'>Results {resuts}</h3>
        </div>
        {
          loading===false?
          <div className='user-all-orders'>
            {
              ordersData?
              ordersData.map((item,index)=>{
                return(
                  <UserOrderItem item={item} key={index}/>
                )
              })
              :<NotFoundData />
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

export default UserAllOrdersPage