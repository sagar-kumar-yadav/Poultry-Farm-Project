import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../components/Prices";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";
import toast from "react-hot-toast";
import Banner from "../../components/HomeBanner/Banner";
import { FaRegHeart } from "react-icons/fa";
import Loader from "../../components/Loader/Loader";
import { useLoading } from "../../context/loading";
import MiddleQuote from "./MiddleQuote";
import MiddleCategories from "./MiddleCategories";
import BottomPage from "./BottomPage";

const Homepage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(1);
  const [cart, setCart] = useCart();
  const [addInCart, setAddInCart] = useState([])
  const { isLoading, setLoadingState } = useLoading();
  const [featureProduct, setFeatureProduct] = useState([]);

  // get all category-----------------------------------------------------
  const getAllCategory = async () => {
    try {
      const url = `${
        import.meta.env.VITE_REACT_APP_URL
      }/api/v1/category/get-all-categories`;
      const { data } = await axios.get(url);
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  // get all products --------------------------------------------------------------------
  const getAllProducts = async () => {
    try {
      const url = `${
        import.meta.env.VITE_REACT_APP_URL
      }/api/v1/product/get-products?limit=10`;
      const { data } = await axios.get(url);
      if (data.success) {
        setProducts(data.products);
        // console.log(data);
        // Take only the first ten products as featured products
        const firstTenProducts = data.products.slice(0, 10);
        setFeatureProduct(firstTenProducts);
        // console.log(firstTenProducts);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in getting products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // get total count
  // const getTotal = async () => {
  //   try {
  //     const url = `${
  //       import.meta.env.VITE_REACT_APP_URL
  //     }/api/v1/product/product-count`;
  //     const { data } = await axios.get(url);
  //     setTotal(data?.total);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getTotal();
  // }, []);

  // useEffect(() => {
  //   if (page === 1) {
  //     return;
  //   }
  //   loadMore();
  // }, [page]);

  // load more
  // const loadMore = async () => {
  //   try {
  //     const url = `${
  //       import.meta.env.VITE_REACT_APP_URL
  //     }/api/v1/product/product-list/${page}`;
  //     setLoadingState(true);
  //     const { data } = await axios.get(url);
  //     setProducts([...products, ...data?.products]);
  //     setLoadingState(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoadingState(false);
  //   }
  // };

  // filter by category
  // const handleFilter = (value, id) => {
  //   let all = [...checked];
  //   if (value) {
  //     all.push(id);
  //   } else {
  //     all = all.filter((c) => c !== id);
  //   }
  //   setChecked(all);
  // };

  // get filtered product
  // const filterProduct = async () => {
  //   try {
  //     const url = `${
  //       import.meta.env.VITE_REACT_APP_URL
  //     }/api/v1/product/product-filter`;
  //     const { data } = await axios.post(url, { checked, radio });
  //     setProducts(data?.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (!checked.length || !radio.length) getAllProducts();
  // }, [checked.length, radio.length]);

  // useEffect(() => {
  //   if (checked.length || radio.length) filterProduct();
  // }, [checked, radio]);

  // console.log(cart);
  const addToCart = (data) => {
    // console.log(data);
    setCart([...cart, data]);
    localStorage.setItem("cart", JSON.stringify([...cart, data]));
    toast.success("Item Add to Cart");
  };

  return (
    <Layout title={"All Products - Best Offers"}>
      <Banner />
      <MiddleQuote />
      <MiddleCategories />

      <div className=" relative top-80 max-sm:top-56">
        <div className=" text-4xl uppercase font-semi-bold ml-[4%] mb-4 w-[90%] max-sm:text-2xl pt-8">
          Featured Product
        </div>

        {/* <div className=" sticky top-24 max-sm:hidden w-[15%]">
            
            <div className="category_box_filter">
              <div className="filter_cat_header">Filter By Category</div>
              <div className="inner_cat_box">
                {categories?.map((c, i) => (
                  <Checkbox
                    key={i}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>
            </div>

            
            <div className="category_box_filter">
              <div className="filter_cat_header">Filter By Price</div>
              <div className="inner_cat_box">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p, i) => (
                    <div key={i}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>
            </div>

            <div className="reset_btn ">
              <label onClick={() => window.location.reload()}>Reset</label>
            </div>
          </div> */}
        {/* products here ---------------------------------------------*/}

        {/* {JSON.stringify(radio, null, 4)} */}

        <div className="flex w-[90%] m-auto overflow-auto">
          {featureProduct?.map((p) => (
            <div key={p._id} className=" w-64 p-3 mb-8 max-md:w-40">
              <div className="product_img cursor-pointer max-md:w-36">
                <img
                  src={p.photos[0]}
                  className=""
                  alt={p.name}
                  onClick={() => navigate(`/product/${p.slug}`)}
                />
              </div>
              {/* wishlist button */}
              {/* <div className=" absolute top-0"> */}
              {/* <button
                  className=" cursor-pointer absolute w-8 h-8 left-16 top-8 transition duration-300 max-md:left-8"
                  onClick={handleToggleWishlist}
                >
                  <FaRegHeart
                    className="ml-2 cursor-pointer"
                    color="#c7c1c1"
                    size={24}
                  />
                </button> */}
              {/* </div> */}
              <div className=" w-[90%]">
                <span className=" max-md:hidden">{p.name}</span>
                <span className=" max-md:block md:hidden">
                  {p.name.substring(0, 12)}
                </span>
                <span className="flex flex-col">
                  {/* <p className="">{p.description.substring(0, 30)}</p> */}
                  <p className="">₹ {p.price}</p>
                </span>
              </div>

              <button
                className="bg-[#222] text-white w-40 rounded h-8 mt-2 max-md:w-24"
                // onClick={() => {
                //   setCart([...cart, p]);
                //   localStorage.setItem("cart", JSON.stringify([...cart, p]));
                //   toast.success("Item Add to Cart");

                // }}
                onClick={() => addToCart(p)}
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                  add
                  {/* <span>add</span> */}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomPage />
      {/* <div className=" flex justify-center items-center p-10 pl-56 max-md:pl-0 max-md:p-0">
        {products && products.length < total && (
          <button
            className="bg-[#222] text-white rounded"
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            {isLoading ? (
              <Loader
                text={"Loading..."}
                color={"#ffffff"}
                loading={isLoading}
              />
            ) : (
              "Load More"
            )}
          </button>
        )}
      </div> */}
    </Layout>
  );
};

export default Homepage;
