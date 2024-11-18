import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
const SearchBar = () => {
  return (
    <div className="flex justify-between bg-[#F3F4F6] p-5">
      <div className="flex items-center space-x-1">
        <Image width={25} height={25} src={Logo} alt="Logo" />
        <h1 className="text-xl font-bold">
          My<span className="text-pink-500">Tasks</span>
        </h1>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded-md p-2 w-[1/2] md:w-1/4 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
