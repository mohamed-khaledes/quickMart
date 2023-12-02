import React from 'react'
import './ShopProductsPage.css'
import { Col, Container, Row } from 'react-bootstrap'
import ProductsPageHeader from '../../../Components/Products/ProductsPageHeader/ProductsPageHeader'
import Pagenation from '../../../Components/Utility/Pagenation/Pagenation'
import FilterSide from '../../../Components/Utility/FilterSide/FilterSide'
import ProductsContainer from '../../../Components/Products/ProductsContainer/ProductsContainer'
import VeiwSearchProductsHook from '../../../CustomHooks/Product/VeiwSearchProductsHook'
const ShopProductsPage = () => {
  const [items,pageCount,onPress,getAllProductsFn,results] = VeiwSearchProductsHook()
  return (
    <div className='page shop-products-page'>
        <Container>
            <Row>
                <Col md="3" className='d-none d-md-block' >
                <FilterSide/>
                </Col>
                <Col xs="12" md="9">
                <ProductsPageHeader handleOptionClick={getAllProductsFn} resultsCount={results}/>
                <ProductsContainer products={items}/>
                {
            pageCount>1?<Pagenation pageCount={pageCount} onPress={onPress}/>:null
                }
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ShopProductsPage