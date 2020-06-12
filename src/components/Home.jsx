import React from "react";
// import Navbar from "./NavbarPublic";
import ProductInfoJumbotron from "./ProductInfoPage/ProductInfoJumbotron";
import HowToUseAtithi from "./ProductInfoPage/HowToUseAtithi";

function Home() {
  return (
    <div className="container-fluid">
      {/* <Navbar /> */}
      <ProductInfoJumbotron />
      <HowToUseAtithi />
    </div>
  );
}
export default Home;
