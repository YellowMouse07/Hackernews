import React from "react";

function InputButton({ name, font }) {
  return (
    <button
      className={`${font} mt-6 rounded-sm border border-black px-2  bg-gray-100 hover:bg-gray-200 cursor-default`}
    >
      {name}
    </button>
  );
}

export default InputButton;
