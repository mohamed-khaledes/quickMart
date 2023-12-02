import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from '../../../Components/User/UserSidebar/UserSidebar'
import UserUpdateAddressHook from '../../../CustomHooks/User/Addresses/UserUpdateAddressHook'
import ButtonComponent from '../../../Components/Utility/ButtonComponent/ButtonComponent'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import { useParams } from 'react-router-dom'
const UserEditAddressPage = () => {
      const {id}= useParams()
      const [alias,onChangeAlias,details,onChangeDetails,phone,onChangePhone,city,onChangeCity,
        postalCode,onChangePostalCode,updateLoading,isPress,onUpdateAddress] =UserUpdateAddressHook(id)
  return (
    <Container className='user-edit-address-page page'>
    <Row className='user-page-row'>
        <Col xs="12" md="3">
            <UserSidebar personalAddresses={"active-user-page"}/>
        </Col>
        <Col xs="12" md="9">
        <div className='address-details'>
        <h4 className='custom-title'>Update address details</h4>
                    <div className='form-data'>
                    <input value={alias} onChange={onChangeAlias}  className='custom-input' type='text' placeholder='Add address'/>
                    <textarea value={details} onChange={onChangeDetails}  style={{height:"150px"}} className='custom-input' placeholder='Address details'></textarea>
                    <input value={phone} onChange={onChangePhone}  className='custom-input' type='text' placeholder='phone' />
                    <input value={city} onChange={onChangeCity}  className='custom-input' type='text' placeholder='city' />
                    <input value={postalCode} onChange={onChangePostalCode}  className='custom-input' type='text' placeholder='postal Code' />
                    <div className='btn-box' onClick={onUpdateAddress}>
                    <ButtonComponent btnValue={"update"}/>
                    </div>
                    </div>
            </div>
        </Col>
    </Row>
    {
        isPress===true?updateLoading===true?<SpinnerComponent />:null:null
    }
</Container>
  )
}

export default UserEditAddressPage