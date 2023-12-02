import React from 'react'
import './BuyMoreSaveMore.css'
import {Col, Row} from 'react-bootstrap'
import img1 from '../../../imgs/whyBuy01.png'
import img2 from '../../../imgs/whyBuy02.png'
import img3 from '../../../imgs/whyBuy03.png'
import img4 from '../../../imgs/whyBuy04.png'
import microwave from '../../../imgs/microwave.jpg'
const BuyMoreSaveMore = () => {
  return (
    <section className='buy-more-save-more-section'>
        <Row className='mh-100'>
        <Col sm="12" md="6" lg="4" className='first-col'>
            <div className='items-wrapper'>
                <div className='item'>
                    <img src={img1} alt='img'/>
                </div>
                <div className='item'>
                    <img src={img2} alt='img'/>
                </div>
                <div className='item'>
                    <img src={img3} alt='img'/>
                </div>
                <div className='item'>
                    <img src={img4} alt='img'/>
                </div>
            </div>
        </Col>
        <Col sm="12" md="6" lg="4" className='second-col'>
        <div className='items-wrapper'>
                <div className='item'>
                    <img src={img3} alt='img'/>
                </div>
                <div className='item'>
                    <img src={img2} alt='img'/>
                </div>
                <div className='item'>
                    <img src={img1} alt='img'/>
                </div>
                <div className='item'>
                    <img src={img4} alt='img'/>
                </div>
        </div>
        </Col>
        <Col sm="12" md="6" lg="4" className='third-col'>
        <div>
                <div className='item'>
                    <img className='mw-100 mh-100 w-100' src={microwave} alt='img'/>
                </div>
                <div className='item'>
                    <img className='mw-100 mh-100 w-100' src={microwave} alt='img'/>
                </div>
        </div>
        </Col>
        </Row>
    </section>
  )
}

export default BuyMoreSaveMore