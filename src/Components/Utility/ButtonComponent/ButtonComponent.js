import React from 'react'
import './ButtonComponent.css'
const ButtonComponent = ({btnValue,btnIcon}) => {
  return (
    <button className='btn-component'>
        <span>{btnValue}{btnIcon}</span>
    </button>
  )
}

export default ButtonComponent