import React from "react";
import "./FilterSide.css";
import FilterSideSearchHook from "../../../CustomHooks/Search/FilterSideSearchHook";
import SpinnerComponent from "../../Utility/SpinnerComponent/SpinnerComponent";
const FilterSide = () => {
  let localFrom = "",
    localTo = "";
  if (localStorage.getItem("priceFrom") != null) {
    localFrom = localStorage.getItem("priceFrom");
  }
  if (localStorage.getItem("priceTo") != null) {
    localTo = localStorage.getItem("priceTo");
  }
  const [
    allCategories,
    loadingCategories,
    allBrands,
    loadingBrands,
    onCheckedCategory,
    onCheckedBrand,
    priceFrom,
    priceTo,
  ] = FilterSideSearchHook();
  return (
    <div className="filtring">
      <h2>Filtring</h2>
      <div>
        <div className="category-filter">
          <h3>Categories</h3>
          <ul>
            <li>
              <input
                type="checkbox"
                id="all-categories"
                value={"0"}
                onChange={onCheckedCategory}
              />
              <label htmlFor="all-categories">All</label>
            </li>
            {loadingCategories === false ? (
              allCategories ? (
                allCategories.map((item, index) => (
                  <li key={index}>
                    <input
                      onChange={onCheckedCategory}
                      id={item._id}
                      value={item._id}
                      type={"checkbox"}
                    ></input>
                    <label htmlFor={item._id}>{item.name}</label>
                  </li>
                ))
              ) : (
                <p>not found categories</p>
              )
            ) : (
              <SpinnerComponent />
            )}
          </ul>
        </div>
        <div className="brand-filter">
          <h3>Brands</h3>
          <ul>
            <li>
              <input
                type="checkbox"
                id="all-brands"
                value={"0"}
                onChange={onCheckedBrand}
              />
              <label htmlFor="all-brands">All</label>
            </li>
            {loadingBrands === false ? (
              allBrands ? (
                allBrands.map((item, index) => (
                  <li key={index}>
                    <input
                      onChange={onCheckedBrand}
                      id={item._id}
                      value={item._id}
                      type={"checkbox"}
                    ></input>
                    <label htmlFor={item._id}>{item.name}</label>
                  </li>
                ))
              ) : (
                <p>not found brands</p>
              )
            ) : (
              <SpinnerComponent />
            )}
          </ul>
        </div>
        <div className="price-filter">
          <h2>Price</h2>
          <div>
            <label>from</label>
            <input
              value={localFrom}
              type={"number"}
              step="100"
              onChange={priceFrom}
            ></input>
            <label>to</label>
            <input
              value={localTo}
              type={"number"}
              step="100"
              onChange={priceTo}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
