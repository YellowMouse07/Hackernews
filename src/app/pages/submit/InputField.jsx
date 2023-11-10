import React from "react";

function InputField({ text }) {
  return (
    <>
      {text !== true ? (
        <input className="border border-black rounded-sm pl-1 w-full" />
      ) : (
        <textarea className="border border-black rounded-sm pl-1 h-44 w-[90%]"></textarea>
      )}
    </>
  );
}

export default InputField;
