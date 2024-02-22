import React from 'react'
import './DiscountSection.css'
const DiscountSection = ({banner}) => {
  return (
    <section className='discount-section my-3'>
        <img loading='lazy' src={banner} alt='banner-img'/>
    </section>
  )
}
export default DiscountSection
