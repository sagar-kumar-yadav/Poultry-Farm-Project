import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./footer/Footer";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <div className="wrapper">
        <Toaster />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
