import React,{useState,useEffect} from 'react'
import './CustomCarousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const CustomCarousel = (props) => {
    const {children,show} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState()
    const [responsive_show,set_responsive_show]=useState(show)
    //# Handle Swipe Event on React Carousel
    //state to store touch position
    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(()=>{
        try{
            setLength(children.length)
        }catch(e){
            setLength(1)
        }
    },[children])
    /*Next we will add a function to handle when the control button is clicked.*/
    const next = () => {
        if (currentIndex < (length - responsive_show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }
    // function to hadle store touch position on touch start
    const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
    }
    //  function to hadle store touch position on touch move
    const handleTouchMove = (e) => {
    const touchDown = touchPosition
    if(touchDown === null) {
        return
    }
    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch
    if (diff > 5) {
        next()
    }
    if (diff < -5) {
        prev()
    }
    setTouchPosition(null)
    }
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            if(show===5){
                if(window.innerWidth > 992){
                    set_responsive_show(5)
                }else if(window.innerWidth > 767 && window.innerWidth < 992){
                    set_responsive_show(4)
                }else if(window.innerWidth < 767){
                    set_responsive_show(2)
                }else{
                    set_responsive_show(show)
                }
            }else if(show===8){
                if(window.innerWidth>992){
                    set_responsive_show(8)
                }else if(window.innerWidth<992 && window.innerWidth>576){
                set_responsive_show(6)
               }else if(window.innerWidth<576){
                set_responsive_show(5)
               }else{
                set_responsive_show(show)
               }
            }else if(show===10){
                if(window.innerWidth > 1650){
                    set_responsive_show(10)
                }else if(window.innerWidth < 1650 && window.innerWidth > 1200){
                    set_responsive_show(8)
                }else if(window.innerWidth < 1200 && window.innerWidth > 992){
                    set_responsive_show(6)
                }else if(window.innerWidth < 992 && window.innerWidth > 767){
                    set_responsive_show(4)
                }else{
                    set_responsive_show(show)
                   }
            }
        })
    },[show,responsive_show])
    useEffect(()=>{
        if(show===5){
            if(window.innerWidth > 992){
                set_responsive_show(5)
            }else if(window.innerWidth > 767 && window.innerWidth < 992){
                set_responsive_show(4)
            }else if(window.innerWidth < 767){
                set_responsive_show(2)
            }else{
                set_responsive_show(show)
            }
        }else if(show===8){
            if(window.innerWidth>992){
                set_responsive_show(8)
            }else if(window.innerWidth<992 && window.innerWidth>576){
            set_responsive_show(6)
           }else if(window.innerWidth<576){
            set_responsive_show(5)
           }else{
            set_responsive_show(show)
           }
        }else if(show===10){
            if(window.innerWidth > 1650){
                set_responsive_show(10)
            }else if(window.innerWidth < 1650 && window.innerWidth > 1200){
                set_responsive_show(8)
            }else if(window.innerWidth < 1200 && window.innerWidth > 992){
                set_responsive_show(6)
            }else if(window.innerWidth < 992 && window.innerWidth > 767){
                set_responsive_show(4)
            }else{
                set_responsive_show(show)
               }
        }
    },[])
  return (
    <div className='carousel-container'>
        <div className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        >
        {currentIndex > 0 && 
        <button aria-label='left arrow to slide' onClick={prev} className="left-arrow">
        <FontAwesomeIcon icon={faArrowLeft}/>
        </button>
        }
        <div className="carousel-content-wrapper">
                    <div className={`carousel-content show-${responsive_show}`} 
                     style={{transform:`translateX(-${currentIndex * (100 / responsive_show)}%)`,}}>
                        {children}
                    </div>
        </div>
            {
            currentIndex < (length - responsive_show) &&
            <button aria-label='right arrow to slide' onClick={next} className="right-arrow">
           <FontAwesomeIcon icon={faArrowRight}/>
            </button>
            }
            </div>
    </div>
  )
}

export default CustomCarousel