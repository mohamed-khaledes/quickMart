import React from 'react'
import './SimilarProductsContainer.css'
import {Container } from 'react-bootstrap'
import ProductsCard from '../ProductsCard/ProductsCard'
import Subtitle from '../../Utility/Subtitle/Subtitle'
import ProductsContainerHook from '../../../CustomHooks/Product/ProductsContainerHook'
const SimilarProductsContainer = ({title,btntitle,pathValue,products}) => {
  const [wishlist] = ProductsContainerHook()
  return (
    <Container className='products-container my-5'>
      <Subtitle title={title}/>
        <div className='products-wrapper'>
          {products?
          products.map((item,index)=>
          <div key={index} className='p-1 m-0 product-wrapper'>
            <ProductsCard favProduct={wishlist} item={item}/>
          </div>
          ) 
          :null}
        </div>
    </Container>
  )
}

export default SimilarProductsContainer