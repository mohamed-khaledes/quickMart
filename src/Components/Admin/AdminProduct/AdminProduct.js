import React,{useState} from 'react'
import { Button, Card, Col, Modal } from 'react-bootstrap'
import {FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import './AdminProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../Redux/actions/productAction'
const AdminProduct = ({item}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async()=>{
    await dispatch(deleteProduct(item._id))
    setShow(false)
    window.location.reload()
  }
  return (
    <Col className='admin-product my-3 p-0' id={item._id} xs="6" sm="6" lg="4">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo,are you sure to delete this product</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancle
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    <Card>
      <div className='card-img-wrapper'>
      <Link to={`/productDetailsPage/${item._id}`}>
      <Card.Img className='card-img' variant="top" src={item.imageCover} />
      </Link>
      <span className='quantity'>{item.quantity} product left</span>
      <span className='best-seller'>Best seller</span>
      </div>
      <Card.Body className='card-body'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <div>
          <div className='pricing-rating-parent'>
            <div className='pricing'>
              <p className='m-0 pricing-child'>
              <span className='currency'>Egp</span>
              {
                  item.priceAfterDiscount>=1?
                  <>
                  <span className='price-after-discount'>{item.priceAfterDiscount}</span>
                  <span className='price'><del>{item.price}</del></span>
                  </>
                  :
                  <span className='price'>{item.price}</span>
                }
              </p>
            </div>
            <div className='rating'>
              <span>{item.ratingsQuantity}</span>
              <span><FaStar /></span>
            </div>
          </div>
          <div className='remove-modify-parent'>
            <div className='btn-content'>
              <Link to={`/admin/adminUpdateProductPage/${item._id}`}>
              <ButtonComponent btnIcon={<FontAwesomeIcon icon={faPenToSquare}/>}/>
              </Link>
            </div>
            <div className='btn-content' onClick={handleShow}>
              <ButtonComponent btnIcon={<FontAwesomeIcon icon={faTrash}/>}/>
            </div>
          </div>
          </div>
      </Card.Body>
    </Card>
   </Col>
  )
}

export default AdminProduct