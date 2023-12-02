import React from 'react'
import './ProductsContainer.css'
import { Col, Container, Row } from 'react-bootstrap'
import ProductsCard from '../ProductsCard/ProductsCard'
import Subtitle from '../../Utility/Subtitle/Subtitle'
import ProductsContainerHook from '../../../CustomHooks/Product/ProductsContainerHook'
const ProductsContainer = ({title,btntitle,pathValue,products}) => {
  const [wishlist] = ProductsContainerHook()
  return (
    <Container className='products-container my-5'>
      <Subtitle title={title}/>
        <Row>
          {products?
          products.map((item,index)=>
          <Col key={index} xs="6" sm="6" md="4" lg="3" className='p-1 m-0'>
            <ProductsCard favProduct={wishlist} item={item}/>
          </Col>
          ) 
          :null}
        </Row>
    </Container>
  )
}

export default ProductsContainer