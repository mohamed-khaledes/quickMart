import React from 'react'
import './DiscountSection.css'
const DiscountSection = ({banner}) => {
  return (
    <section className='discount-section my-3'>
        <img src={banner} alt='banner-img'/>
    </section>
  )
}
export default DiscountSection
