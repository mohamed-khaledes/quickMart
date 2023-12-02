import React from 'react'
import { Col } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import ButtonComponent from '../Utility/ButtonComponent/ButtonComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import DeleteReviewHook from '../../CustomHooks/Reviews/DeleteReviewHook'
import UpdateReviewHook from '../../CustomHooks/Reviews/UpdateReviewHook'
const UsersRateItem = ({item}) => {
  const [isUser,showDelete,handleDelete,handleClose,handleShow] = DeleteReviewHook()
  const [showUpdate,handleUpdate,handleCloseUpdate,handleShowUpdate,onChangeRating,onChangeReview,review,rating]=UpdateReviewHook(item)
  return (
    <Col xs="12" className='user-rate-item' id={item._id}>
       <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are sure to delete your review!</Modal.Body>
        <Modal.Footer>
          <div className='btn-box' onClick={()=>handleDelete(item._id)}>
            <ButtonComponent btnValue={"Delete"}/>
          </div>
          <div className='btn-box' onClick={handleClose}>
            <ButtonComponent btnValue={"cancel"}/>
          </div>
        </Modal.Footer>
      </Modal>
       <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <label>Your rate {rating}<FontAwesomeIcon icon={faStar}/> </label>
      <div className="star-rating">
      <input type="radio" name="stars_update" id="star-a_2" value="5" onChange={onChangeRating}/>
      <label htmlFor="star-a_2"></label>
      <input type="radio" name="stars_update" id="star-b_2" value="4" onChange={onChangeRating}/>
      <label htmlFor="star-b_2"></label>
      <input type="radio" name="stars_update" id="star-c_2" value="3" onChange={onChangeRating}/>
      <label htmlFor="star-c_2"></label>
      <input type="radio" name="stars_update" id="star-d_2" value="2" onChange={onChangeRating}/>
      <label htmlFor="star-d_2"></label>
      <input type="radio" name="stars_update" id="star-e_2" value="1" onChange={onChangeRating}/>
      <label htmlFor="star-e_2"></label>
      </div>
          <label>Review</label>
          <input className='custom-input' type='text' value={review} onChange={onChangeReview}/>
        </Modal.Body>
        <Modal.Footer>
          <div className='btn-box' onClick={()=>handleUpdate(item._id)}>
            <ButtonComponent btnValue={"Update"}/>
          </div>
          <div className='btn-box' onClick={handleCloseUpdate}>
            <ButtonComponent btnValue={"cancel"}/>
          </div>
        </Modal.Footer>
      </Modal>
        <div className='user-rate-content'>
          <div className='rate-head'>
                  <h5>{item.user.name}</h5>
                  <div className='rate-head-rate'>
                  <span>{item.rating}</span>
                  <span className='star-icon'><FaStar /></span>
                  </div>
              </div>
              <div className='review d-block'>
                <p>{item.review}</p>
              </div>
        </div>
        {
          item?
          item.user?
          item.user._id && item.user._id === isUser._id?
          <div className='user-rate-control'>
          <div className='btn-box' onClick={handleShow}>
            <ButtonComponent btnIcon={<FontAwesomeIcon icon={faTrash}/>}/>
          </div>
          <div className='btn-box' onClick={handleShowUpdate}>
            <ButtonComponent btnIcon={<FontAwesomeIcon icon={faPen}/>}/>
          </div>
        </div>
          :null
          :null
          :null
        }
       
    </Col>
  )
}

export default UsersRateItem