import React from "react";
import { Link } from "react-router-dom";

const MiddleCategory = () => {
  return (
    <div className="flex w-[90%] m-auto gap-4  text-white relative top-72 max-sm:top-40">
    
      <div className="w-1/2 ">
        <Link to="/category/men">
          <div className=" text-[#cd1818] absolute flex flex-col items-center top-[50%] right-[50%] w-1/2">
            <span className=" font-bold text-6xl max-sm:text-4xl">POULTRY CAGES</span>
            <span>New Arrival</span>
          </div>

          <img
            src="category/cage.jpg"
            alt=""
            className="rounded-lg w-full h-full object-cover max-h-[38rem]"
          />
        </Link>
      </div>
      <div className="w-1/2">
        <Link to="/category/ladies">
          <div className="text-[#cd1818] absolute flex flex-col items-center top-[50%] left-[50%] w-1/2">
            <span className="font-bold text-6xl max-sm:text-3xl">POULTRY FEEDER</span>
            <span>New Arrival</span>
          </div>

          <img
            src="/category/feeder.jpg"
            alt=""
            className="rounded-lg w-full h-full object-cover max-h-[38rem]"
          />
        </Link>
      </div>
    </div>
  );
};

export default MiddleCategory;
