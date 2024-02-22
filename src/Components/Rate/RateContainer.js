import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './RateContainer.css'
import { FaStar } from 'react-icons/fa'
import PostRate from './PostRate'
import Pagenation from '../Utility/Pagenation/Pagenation'
import UsersRateItem from './UsersRateItem'
import GetAllReviewsHook from '../../CustomHooks/Reviews/GetAllReviewsHook'
import { useParams } from 'react-router-dom'
const RateContainer = ({ratingAvg,ratingQty}) => {
    const id = useParams()
    let ID = id.id
    const [reviews,loading,onPress] = GetAllReviewsHook(ID)
  return (
    <Container className='rate-container'>
        <Row>
            <div className='rate-head'>
                <h2>Rates</h2>
                <div className='rate-head-rate'>
                <span>{ratingAvg}</span>
                <span className='star-icon'><FaStar /></span>
                </div>
                <p className='p-0 m-0'>({`${ratingQty} Rates`})</p>
            </div>
        </Row>
        <Row>
            <PostRate />
        </Row>
        <Row className='users-rate-items m-3 gap-3'>
            {loading===false?
                reviews?
                reviews.data?
                reviews.data.map((item,index)=>
                <UsersRateItem item={item} key={index}/>
                )
                :<Col><p>No reviews yet</p></Col>
                :<Col><p>No reviews yet</p></Col>
                :null
            }
        </Row>
        <Row>
        {
            reviews && reviews.paginationResult && reviews.paginationResult.numberOfPages>=2?
            <Pagenation pageCount={reviews.paginationResult.numberOfPages} onPress={onPress}/>
            :null
        }
        </Row>
    </Container>
  )
}

export default RateContainer