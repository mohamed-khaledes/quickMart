import React from 'react'
import { Link } from 'react-router-dom';
import './Subtitle.css'
const Subtitle = ({title,btntitle,pathValue}) => {
  return (
    <div className='subtitle'>
        <div className='title'>
            <h3>{title}</h3>
        </div>
        <Link to={pathValue || "/"} aria-label="more">
        <div className='btn-title'>
            <button aria-label='more'>more</button>
        </div>
        </Link>
    </div>
  )
}
export default Subtitle;
