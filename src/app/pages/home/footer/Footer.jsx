import React from "react";
import FooterNavBar from "./FooterNavBar";
export const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-2  bg-coffee-l">
      <div className="bg-orange w-full h-[2px] "></div>
      <div className="flex justify-center items-center gap-3 text-xs">
        <FooterNavBar />
      </div>
      <div>
        <span className="text-grey-n text-md">Search: </span>
        <input
          className="border rounded-sm border-black w-fit pl-1   outline-offset-0"
          type="search"
        />
      </div>
    </div>
  );
};
