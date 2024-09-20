import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/homebanner/Banner";
import MiddleBanner from "../components/homebanner/MiddleBanner";

const Homepage = () => {
  return (
    <Layout title={"All Products - Best Offers"}>
      <Banner />
      
      {/* <MiddleBanner /> */}
    </Layout>
  );
};

export default Homepage;
