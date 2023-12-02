import React from 'react'
import './ProductsCard.css'
import { Card} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProductCardHook from '../../../CustomHooks/Product/ProductCardHook'
const ProductsCard = ({item,favProduct}) => {
  const [imgFav,handleFav] = ProductCardHook(item,favProduct)
  return (
   <div key={item._id} className='product-card p-0'>
    <Card>
      <div className='card-img-wrapper'>
      <Link to={`/productDetailsPage/${item._id}`}>
      <Card.Img className='card-img' variant="top" src={item.imageCover} />
      </Link>
      <span className='quantity'>{item.quantity} product left</span>
      <span className='best-seller'>Best seller</span>
      </div>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <div className='text-wrapper'>
            <div className='favorite' >
               <img loading="lazy" src={imgFav} alt="fav-state" onClick={handleFav}/>
            </div>
          <div className='pricing-rating-parent'>
            <div className='pricing'>
              <p className='pricing-child'>
                <span className='currency'>Egp</span>
                {
                  item.priceAfterDiscount>=1?
                  <>
                  <span className='price-after-discount'>{item.priceAfterDiscount}</span>
                  <span className='price'><del>{item.price}</del></span>
                  </>
                  :
                  <span className='price'>{item.price}</span>
                }
              </p>
            </div>
            <div className='rating'>
              <span>{item.ratingsAverage || 0}</span>
              <span><FaStar /></span>
            </div>
          </div>
          </div>
          <div className='badg'>Express</div>
      </Card.Body>
    </Card>
   </div>
  )
}
export default ProductsCard
