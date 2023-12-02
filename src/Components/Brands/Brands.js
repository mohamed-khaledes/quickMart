import React from 'react'
import './Brands.css'
import { Col, Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard/BrandCard'
import Subtitle from '../Utility/Subtitle/Subtitle'
// import required modules
import CustomCarousel from '../Utility/CustomCarousel/CustomCarousel'
import HomeBrandHook from '../../CustomHooks/Brand/HomeBrandHook'
import SpinnerComponent from '../Utility/SpinnerComponent/SpinnerComponent'
import NotFoundData from '../../Components/Utility/NotFoundData/NotFoundData'
const Brands = () => {
  const [data,loading]  = HomeBrandHook()
  return (
    <Container className='brands my-3 p-3 position-relative'>
        <Subtitle title={"brands"} btntitle={"more"} pathValue="/brandsPage"/>
        <Row>
        {
          loading === false ?(
                data?
                data.data?(
                  <Col className='data-content' xs="12">
                    <CustomCarousel show={8}>
                    {
                      data.data?(data.data.map((item,index)=>{
                        return(
                    <BrandCard id={item._id} key={index} title={item.name} img={item.image}/>
                        )
                      })
                      ):<NotFoundData />
                    
                  }
                  </CustomCarousel>
                  </Col>
                ):<NotFoundData />
                :<NotFoundData />
                ):<SpinnerComponent />
              }
        </Row>

    </Container>
  )
}
export default Brands
