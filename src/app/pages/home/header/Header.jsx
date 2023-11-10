import React from "react";
import HeaderNavBar from "./HeaderNavBar";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({ id, name, navbar }) => {
  const navigate = useNavigate();
  const refreshPage = () => {
    id === "home" ? window.location.reload() : navigate("/");
  };
  return (
    <div className=" bg-orange w-full h-7 flex justify-between  items-center pl-[2px] pr-2">
      <div className="flex gap-2">
        <div onClick={refreshPage} className="border border-white cursor-pointer w-6 h-6 flex items-center justify-center ]">
          <img
            className="w-fit h-5"
            src="/assets/hacker.svg"
            alt="hacker logo"
          />
        </div>
        <nav>
          <button onClick={refreshPage} className="font-bold">
            {name}
          </button>
        </nav>
        {navbar && <HeaderNavBar />}
      </div>
      {navbar && (
        <div>
          <nav>
            <Link to="/login">
              <button>login</button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
