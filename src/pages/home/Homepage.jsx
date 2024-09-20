import React from "react";
import Layout from "../../components/layout/Layout";
import Banner from "../../components/homebanner/Banner";
import MiddleCategory from "./MiddleCategory";
import MiddleQuote from "./MiddleQuote";

const Homepage = () => {
  return (
    <Layout title={"All Products - Best Offers"}>
      <Banner />
      <MiddleQuote />
      <MiddleCategory />
      <div className=" relative top-80 max-sm:top-56">
        <div className=" text-4xl uppercase font-semi-bold ml-[4%] mb-4 w-[90%] max-sm:text-2xl pt-8">
          Featured Product
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
