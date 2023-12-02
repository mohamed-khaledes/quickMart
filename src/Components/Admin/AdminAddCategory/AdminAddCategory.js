import React from 'react'
import './AdminAddCategory.css'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import AddCategoryHook from '../../../CustomHooks/Category/AddCategoryHook'
const AdminAddCategory = () => {
  const [img,onImageChange,inputValue,onChangeInputValue,handelSubmit,ispress,loading] = AddCategoryHook()
  return (
    <div className='admin-add-category'>
      <h4 className='custom-title'>add category</h4>
        <div className='upload-photo-parent'>
          <label htmlFor="upload-photo">
          <img src={img} alt='uploud-img'></img>
          </label>
          <input
          type='file'
          name='photo'
          onChange={onImageChange}
          id='upload-photo'
          ></input>
        </div>
        <input className='custom-input' value={inputValue} onChange={onChangeInputValue} type={"text"} placeholder="Category name"/>
        <div onClick={handelSubmit} className='btn-content'>
        <ButtonComponent btnValue={"save"}/>
        </div>
        {ispress===true?loading===true?<SpinnerComponent />:null:null}
    </div>
  )
}

export default AdminAddCategory