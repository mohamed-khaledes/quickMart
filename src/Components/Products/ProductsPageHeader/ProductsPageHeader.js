import React from "react";
import "./ProductsPageHeader.css";
import UnopDropdown from "unop-react-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
const ProductsPageHeader = ({ resultsCount, handleOptionClick }) => {
  const handler = () => {};
  const clickOption = (key) => {
    localStorage.setItem("sortType",key)
    handleOptionClick();
  };
  return (
    <div className="products-page-header">
      <div className="search-results-count">
        <p className="p-0 m-0">
          <span className="fw-bold mx-2">{resultsCount}</span>"Results"
        </p>
      </div>
      <div className="control-options">
        <div className="sort">
          <UnopDropdown 
          closeOnDropdownClicked
          closeOnClickOut
            onAppear={handler}
            onDisappearStart={handler}
            trigger={<button className="AnimatedDropdownButton dropdown-btn">Sort by<FontAwesomeIcon icon={faArrowUpWideShort}/></button>}
          >
            <div className="dropdown-items">
              <div
                onClick={() => clickOption("No sort")}
                value="recomended"
                className="option-1"
              >
                No sort
              </div>
              <div
                onClick={() => clickOption("recomended")}
                value="recomended"
                className="option-1"
              >
                Recomended
              </div>
              <div
                onClick={() => clickOption("high to low")}
                value="high to low"
              >
                Price: high to low
              </div>
              <div
                onClick={() => clickOption("low to high")}
                value="low to high"
              >
                Price: low to high
              </div>
              <div onClick={() => clickOption("more sold")} value="more sold">
                More sold
              </div>
              <div onClick={() => clickOption("rating")} value="rating">
                Rating
              </div>
            </div>
          </UnopDropdown>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageHeader;
