import React from "react";

function InputField({ name }) {
  return (
    <div className="flex gap-1 ml-1">
      <p className="text-lg">{name}</p>
      <input
        className="pl-1 border rounded-sm border-black w-fit outline-offset-0"
        type="search"
      />
    </div>
  );
}

export default InputField;
