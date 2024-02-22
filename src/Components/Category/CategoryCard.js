import React from 'react'
import { Col } from 'react-bootstrap'
import './CategoryCard.css'
import { Link } from 'react-router-dom'
const CategoryCard = ({title,img,id}) => {

  return (
    <Col xs="6" sm="6" md="4" lg="3">
    <div className='category-card'>
      <Link to={`/product/category/${id}`} aria-label='go to products by category'>
        <div className='category-card-img'>
            <img loading="lazy" src={img} alt="category-img"></img>
        </div>
      </Link>
        <p className='category-card-title'>{title}</p>
    </div>
    </Col>
  )
}
export default CategoryCard