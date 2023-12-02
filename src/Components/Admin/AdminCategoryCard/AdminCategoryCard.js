import React from 'react'
import './AdminCategoryCard.css'
import { Button, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import DeleteCategoryHook from '../../../CustomHooks/Admin/Category/DeleteCategoryHook'
const AdminCategoryCard = ({title,img,id}) => {
    const [show,handleClose,handleShow,handleDelete] = DeleteCategoryHook(id)
    return (
    <Col xs="6" sm="6" md="4" lg="3" className='admin-category-card'>
    <div className='category-card'>
      <Link to={`/product/category/${id}`}>
        <div className='category-card-img'>
            <img loading="lazy" src={img} alt="category-img"></img>
        </div>
      </Link>
        <p className='category-card-title'>{title}</p>
    </div>
    <div className='btn-box' onClick={handleShow}>
        <ButtonComponent btnIcon={<FontAwesomeIcon icon={faTrash}/>}/>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete category</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo,are you sure to delete this category</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancle
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  )
}
export default AdminCategoryCard