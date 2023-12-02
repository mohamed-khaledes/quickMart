import React from 'react'
import noData from '../../../imgs/noData.png'
import './NotFoundData.css'
const NotFoundData = () => {
  return (
    <div className='not-found'>
                <h4 className='not-found-title'>not found data</h4>
                <img  src={noData} alt='no-data' className='no-data-img'/>
            </div>
  )
}

export default NotFoundData