import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import SpinnerComponent from "../../Components/Utility/SpinnerComponent/SpinnerComponent"
import Pagenation from '../Utility/Pagenation/Pagenation'
import AllCategoryPageHook from '../../CustomHooks/Category/AllCategoryPageHook'
import NotFoundData from '../../Components/Utility/NotFoundData/NotFoundData'
const AllCategoryContainer = () => {
  const [loading,category,pageCount,getPage] = AllCategoryPageHook(12)
  return (
    <Container className='position-relative'>
        <Row className='all-categories-content min-vh-100'>
          {loading === false?(
            category?(
              category.map((item,index) =>{
                return(<CategoryCard id={item._id} key={index} img={item.image} title={item.name}/>)
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
  )
}

export default AllCategoryContainer