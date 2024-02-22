import React from "react";
import { Container } from "react-bootstrap";
import Brands from "../../Components/Brands/Brands";
import DiscountSection from "../../Components/Home/DiscountSection/DiscountSection";
import HomeCategory from "../../Components/Home/HomeCategory/HomeCategory";
import Slider from "../../Components/Home/Slider/Slider";
import Products from "../../Components/Products/HomeProducts/Products";
import BuyMoreSaveMore from "../../Components/Home/BuyMoreSaveMore/BuyMoreSaveMore";
import banner01 from "../../imgs/banner10.jpg";
import banner02 from "../../imgs/banner01.jpg";
import banner03 from "../../imgs/banner03.jpg";
import VeiwHomeProductsHook from "../../CustomHooks/Product/VeiwHomeProductsHook";
import Landing from "../../Components/Home/Landing/Landing";

const HomePage = () => {
  const [
    mobile_items,
    mobile_loading,
    pcCore_items,
    pcCore_loading,
    schoolTools_items,
    schoolTools_loading,
  ] = VeiwHomeProductsHook();
  return (
    <div className="home">
      <Landing />
      <Container className="page home-page p-0">
        {/* <Slider /> */}
        <HomeCategory />
        <BuyMoreSaveMore />
        <Products title={"mobile"}
        items={mobile_items}
        loading={mobile_loading}
        />
        <DiscountSection banner={banner01} />
        <BuyMoreSaveMore />
        <Products
          title={"school tools"}
          items={schoolTools_items}
          loading={schoolTools_loading}
        />
        <DiscountSection banner={banner02} />
        <Brands />
        <Products title={"pc core"}
        items={pcCore_items}
        loading={pcCore_loading}
        />
        <DiscountSection banner={banner03} />
      </Container>
    </div>
  );
};
export default HomePage;
