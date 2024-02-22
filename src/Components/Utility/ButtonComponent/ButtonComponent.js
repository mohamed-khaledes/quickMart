import React from 'react'
import './ButtonComponent.css'
const ButtonComponent = ({btnValue,btnIcon}) => {
  return (
    <button className='btn-component' aria-label='button'>
        <span>{btnValue}{btnIcon}</span>
    </button>
  )
}

export default ButtonComponent