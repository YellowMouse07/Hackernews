import React from "react";

function Loading() {
  return (
    <div className="animate-pulse duration-75 flex">
      <div className="w-6 h-6 bg-stone-200 rounded-md my-2 ml-4"></div>
      <div className="flex flex-col gap-2">
        <div className={`w-96 h-3 bg-stone-200 rounded-full mt-2 mx-4`}></div>
        <div className="w-80 h-3 bg-stone-200 rounded-full mb-2 mx-4"></div>
      </div>
    </div>
  );
}

export default Loading;
