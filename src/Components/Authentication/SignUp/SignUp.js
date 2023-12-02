import React, { useState } from "react";
import "../Auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faLock, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "../../Utility/ButtonComponent/ButtonComponent";
import SignUpHook from "../../../CustomHooks/Auth/SignUpHook";
import SpinnerComponent from "../../Utility/SpinnerComponent/SpinnerComponent";
const SignUp = ({ handleClick }) => {
  const [showpass, setShowpass] = useState("password");
  const [eyeIcon, setEyeIcon] = useState(faEyeSlash);
  const showpassFn = () => {
    if (showpass === "password" && eyeIcon === faEyeSlash) {
      setShowpass("text");
      setEyeIcon(faEye);
    } else {
      setShowpass("password");
      setEyeIcon(faEyeSlash);
    }
  };
  const [
    name,
    email,
    phone,
    password,
    confirmPass,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPass,
    onSubmit,loading,isPress
  ] = SignUpHook();
  return (
    <div className="sign-up-wrapper">
      <div className="sign-up-popup">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title title" id="exampleModalLongTitle">
                  Sign Up
                </h5>
                <p className="font-size-14">
                  Hello! Welcome Create a New Account
                </p>
              </div>
              <button
                onClick={handleClick}
                type="button"
                className="custom-icon"
                data-dismiss="modal"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="modal-body">
              <div className="contact-form-action">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                    <div className="input-box">
                    <label className="label-text">Name</label>
                    <div className="form-group">
                      <span className="input-icon">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input
                      value={name}
                      onChange={onChangeName}
                        className="custom-input"
                        type="text"
                        name="name"
                        placeholder="username"
                      />
                    </div>
                  </div>
                  </div>
                    <div className="col-lg-6">
                    <div className="input-box">
                    <label className="label-text">Email</label>
                    <div className="form-group">
                      <span className="input-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <input
                      value={email}
                      onChange={onChangeEmail}
                        className="custom-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">Phone</label>
                    <div className="form-group">
                      <span className="input-icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <input
                      value={phone}
                      onChange={onChangePhone}
                        className="custom-input"
                        type="text"
                        name="phone"
                        placeholder="phone"
                      />
                    </div>
                  </div>
                  </div>
                  <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Password</label>
                    <div className="form-group">
                      <span className="input-icon">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                      <span onClick={showpassFn} className="show-password">
                        <FontAwesomeIcon icon={eyeIcon} />
                      </span>
                      <input
                      value={password}
                      onChange={onChangePassword}
                        className="custom-input"
                        type={showpass}
                        name="password"
                        placeholder="password"
                      />
                    </div>
                  </div>
                  </div>
                  <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">confirm Password</label>
                    <div className="form-group">
                      <span className="input-icon">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                      <span onClick={showpassFn} className="show-password">
                        <FontAwesomeIcon icon={eyeIcon} />
                      </span>
                      <input
                      value={confirmPass}
                      onChange={onChangeConfirmPass}
                        className="custom-input"
                        type={showpass}
                        name="confirm passworkd"
                        placeholder="confirm password"
                      />
                    </div>
                  </div>
                  </div>
                  <div className="col-lg-12">
                  <div className="btn-box w-100 pt-3 pb-4" onClick={onSubmit}>
                    <ButtonComponent btnValue={"sign up"} />
                  </div>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPress===true?loading===true?<SpinnerComponent/>:null:null}
    </div>
  );
};

export default SignUp;
