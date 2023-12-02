import React from 'react'
import './BrandCard.css'
import { Link } from 'react-router-dom'
const BrandCard = ({id,img,title}) => {
  return (
    <div className='brand-card mb-3'>
      <Link to={`/product/brand/${id}`}>
    <div className='brand-img'>
      <img loading="lazy" src={img} alt={title}></img>
    </div>
      </Link>
    </div>
  )
}
export default BrandCard
