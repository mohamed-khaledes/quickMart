import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import landImg from "../../../imgs/land-img.png";
import ButtonComponent from "../../Utility/ButtonComponent/ButtonComponent";
const Landing = () => {
  const navigate = useNavigate()
  return (
    <div className="landing d-flex justify-content-start align-items-center gap-2">
      <div className="left-side h-100 d-flex justify-content-center align-items-center">
        <div className="content">
        <h1 className="text-color text-start text-capitalize">Fall winter collection <span>2024</span></h1>
        <p className="text-start">
          A specialist label creating luxury essentials. Ethically crafted with
          an unwavering commitment to exceptional quality.
        </p>
        <div className="btns p-4 d-flex justify-content-start align-items-center flex-nowrap gap-2">
          <div className="btn-box" onClick={()=>navigate('/shopProductsPage')}>
          <ButtonComponent btnValue={"Shop now"} />
          </div>
          <div className="btn-box"  onClick={()=>navigate('/shopProductsPage')}>
          <ButtonComponent btnValue={"Explore"} />
          </div>
        </div>
        </div>
      </div>
      <div className="right-side h-100 d-none d-lg-block">
        <img className="w-100 h-100" alt="land-img" src={landImg} loading="lazy" />
      </div>
    </div>
  );
};

export default Landing;
