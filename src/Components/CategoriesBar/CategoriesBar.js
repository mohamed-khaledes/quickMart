import React from 'react'
import './CategoriesBar.css'
import { Nav } from 'react-bootstrap'
import CustomCarousel from '../Utility/CustomCarousel/CustomCarousel';
import AllCategoryPageHook from '../../CustomHooks/Category/AllCategoryPageHook';
import {Link} from 'react-router-dom'
const CategoriesBar = () => {
  const [loading,category] = AllCategoryPageHook(10)
  return (
    <div className='categoriesBar d-none d-md-block'>
     <div className='categories-bar-content d-flex align-items-center'>
      <Nav className='categories-bar-nav-1'>
      <p className='m-0 w-100'>categories</p>
        {/* <ul className='categories-bar-dropdown transition'>
        {
          loading===false?
          category?
          category.map((item,index)=>{
            return <li className='categories-bar-item' key={index}>
              <Link to={`/product/category/${item._id}`}>{item.name}</Link>
            </li>
          })
          :null
          :null
        }
        </ul> */}
      </Nav>
      <Nav className='categories-bar-nav-2'>
      <CustomCarousel show={10}>
        {
          loading===false?
          category?
          category.map((item,index)=>{
            return <div className='categories-bar-item' key={index}>
              <Link to={`/product/category/${item._id}`}>{item.name}</Link>
            </div>
          })
          :null
          :null
        }
      </CustomCarousel>
      </Nav>
     </div>
    </div>
  )
}
export default CategoriesBar
