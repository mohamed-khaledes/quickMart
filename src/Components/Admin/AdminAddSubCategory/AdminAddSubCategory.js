import React from 'react'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import './AdminAddSubCategory.css'
import { ToastContainer } from 'react-toastify'
import SubCategoryHook from '../../../CustomHooks/SubCategory/SubCategoryHook'
const AdminAddSubCategory = () => {

  const [name,hadleChange,handleSubmit,onChangeName,categoryLoading,category] =SubCategoryHook()

  return (
    <div className='admin-add-subcategory'>
      <h4 className='custom-title'>add subcategory</h4>
        <input
        className='custom-input'
        type={"text"}
        placeholder="SubCategory name"
        value={name}
        onChange={onChangeName}
        />
        <select name='category' id='cat' className='custom-input' onChange={hadleChange}>
            <option value={"0"}>Choose Category</option>
            {
              categoryLoading === false ?(
                category?.data?.map((item)=>{
                  return(
                    <option key={item._id}  value={item._id}>{item.name}</option>
                  )
                })
  
              ):null
            }
        </select>
        <div className='btn-box' onClick={(e)=>handleSubmit(e)}>
          <ButtonComponent btnValue={"save"}/>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AdminAddSubCategory