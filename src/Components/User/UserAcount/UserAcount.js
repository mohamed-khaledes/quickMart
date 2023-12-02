import React from 'react'
import './UserAcount.css'
import { Col, Row } from 'react-bootstrap'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom'
import UpdateUserPassHook from '../../../CustomHooks/User/UserPassword/UpdateUserPassHook'
import SpinnerComponent from '../../Utility/SpinnerComponent/SpinnerComponent'
import { ToastContainer } from 'react-toastify'
import UserUpdateDataHook from '../../../CustomHooks/User/UserData/UserUpdateDataHook'
const UserAcount = () => {
    const [currentPass,onChangeCurrentPass,password,onChangePassword,
        confirmPassword,onChangeConfirmPass,loading,isPress,onUpdatePass] = UpdateUserPassHook()
        /*=================================================================================== */
        const [name,,phone,,email,,,,,resLoading] = UserUpdateDataHook()
  return (
    <div className='user-acount'>
        <h2 className='custom-title profile-title'>Profile</h2>
        <div className='user-acount-card'>
            <Row>
                {
                    resLoading===false?
                    <Col sm="10">
                    <p><span>name: </span>{name}</p>
                    <p><span>phone: </span>{phone}</p>
                    <p><span>email: </span>{email}</p>
                    </Col>
                    :<SpinnerComponent />
                }
                <Col sm="2">
                    <Link to={"/user/userEditAcountInfoPage"}>
                    <ButtonComponent btnValue={"Edit"}/>
                    </Link>
                </Col>
            </Row>
        </div>
        <div className='change-password'>
            <h3 className='custom-title'>change password</h3>
            <div className='form-inputs'>
            <input className='custom-input' type="password" placeholder='current password'
            value={currentPass}
            onChange={onChangeCurrentPass}
            />
                <input className='custom-input' type="password" placeholder='new password'
                value={password}
                onChange={onChangePassword}
                />
                <input className='custom-input' type="password" placeholder='confirm password'
                value={confirmPassword}
                onChange={onChangeConfirmPass}
                />
               <div className='btn-box' onClick={onUpdatePass}>
                <ButtonComponent btnValue={"save"}/>
               </div>
            </div>
            {
                isPress===true?loading===true?<SpinnerComponent/>:null:null
            }
        </div>
        <ToastContainer />
    </div>
  )
}

export default UserAcount