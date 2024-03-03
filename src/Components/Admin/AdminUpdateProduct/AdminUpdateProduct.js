import React from 'react'
import './AdminUpdateProduct.css'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import Multiselect from 'multiselect-react-dropdown';
import MultiImageInput from 'react-multiple-image-input';
import { ToastContainer } from 'react-toastify';
// react color
import {CompactPicker} from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//product hook
import UpdateProductHook from '../../../CustomHooks/Admin/Products/UpdateProductHook';
const AdminUpdateProduct = ({id}) => {
  const [images,setImages,
    prodDes,setProdDes,
    prodName,setProdName,
    priceBefore,setPriceBefore,
    priceAfter,setPriceAfter,
    qty,setQty,handleSubmit,
  onSelectCategory,category,catId,
  onSelectBrand,brands,brandId,colors,removeColor,
  showColor,setShowColor,handleChangeComplete,
  options,onSelect,onRemove]
  =UpdateProductHook(id)
  
  return (
    <div className='admin-update-product'>
      <h4 className='custom-title'>update product</h4>
 <MultiImageInput
      images={images}
      setImages={setImages}
      theme={"light"}
      max={5}
      allowCrop={false}
    />
        <form action=''>
        <input
        value={prodName}
        onChange={(e)=>setProdName(e.target.value)}
        className='custom-input'
        placeholder='product name'
        />
        <textarea 
        value={prodDes}
        onChange={(e)=>setProdDes(e.target.value)}
        className='custom-input custom-input-textarea'
        placeholder='product description'
        />
        <input
        value={priceBefore}
        onChange={(e)=>setPriceBefore(e.target.value)}
        className='custom-input' 
        placeholder='price'
        type='number'
        />
        <input 
        value={priceAfter}
        onChange={(e)=>setPriceAfter(e.target.value)}
        className='custom-input'
        placeholder='price after discount'
        type='number'
        />
        <input
        value={qty}
        onChange={(e)=>setQty(e.target.value)} 
        className='custom-input' 
        placeholder='Available Quantity'
        />
        <select
        value={catId}
        onChange={onSelectCategory} 
        className='custom-input' 
        name='main-category'
        >
          <option value={"0"}>select category</option>
          {
            category?(
              category?.data?.map((item)=>{
                return(
                  <option key={item._id} value={item._id}>{item.name}</option>
                )
              })
            ):null
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
            brands?(
              brands?.data?.map((item)=>{
                return(
                  <option key={item._id} value={item._id}>{item.name}</option>
                )
              })
            ):null
          }
        </select>
        </form>
        <div className='colors-section'>
            <h4>Available colors</h4>
            <div className='admin-update-product-colors'>
                {
                    colors.length > 0?(  colors.map((item,index)=>{
                      return(
                        <div onClick={()=>removeColor(item)} key={index} className='color'style={{backgroundColor:`${item}`}}></div>
                      )
                    })):null
                }
                <div className='color add-custom-color' onClick={()=>setShowColor(!showColor)}>
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
        <ToastContainer />
    </div>
  )
}

export default AdminUpdateProduct