import React from 'react'
import { Row } from 'react-bootstrap'
import Pagenation from '../../Utility/Pagenation/Pagenation'
import AdminProduct from '../AdminProduct/AdminProduct'
import './AdminAllProducts.css'
import SpinnerComponent from '../../Utility/SpinnerComponent/SpinnerComponent'
import GetAllProductsHook from '../../../CustomHooks/Admin/Products/GetAllProductsHook'
import NotFoundData from '../../Utility/NotFoundData/NotFoundData'
const AdminAllProducts = () => {
  const [items,loading,pageCount,onPress] = GetAllProductsHook()
  return (
    <div className='admin-allproducts'>
        <Row>
          {
            loading === false?(
              items?(
                items.map((item,index)=> <AdminProduct key={index} item={item}/>)
              ):<NotFoundData />
            )
            :<SpinnerComponent />
          }
        </Row>
        {
          pageCount>1?<Pagenation pageCount={pageCount} onPress={onPress}/>:null
        }
    </div>
  )
}

export default AdminAllProducts