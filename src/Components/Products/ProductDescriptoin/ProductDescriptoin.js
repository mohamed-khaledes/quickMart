import React from 'react'
import './ProductDescriptoin.css'
import { Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import { useParams } from 'react-router-dom'
import VeiwProductDetailsHook from '../../../CustomHooks/Product/VeiwProductDetailsHook'
import SpinnerComponent from '../../Utility/SpinnerComponent/SpinnerComponent'
import NotFoundData from '../../Utility/NotFoundData/NotFoundData'
import AddProductToCartHook from '../../../CustomHooks/Cart/AddProductToCartHook'
const ProductDescriptoin = () => {
    const {id} = useParams()
    const[item,loading,cat,brand,,catLoading,brLoading]= VeiwProductDetailsHook(id)
    const [onClickColor,onAddProductToCart,colorIndex,cartAddingLoading,isPress] = AddProductToCartHook(id,item)
    
  return (
    <div className='product-description position-relative"'>
        {
            loading===false&&catLoading===false&&brLoading===false?
            item? 
            <Row>
            <div className='product-rate'>
                <h2>{cat.name}</h2>
                <p>{item.title}</p>
                <div className='rate-value'>
                    <p>{item.ratingsQuantity}<span><FaStar /></span></p>
                    <p>{item.ratingsQuantity} Ratings</p>
                </div>
            </div>
            <div className='product-price fw-bold font-size-18'>
                <span className='currency'>Egp</span>
                {
                    item.priceAfterDiscount>=1?
                    <>
                    <span className='price-after-discount'>{item.priceAfterDiscount}</span>
                    <span className='price'><del>{item.price}</del></span>
                    </>
                    :
                    <span className='price'>{item.price}</span>
                }
            </div>
            <div className='product-quantity'>
                {item.quantity} products left
            </div>
            <div className='product-overview'>
            <p>{item.description}</p>
            </div>
            <div className='product-color'>
                <p>Brand: <span>{brand.name}</span></p>
                <div className='colors d-flex'>
                    {
                        item.availableColors?
                        item.availableColors.map((color,index)=>
                        <div key={index} onClick={()=>onClickColor(index,color)} style={{backgroundColor:`${color}`,opacity:colorIndex===index?0.3:1}}></div>
                        )
                        : null
                    }
                </div>
            </div>
            <div className='add-to-cart-btn' onClick={onAddProductToCart}>
                <ButtonComponent btnValue={"Add to cart"}/>
            </div>
            </Row>
            :<NotFoundData />
            :<SpinnerComponent />
        }
        {cartAddingLoading===true?isPress===true?<SpinnerComponent/>:null:null}
    </div>
  )
}

export default ProductDescriptoin