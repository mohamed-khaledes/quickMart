import React from 'react'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import './AdminAddSubCategory.css'
import SubCategoryHook from '../../../CustomHooks/SubCategory/SubCategoryHook'
import SpinnerComponent from '../../Utility/SpinnerComponent/SpinnerComponent'
const AdminAddSubCategory = () => {

  const [name,hadleChange,handleSubmit,onChangeName,loading,getLoading,isPress,categories,id] =SubCategoryHook()
  return (
    <div className='admin-add-subcategory position-relative'>
      <h4 className='custom-title'>add subcategory</h4>
        <input
        className='custom-input'
        type={"text"}
        placeholder="SubCategory name"
        value={name}
        onChange={onChangeName}
        />
        <select name='category' value={id} id='category' className='custom-input' onChange={hadleChange}>
            <option value="0">Choose Category</option>
            {
              getLoading === false ?(
                categories?.map((item)=>{
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
            {loading === true && isPress === true?<SpinnerComponent/>:null}
    </div>
  )
}

export default AdminAddSubCategory