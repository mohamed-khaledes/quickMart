import React, { useEffect, useState } from "react";
import ProductsContainer from "../../../Components/Products/ProductsContainer/ProductsContainer";
import Pagenation from "../../../Components/Utility/Pagenation/Pagenation";
import { useParams } from "react-router-dom";
import VeiwAllProductsCategoryHook from "../../../CustomHooks/Product/VeiwAllProductsCategoryHook";
import NotFoundData from "../../../Components/Utility/NotFoundData/NotFoundData";
import SpinnerComponent from "../../../Components/Utility/SpinnerComponent/SpinnerComponent";

const ProductsByCategoryPage = () => {
  const { id } = useParams();
  const [custom_id, set_custom_id] = useState(id);
  const [items, pageCount, onPress, loading] =
    VeiwAllProductsCategoryHook(custom_id);
  useEffect(() => {
    set_custom_id(id);
  }, [id]);
  return (
    <div className="page products-by-category-page">
      {loading === false ? 
          items? 
          items.length>0?
          <>
            <ProductsContainer products={items} />
            {pageCount > 1 ? 
              <Pagenation pageCount={pageCount} onPress={onPress} />
            :null}
          </>
        : <div className="h-vh min-vh-100 d-flex align-items-center justify-content-center">
        <NotFoundData />
      </div> 
      : <div className="h-vh min-vh-100 d-flex align-items-center justify-content-center">
      <NotFoundData />
    </div>
      :<SpinnerComponent />
      }
    </div>
  );
};

export default ProductsByCategoryPage;
