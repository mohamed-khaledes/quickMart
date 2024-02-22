import React from 'react'
import './ProductDetails.css'
import { Col, Row } from 'react-bootstrap'
import ProductDescriptoin from '../ProductDescriptoin/ProductDescriptoin'
import ProductGallary from '../ProductGallary/ProductGallary'
const ProductDetails = () => {
  return (
    <Row className='product-details'>
        <Col lg="4" className='product-gallary-col'>
        <ProductGallary/>
        </Col>
        <Col lg="8">
          <ProductDescriptoin/>
        </Col>
    </Row>
  )
}

export default ProductDetails