import React from 'react'
import './AdminSidebar.css'
import { Link } from 'react-router-dom'
const AdminSidebar = ({productsMangement,ordersMangement,addBrand,addCategory,addSub,addProduct,addCoupon,allBrands,allCategories}) => {
  return (
    <div className='admin-sidebar'>
        <h3 className='admin-sidebar-title'>Admin dashboard</h3>
        <ul className='text-start'>
            <Link to={"/admin/adminOrdersMangementPage"}><li className={ordersMangement}>orders Mangement</li></Link>
            <Link to={"/admin/adminProductsMangementPage"}><li className={productsMangement}>products Mangement</li></Link>
            <Link to={"/admin/adminAddProductPage"}><li className={addProduct}>add product</li></Link>
            <Link to={"/admin/adminAddBrandPage"}><li className={addBrand}>add brand</li></Link>
            <Link to={"/admin/adminAllBrandsPage"}><li className={allBrands}>all brands</li></Link>
            <Link to={"/admin/adminAddCategoryPage"}><li className={addCategory}>add category</li></Link>
            <Link to={"/admin/adminAllCategoriesPage"}><li className={allCategories}>all category</li></Link>
            <Link to={"/admin/adminAddSubCategoryPage"}><li className={addSub}>add subCategory</li></Link>
            <Link to={"/admin/adminAddCouponPage"}><li className={addCoupon}>add coupon</li></Link>
        </ul>
    </div>
  )
}

export default AdminSidebar