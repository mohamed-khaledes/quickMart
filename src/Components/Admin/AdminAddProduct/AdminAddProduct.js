import React from 'react'
import './AdminAddProduct.css'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import Multiselect from 'multiselect-react-dropdown';
import MultiImageInput from 'react-multiple-image-input';
// react color
import {CompactPicker} from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//product hook
import AddProductHook from '../../../CustomHooks/Admin/Products/AddProductHook';
const AdminAddProduct = () => {
  const  [images,setImages,
    prodDes,onChangeProdDes,
    prodName,onChangeProdName,
    price,onChangePrice,
    priceAfterDiscount,onChangePriceAfter,
    qty,onChangeQty,handleSubmit,
  onSelectCategory,category,
  onSelectBrand,brands,brandId,,
  colors,removeColor,
  showColor,onChangeColor,handleChangeComplete,
  options,onSelect,onRemove]
  =AddProductHook()
  
  return (
    <div className='admin-add-product'>
      <h4 className='custom-title'>Add product</h4>
 <MultiImageInput
      images={images}
      // setImages={setImages}
      theme={"light"}
      max={5}
      allowCrop={false}
    />
        <form action=''>
        <input
        value={prodName}
        onChange={onChangeProdName}
        className='custom-input'
        placeholder='product name'
        />
        <textarea 
        value={prodDes}
        onChange={onChangeProdDes}
        className='custom-input custom-input-textarea'
        placeholder='product description'
        />
        <input
        value={price}
        onChange={onChangePrice}
        className='custom-input' 
        placeholder='price'
        type='number'
        step={5}
        />
        <input 
        value={priceAfterDiscount}
        onChange={onChangePriceAfter}
        className='custom-input'
        placeholder='price after discount'
        type='number'
        step={5}
        />
        <input
        value={qty}
        onChange={onChangeQty} 
        className='custom-input' 
        placeholder='product Quantity'
        />
        <select
        // value={catId}
        onChange={onSelectCategory} 
        className='custom-input' 
        name='main-category'
        >
          <option value={"0"}>choose category</option>
          {
            category?
              category?.data?.map((item)=>{
                return(
                  <option key={item._id} value={item._id}>{item.name}</option>
                )
              })
            :null
          }
        </select>
        <Multiselect
        name="subcategory"
        className='multi-select-subcategory'
        placeholder='Subcategory'
        options={options} 
        onSelect={onSelect} 
        onRemove={onRemove}
        displayValue="name" 
      />
      <select
      value={brandId}
      onChange={onSelectBrand}
      className='custom-input' 
      name='brands'>
          <option value={"0"}>select brand</option>
          {
            brands?
              brands?.data?.map((item)=>{
                return(
                  <option key={item._id} value={item._id}>{item.name}</option>
                )
              })
            :null
          }
        </select>
        </form>
        <div className='colors-section'>
            <h4>Available colors</h4>
            <div className='admin-add-product-colors'>
                {
                    colors.length > 0?(  colors.map((item,index)=>{
                      return(
                        <div onClick={()=>removeColor(item)} key={index} className='color'style={{backgroundColor:`${item}`}}></div>
                      )
                    })):null
                }
                <div className='color add-custom-color' onClick={onChangeColor}>
                  <FontAwesomeIcon icon={faPlus}/>
                </div>
                {
                  showColor === true?(
                    <CompactPicker onChangeComplete={handleChangeComplete}/>
                  ):null
                }
            </div>
        </div>
        <div className='btn-content' onClick={(e)=>handleSubmit(e)}>
          <ButtonComponent btnValue={'save'}/>
        </div>
    </div>
  )
}

export default AdminAddProduct