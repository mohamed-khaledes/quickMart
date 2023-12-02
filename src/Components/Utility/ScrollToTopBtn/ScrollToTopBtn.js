import React,{useState,useEffect} from 'react'
import './ScrollToTopBtn.css'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'
const ScrollToTopBtn = () => {
  const [scroll,setScroll] = useState(0)
  let location = useLocation()
  // when the location change
  useEffect(()=>{
    window.scrollTo({top:0,left:0,behavior:"instant"})
  },[location])
  // on the window scroll
  window.addEventListener("scroll",()=>{
    setScroll(Math.floor(window.scrollY))
  })
  // on click scroll to top
    const scrollToTop = ()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
  return (
    <div className='scroll-to-top'>
      {scroll > 1000 ? <button onClick={scrollToTop} className='btn transition'>
            <FontAwesomeIcon icon={faArrowUp}/>
        </button>: null}
        
    </div>
  )
}

export default ScrollToTopBtn