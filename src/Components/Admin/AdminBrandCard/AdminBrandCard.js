import React from 'react'
import './AdminBrandCard.css'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal } from 'react-bootstrap'
import DeleteBrandHook from '../../../CustomHooks/Admin/Brand/DeleteBrandHook'
const AdminBrandCard = ({id,img,title}) => {
   const  [show,handleClose,handleShow,handleDelete] = DeleteBrandHook(id)
  return (
    <div className='admin-brand-card mb-3'>
      <Link to={`/product/brand/${id}`}>
    <div className='brand-img'>
      <img loading="lazy" src={img} alt={title}></img>
    </div>
      </Link>
      <div className='btn-box' onClick={handleShow}>
        <ButtonComponent btnIcon={<FontAwesomeIcon icon={faTrash}/>}/>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo,are you sure to delete this brand</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancle
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default AdminBrandCard
