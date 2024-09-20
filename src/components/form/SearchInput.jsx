import React from "react";

const SearchInput = () => {
  
  return (
    <div className=" h-10 min-w-[232px] w-[25%] flex items-center px-6 max-sm:hidden fixed left-[39%]">
      <form 
    //   onSubmit={handleSubmit} 
      className="flex w-full items-center ">
        <input
          className="bg-transparent flex-grow h-10 border border-solid border-white outline-none  pl-4"
          placeholder="Search for products brand and more"
          //   value={values.keyword}
          //   onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="w-10 flex">
          <span className="material-symbols-outlined h-5 p-[10px] box-content bg-[#f5f5f6] text-[#282c3f] font-light border-tl-4 border-bl-4 rounded-r-none">
            search
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
