import React,{useState} from 'react';
import './ProductGallary.css'
import { useParams } from 'react-router-dom';
import VeiwProductDetailsHook from '../../../CustomHooks/Product/VeiwProductDetailsHook';
import SpinnerComponent from '../../Utility/SpinnerComponent/SpinnerComponent'
import NotFoundData from '../../Utility/NotFoundData/NotFoundData'
const ProductGallary = () => {
  const {id} = useParams()
  const [item,loading] = VeiwProductDetailsHook(id)
  const [active, setActive] = useState(0);
  let images = []
  try{if(item){images=item.images}else{images=[]}}catch(e){}
  return (
    <div className='product-gallary'>
    <div className="slider">
        {
          loading===false?
          item?
          <>
          <div className="slides">
        {images.map((e, i) => (
          <div className={`slide ${i===active ? "active" : ""}`} key={i}>
          <img loading='lazy' src={e} alt={"product-img"} />
        </div>
        ))}
          </div>
          <div className="navigation">
        <div className="navigation-bottom">
          {images.map((e, i) => (
            <div className={`preview ${i === active ? "active" : ""}`}
            key={i}
            onClick={() => setActive(i)}
            style={{ width: `${100 / images.length}%` }}
            >
              <img src={e} loading='lazy' alt={"product-img"} />
            </div>
          ))}
        </div>
          </div>
          </>
          :<NotFoundData/>
          :<SpinnerComponent/>
        }
    </div>
    </div>
  );
}
export default ProductGallary




/*
# Responsive slide show gallary 
=> https://learnersbucket.com/examples/interview/create-responsive-slideshow-gallery-in-reactjs/

 const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };
  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };
*/