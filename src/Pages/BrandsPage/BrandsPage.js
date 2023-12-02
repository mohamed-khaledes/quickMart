import React from 'react'
import './BrandsPage.css'
import { Col, Container, Row } from 'react-bootstrap'
import BrandCard from '../../Components/Brands/BrandCard/BrandCard'
import Pagenation from '../../Components/Utility/Pagenation/Pagenation'
import Subtitle from '../../Components/Utility/Subtitle/Subtitle'
import SpinnerComponent from '../../Components/Utility/SpinnerComponent/SpinnerComponent'
import AllBrandsPageHook from '../../CustomHooks/Brand/AllBrandsPageHook'
import NotFoundData from '../../Components/Utility/NotFoundData/NotFoundData'
const BrandsPage = () => {
  const [loading,brand,pageCount,getPage] = AllBrandsPageHook()
  return (
    <div className='page brands-page container'>
        <Subtitle title="all brands"/>
        <Container>
        <Row className='all-brands-content'>
          {loading === false?(
            brand?
            brand.data?
              brand.data.map((item,index) =>{
                return(
                  <Col key={index} lg="3" md="4" xs="6">
                <BrandCard id={item._id} img={item.image} title={item.name}/>
                  </Col>
                )
              })
            :<NotFoundData/>
            :null
          ):<SpinnerComponent />}
        </Row>
        {brand?
        brand.data?(
          <Row>
          {
            pageCount > 1?(
              <Pagenation
          pageCount={pageCount}
          onPress={getPage}
          />
            ):null
          }
        </Row>
        )
        :<NotFoundData/>
        :null
      }
        </Container>
    </div>
  )
}

export default BrandsPage