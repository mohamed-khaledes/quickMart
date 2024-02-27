import React from 'react'
import './ProductDetailsPage.css'
import {Container } from 'react-bootstrap'
import ProductDetails from '../../../Components/Products/ProductDetails/ProductDetails'
import RateContainer from '../../../Components/Rate/RateContainer'
import { useParams } from 'react-router-dom'
import VeiwProductDetailsHook from '../../../CustomHooks/Product/VeiwProductDetailsHook'
import DiscountSection from '../../../Components/Home/DiscountSection/DiscountSection'
import banner from '../../../imgs/banner07.jpg'
import SimilarProductsContainer from '../../../Components/Products/SimilarProductsContainer/SimilarProductsContainer'
const ProductDetailsPage = () => {
  const {id} = useParams()
  const [item,,,,similarItems]= VeiwProductDetailsHook(id)
  let similar =[];
  if(similarItems){
    similar = similarItems.slice(0,5)
  }
  let ratingQty="";
  let ratingAvg="";
  if(item){
    ratingAvg = item.quantity;
    ratingQty =item.ratingsQuantity
  }else{
    ratingAvg=""
    ratingQty=""
  }
  return (
    <div className='page product-details-page position-relative'>
        <Container>
            <ProductDetails/>
            <RateContainer ratingAvg={ratingAvg} ratingQty={ratingQty}/>
            <DiscountSection banner={banner}/>
            <SimilarProductsContainer products={similar} title={"products you may like"}/>
        </Container>
    </div>
  )
}

export default ProductDetailsPage