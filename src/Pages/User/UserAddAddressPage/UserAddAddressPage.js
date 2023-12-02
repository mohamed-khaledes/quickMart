import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from '../../../Components/User/UserSidebar/UserSidebar'
import UserAddAddressHook from '../../../CustomHooks/User/Addresses/UserAddAddressHook'
import ButtonComponent from '../../../Components/Utility/ButtonComponent/ButtonComponent'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import { ToastContainer } from 'react-toastify'
const UserAddAddressPage = () => {
      const [alias,onChangeAlias,details,onChangeDetails,phone,onChangePhone,city,onChangeCity,
        postalCode,onChangePostalCode,addLoading,isPress,onAddAddress] = UserAddAddressHook()
  return (
    <Container className='user-add-address-page page'>
    <Row className='user-page-row'>
        <Col xs="12" md="3">
            <UserSidebar personalAddresses={"active-user-page"}/>
        </Col>
        <Col xs="12" md="9">
            <div className='address-details'>
            <h4 className='custom-title'>Add address details</h4>
                    <div className='form-data'>
                    <input value={alias} onChange={onChangeAlias}  className='custom-input' type='text' placeholder='Add address'/>
                    <textarea value={details} onChange={onChangeDetails}  style={{height:"150px"}} className='custom-input' placeholder='Address details'></textarea>
                    <input value={phone} onChange={onChangePhone}  className='custom-input' type='text' placeholder='phone' />
                    <input value={city} onChange={onChangeCity}  className='custom-input' type='text' placeholder='city' />
                    <input value={postalCode} onChange={onChangePostalCode}  className='custom-input' type='text' placeholder='postal Code' />
                    <div className='btn-box' onClick={onAddAddress}>
                    <ButtonComponent btnValue={"save"}/>
                    </div>
                    </div>
            </div>
        </Col>
    </Row>
    {
        addLoading===true?isPress===true?<SpinnerComponent />:null:null
    }
    <ToastContainer />
</Container>
  )
}

export default UserAddAddressPage