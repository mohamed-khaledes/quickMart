import React from 'react'
import ReactStars from "react-rating-stars-component";
import AddRateHook from '../../CustomHooks/Reviews/AddRateHook';
import ButtonComponent from '../Utility/ButtonComponent/ButtonComponent';

const PostRate = () => {
  const [rateStar,rateText,onChangeRateStar,
    onChangeRateText,handelSubmit,user,loading]=AddRateHook()

      let name="";
      if(user){
        name=user.name
      }
  // const rateSetting = {
  //   size:20,
  //   count:5,
  //   color: "goldenrod",
  //   activeColor: "gold",
  //   value: 7.5,
  //   a11y: true,
  //   isHalf: true,
  //   emptyIcon: <i className="far fa-star" />,
  //   halfIcon: <i className="fa fa-star-half-alt" />,
  //   filledIcon: <i className="fa fa-star" />,
  //   onChange: newValue => {
  //     console.log(`Example 2: new value is ${newValue}`);
  //   }

  // };
  
  return (
    <div className='post-rate my-3'>
      <div className='user-rate'>
      <h5 className='mx-2'>{name}</h5>
      <div className="star-rating">
      <input type="radio" name="stars" id="star-a" value="5" onChange={onChangeRateStar}/>
      <label htmlFor="star-a"></label>

      <input type="radio" name="stars" id="star-b" value="4" onChange={onChangeRateStar}/>
      <label htmlFor="star-b"></label>
  
      <input type="radio" name="stars" id="star-c" value="3" onChange={onChangeRateStar}/>
      <label htmlFor="star-c"></label>
  
      <input type="radio" name="stars" id="star-d" value="2" onChange={onChangeRateStar}/>
      <label htmlFor="star-d"></label>
  
      <input type="radio" name="stars" id="star-e" value="1" onChange={onChangeRateStar}/>
      <label htmlFor="star-e"></label>
      </div>
      </div>
      <div className='add-comment'>
          <textarea
          placeholder='Add a comment..'
          value={rateText}
          onChange={onChangeRateText}
          ></textarea>
          <div className='btn-box' onClick={handelSubmit}>
            <ButtonComponent btnValue={"Add"}/>
          </div>
      </div>
    </div>
  )
}

export default PostRate