import React from 'react'
import './HomeCategory.css'
import { Container, Row } from 'react-bootstrap';
import CategoryCard from '../../Category/CategoryCard';
import Subtitle from '../../Utility/Subtitle/Subtitle';
import SpinnerComponent from '../../Utility/SpinnerComponent/SpinnerComponent';
import CustomCarousel from '../../Utility/CustomCarousel/CustomCarousel';
import HomeCategoryHook from '../../../CustomHooks/Category/HomeCategoryHook';
import NotFoundData from '../../../Components/Utility/NotFoundData/NotFoundData'
const HomeCategory = () => {
  const [loading,items] = HomeCategoryHook()
  return (
    <Container  className='home-category position-relative my-3 py-2'>
            <Subtitle title="Categories"  pathValue={'/allCategoryPage'}></Subtitle>
            <Row>
              <div className='data-content'>
              {
                loading === false ?(
                    <CustomCarousel show={8}>
                    {
                      items?(items.map((item,index)=>{
                        return(
                    <CategoryCard key={index} id={item._id} title={item.name} img={item.image}/>
                        )
                      })
                      ):<NotFoundData />
                    
                  }
                  </CustomCarousel>
                ):<SpinnerComponent />
              }
              </div>
            </Row>
</Container>
  )
}
export default HomeCategory;
