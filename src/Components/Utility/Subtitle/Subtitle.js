import React from 'react'
import { Link } from 'react-router-dom';
import './Subtitle.css'
const Subtitle = ({title,btntitle,pathValue}) => {
  return (
    <div className='subtitle'>
        <div className='title'>
            <h3>{title}</h3>
        </div>
        {btntitle? (
        <Link to={`${pathValue}`} style={{textDecoration:"none"}}>
        <div className='btn-title'>
            <button>{btntitle}</button>
        </div>
        </Link>
        ): null}
    </div>
  )
}
export default Subtitle;
