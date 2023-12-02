import React from 'react'
import './Slider.css'
import { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap';
import img01 from '../../../imgs/banner01.jpg'
import img02 from '../../../imgs/banner02.jpg'
import img03 from '../../../imgs/banner03.jpg'
import img04 from '../../../imgs/banner04.png'
import img05 from '../../../imgs/banner05.jpg'
import img06 from '../../../imgs/banner06.jpg'
import img07 from '../../../imgs/banner07.jpg'
import img08 from '../../../imgs/banner08.jpg'
import img09 from '../../../imgs/banner09.png'


const Slider = () => {
  const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
  return (
  <Container className='p-0 bg-white'>
  <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100 h-100"
        src={img01}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100 h-100"
        src={img02}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100 h-100"
        src={img03}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100 h-100"
        src={img04}
        alt="Fourth slide"
      />
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100 h-100"
        src={img05}
        alt="fifth slide"
      />
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100 h-100"
        src={img06}
        alt="sixth slide"
      />
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100 h-100"
        src={img07}
        alt="seventh slide"
      />
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100 h-100"
        src={img08}
        alt="eightth slide"
      />
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100 h-100"
        src={img09}
        alt="nineth slide"
      />
    </Carousel.Item>
  </Carousel>
    </Container>
  )
}
export default Slider