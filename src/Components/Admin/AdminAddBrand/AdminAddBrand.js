import React from "react";
import "./AdminAddBrand.css";
import SpinnerComponent from "../../../Components/Utility/SpinnerComponent/SpinnerComponent";
import ButtonComponent from "../../Utility/ButtonComponent/ButtonComponent";
import AddBrandHook from "../../../CustomHooks/Brand/AddBrandHook";
const AdminAddBrand = () => {
  const [
    img,
    onImageChange,
    inputValue,
    onChangeInputValue,
    handelSubmit,
    ispress,
    loading,
  ] = AddBrandHook();
  return (
    <div className="admin-add-brand">
      <h4 className="custom-title">add brand</h4>
      <div className="upload-photo-parent">
        <label htmlFor="upload-photo">
          <img src={img} alt="uploud-img"></img>
        </label>
        <input
          type="file"
          name="photo"
          onChange={onImageChange}
          id="upload-photo"
        ></input>
      </div>
      <input
        className="custom-input"
        value={inputValue}
        onChange={onChangeInputValue}
        type={"text"}
        placeholder="Brand name"
      />
      <div onClick={(e) => handelSubmit(e)} className="btn-content">
        <ButtonComponent btnValue={"save"} />
      </div>
      {ispress === true ? loading === true ? <SpinnerComponent /> : null : null}
    </div>
  );
};

export default AdminAddBrand;
