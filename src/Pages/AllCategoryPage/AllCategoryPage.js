import React from "react";
import "./AllCategoryPage.css";
import AllCategoryContainer from "../../Components/Category/AllCategoryContainer";

const AllCategoryPage = () => {
  return (
    <div className="page all-category-page container">
      <AllCategoryContainer />
    </div>
  );
};
export default AllCategoryPage;

/*
# Why we use axios
##Advantages of using Axios over the native Fetch API include:
1-Request and response interception
2-Streamlined error handling
3-Protection against XSRF
4-Support for upload progress
5-Response timeout
6-The ability to cancel requests
7-Support for older browsers
8-Automatic JSON data transformation
*/
