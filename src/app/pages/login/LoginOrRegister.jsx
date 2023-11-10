import React from "react";
import InputField from "./InputField";
import InputButton from "./InputButton";
function LoginOrRegister(props) {
  return (
    <div>
      <span className="text-lg font-bold">{props.name}</span>
      <div className="flex w-fit items-end flex-col gap-2 mt-5">
        <InputField name={"username:"} />
        <InputField name={"password:"} />
      </div>
      <InputButton font={"font-verdana"} name={props.name.toLowerCase()} />

      {props.forgotPassword && (
        <p>
          <button className="text-purple-n text-xl my-3 underline">
            Forgot your password?
          </button>
        </p>
      )}
    </div>
  );
}

export default LoginOrRegister;
