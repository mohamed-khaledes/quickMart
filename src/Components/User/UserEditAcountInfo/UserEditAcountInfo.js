import React from 'react'
import UserUpdateDataHook from '../../../CustomHooks/User/UserData/UserUpdateDataHook'
import ButtonComponent from '../../../Components/Utility/ButtonComponent/ButtonComponent'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
const UserEditAcountInfo = () => {
  const [name,onChangeName,phone,onChangePhone,email,onChangeEmail,onUpdateData,loading,isPress] = UserUpdateDataHook()
  return (
    <div className='user-edit-acount-info'>
           <div className='form-data'>
           <input className='custom-input' type='text'  placeholder="Enter your name"
            value={name}
            onChange={onChangeName}
            />
            <input className='custom-input' type='text'  placeholder="Enter your number"
            value={phone}
            onChange={onChangePhone}
            />
            <input className='custom-input' type="email"  placeholder="Enter your email" 
            value={email}
            onChange={onChangeEmail}
            />
            <div className='btn-box' onClick={onUpdateData}>
              <ButtonComponent btnValue={"save"}/>
            </div>
           </div>
           {
            isPress===true?loading===true?<SpinnerComponent />:null:null
           }
    </div>
  )
}

export default UserEditAcountInfo