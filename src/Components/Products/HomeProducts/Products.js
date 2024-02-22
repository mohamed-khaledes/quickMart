import React from 'react'
import './Products.css'
import { Container, Row } from 'react-bootstrap'
import ProductsCard from '../ProductsCard/ProductsCard';
import Subtitle from '../../Utility/Subtitle/Subtitle';
import CustomCarousel from '../../Utility/CustomCarousel/CustomCarousel';
import ProductsContainerHook from '../../../CustomHooks/Product/ProductsContainerHook';
import SpinnerComponent from '../../Utility/SpinnerComponent/SpinnerComponent';

const Products = ({title,items,loading}) => {
  const [wishlist] = ProductsContainerHook()
  return (
    <Container className='products-section'>
        <Subtitle title={title}  pathValue="/shopProductsPage"/>
      <Row>
      <div className='custom-carousel-parent'>
      <CustomCarousel show={5}>
      {loading===false?
          items? items.map((item,index)=>{return(
            <ProductsCard favProduct={wishlist}  key={index} item={item}/>
          )})
          :null
          :<SpinnerComponent />
        }
      </CustomCarousel>
      </div>
        </Row>
    </Container>
  )
}
export default Products