import React,{useState} from 'react'
import './UserPersonalAddressCard.css'
import { Col, Modal, Row } from 'react-bootstrap'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import UserDeleteAddressHook from '../../../CustomHooks/User/Addresses/UserDeleteAddressHook'
import SpinnerComponent from '../../Utility/SpinnerComponent/SpinnerComponent'

const UserPersonalAddressCard = ({alias,city,details,phone,postalCode,id}) => {
    const [onDeleteAddress, loading,isPress] = UserDeleteAddressHook()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='user-personal-address-card'>
            <Row>
                <Col sm="8">
                    <h4 className='address-card-title'>{alias}</h4>
                    <p>{details}</p>
                    <p><span className='user-personal-address-card-phone'>city:</span>{city}</p>
                    <p><span className='user-personal-address-card-phone'>phone:</span>{phone}</p>
                    <p><span className='user-personal-address-card-phone'>postalCode:</span>{postalCode}</p>
                </Col>
                <Col sm="4">
                    <div className='d-flex'>
                        <div className='btn-box' onClick={handleShow}>
                        <ButtonComponent btnIcon={<FontAwesomeIcon icon={faTrash}/>} />
                        </div>
                        <Link to={`/user/userEditAddressPage/${id}`}>
                        <ButtonComponent btnIcon={<FontAwesomeIcon icon={faPen}/>}/>
                        </Link>
                    </div>
                </Col>
            </Row>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo,are you sure to delete this address</Modal.Body>
        <Modal.Footer>
            <div className='btn-box' onClick={handleClose}>
                <ButtonComponent btnValue={"cancel"}/>
            </div>
            <div className='btn-box' onClick={()=>onDeleteAddress(id)}>
                <ButtonComponent btnValue={"Delete"}/>
            </div>
        </Modal.Footer>
      </Modal>
      {
        isPress===true?loading===true?<SpinnerComponent />:null:null
      }
        </div>
  )
}

export default UserPersonalAddressCard