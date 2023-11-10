import React from "react";
import LoginOrRegister from "./LoginOrRegister";

function LoginPage() {
  return (
    <div className="font-serif ml-3 mt-3">
      <LoginOrRegister forgotPassword={true} name={"Log in"} />
      <LoginOrRegister forgotPassword={false} name={"Create Account"} />
    </div>
  );
}

export default LoginPage;
