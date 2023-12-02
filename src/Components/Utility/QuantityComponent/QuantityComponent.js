import React from 'react'
import './QuantityComponent.css'
import { useState } from 'react'
const QuantityComponent = () => {
    const [quantity,SetQuantity] = useState(0)
    const quantityControl = (action)=>{
        if(action === "increase"){
            SetQuantity(quantity + 1)
        }else if(action === "decrease" && quantity !== 0){
            SetQuantity(quantity - 1)
        }else{
            quantity()
        }
    }
  return (
    <div className='quantity'>
        {/* <label>Quantity</label> */}
        <button onClick={()=>quantityControl("increase")} className='increase'>+</button>
        <span>{quantity}</span>
        <button onClick={()=>quantityControl("decrease")} className='decrease'>-</button>
    </div>
  )
}

export default QuantityComponent