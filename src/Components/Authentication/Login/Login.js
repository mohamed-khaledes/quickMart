import React, { useState } from 'react'
import '../Auth.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faEye,faEyeSlash} from '@fortawesome/free-regular-svg-icons'
import { faLock, faXmark } from '@fortawesome/free-solid-svg-icons'
import ButtonComponent from '../../Utility/ButtonComponent/ButtonComponent'
import LoginHook from '../../../CustomHooks/Auth/LoginHook'
import SpinnerComponent from '../../../Components/Utility/SpinnerComponent/SpinnerComponent'
import { ToastContainer } from 'react-toastify'
const Login = ({handleClick}) => {
  //start login operations
  const [loading,email,password,onChangeEmail,onChangePassword,onSubmit,isPress]= LoginHook()
    const [showpass,setShowpass] = useState("password")
    const [eyeIcon,setEyeIcon] = useState(faEyeSlash)
    const showpassFn = ()=>{
      if(showpass === "password"&& eyeIcon === faEyeSlash){
          setShowpass("text")
          setEyeIcon(faEye)
      }else{
          setShowpass("password")
          setEyeIcon(faEyeSlash)
      }
  }
  return (
    <div className='sign-up-wrapper'>
        <div className='sign-up-popup'>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title title" id="exampleModalLongTitle">
                  login
                </h5>
                <p className="font-size-14">Hello! Welcome back</p>
              </div>
              <button onClick={handleClick}
                type="button"
                className="custom-icon"
                data-dismiss="modal"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faXmark}/>
              </button>
            </div>
            <div className="modal-body">
              <div className="contact-form-action">
                <form method="post">
                  <div className="input-box">
                    <label className="label-text">Email</label>
                    <div className="form-group">
                      <span className='input-icon'><FontAwesomeIcon icon={faEnvelope}/></span>
                      <input
                      value={email}
                      onChange={onChangeEmail}
                        className="custom-input"
                        type="text"
                        name="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <label className="label-text">Password</label>
                    <div className="form-group">
                      <span className="input-icon"><FontAwesomeIcon icon={faLock}/></span>
                      <span onClick={showpassFn} className="show-password"><FontAwesomeIcon icon={eyeIcon}/></span>
                      <input
                      value={password}
                      onChange={onChangePassword}
                        className="custom-input"
                        type={showpass}
                        name="text"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="btn-box w-100 pt-3 pb-4" onClick={onSubmit}>
                    <ButtonComponent btnValue={"login"}/>
                  </div>
                  <a href={"/forgetPassowedPage"}>Forget Password?</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPress===true?loading===true?<SpinnerComponent/>:null:null}
      <ToastContainer />
        </div>
  )
}

export default Login