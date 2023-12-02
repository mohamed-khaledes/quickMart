import React from 'react'
import './CategoryBarContent.css'
import img from '../../../imgs/brand.jpg'
import { Col, Row } from 'react-bootstrap'
const CategoriesBarItemContent = () => {
  return (
    <div className='categories-bar-item-content'>
     <div className='categories-bar-item-content-child-parent'>
      <Row className='w-100 gap-0'>
        <Col sm="4" md="4" xl="2">
        <div className='left-section text-left'>
         <ul className='list-unstyled m-0 p-0 text-left'>
            <h5 className='mb-4'>CATEGORIES</h5>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           <li>
            <a href='#'>TVs, Satellites Satellites</a>
           </li>
           
         </ul>
       </div>
        </Col>
        <Col sm="8" md="8" lg="8" xl="5">
        <div className='center-section'>
          <h5>Top Brands</h5>
         <Row>
          <Col sm='4' p-0>
          <img src={img} alt="pic"></img>
          </Col>
          <Col sm='4' p-0>
          <img src={img} alt="pic"></img>
          </Col>
          <Col sm='4' p-0>
          <img src={img} alt="pic"></img>
          </Col>
         </Row>
         <Row>
          <Col sm='4' p-0>
          <img src={img} alt="pic"></img>
          </Col>
          <Col sm='4' p-0>
          <img src={img} alt="pic"></img>
          </Col>
          <Col sm='4' p-0>
          <img src={img} alt="pic"></img>
          </Col>
         </Row>
         <Row>
          <Col sm='4' p-0>
          <img src={img} alt="pic"></img>
          </Col>
          <Col sm='4' p-0>
          <img src={img} alt="pic"></img>
          </Col>
          <Col sm='4' p-0>
          <img src={img} alt="pic"></img>
          </Col>
         </Row>
       </div>
        </Col>
        <Col sm="12" md="12" lg="12" xl="5">
       <div className='right-section'>
        <Row>
          <Col sm="6">
       <img src={img} alt="pic"></img>
          </Col>
          <Col sm="6">
       <img src={img} alt="pic"></img>
          </Col>
        </Row>
       </div>
        </Col>
      </Row>
     </div>
    </div>
  )
}
export default CategoriesBarItemContent
