import React from "react";

function AuthorLoading() {
  return (
    <div className="animate-pulse duration-75  ">
      <div className="flex">
        <div className="w-6 h-6 bg-stone-200 rounded-md mt-4 ml-1"></div>
        <div className={`w-96 h-3 bg-stone-200 rounded-full mt-5 mx-2`}></div>
      </div>
      <div className="flex">
        <div className="w-6 h-6 bg-stone-200 rounded-md mt-4 ml-1"></div>
        <div className={`w-96 h-3 bg-stone-200 rounded-full mt-5 mx-2`}></div>
      </div>
      <div className="flex">
        <div className="w-6 h-6 bg-stone-200 rounded-md mt-4 ml-1"></div>
        <div className={`w-96 h-3 bg-stone-200 rounded-full mt-5 mx-2`}></div>
      </div>
      <div className="flex">
        <div className="w-6 h-6 bg-stone-200 rounded-md mt-4 ml-1"></div>
        <div className={`w-96 h-3 bg-stone-200 rounded-full mt-5 mx-2`}></div>
      </div>
    </div>
  );
}

export default AuthorLoading;
