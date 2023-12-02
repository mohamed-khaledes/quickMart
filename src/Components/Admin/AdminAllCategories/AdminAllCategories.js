import React from 'react'
import Subtitle from '../../Utility/Subtitle/Subtitle'
import { Container, Row } from 'react-bootstrap'
import NotFoundData from '../../Utility/NotFoundData/NotFoundData'
import SpinnerComponent from '../../Utility/SpinnerComponent/SpinnerComponent'
import Pagenation from '../../Utility/Pagenation/Pagenation'
import AllCategoryPageHook from '../../../CustomHooks/Category/AllCategoryPageHook'
import AdminCategoryCard from '../AdminCategoryCard/AdminCategoryCard'

const AdminAllCategories = () => {
    const [loading,category,pageCount,getPage] = AllCategoryPageHook(12)
  return (
    <div className='admin-all-categories'>
    <Subtitle title={"All Categories"} />
    <Container className='position-relative'>
        <Row className='all-categores-content'>
          {loading === false?(
            category?(
              category.map((item,index) =>{
                return(<AdminCategoryCard id={item._id} key={index} img={item.image} title={item.name}/>)
              })
            ):<NotFoundData />
          ):<SpinnerComponent />}
        </Row>
        {
        category?(
          <Row>
          {
            pageCount > 1?(
              <Pagenation
          pageCount={pageCount}
          onPress={getPage}
          />
            ):null
          }
        </Row>
        ):null
      }
    </Container>
    </div>
  )
}

export default AdminAllCategories