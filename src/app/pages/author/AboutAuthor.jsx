import React, { useState, useEffect } from "react";
import { Header } from "../home/header/Header";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import AuthorLoading from "./AuthorLoading";
function AboutAuthor() {
  const params = useParams();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState();
  const refreshPage = () => {
    window.location.reload();
  };
  function createdTime() {
    const date = userInfo && new Date(userInfo.created * 1000);
    const day = ("0" + date.getDate()).slice(-2);
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[monthIndex];
    const formattedDate = monthName + " " + day + ", " + year;
    return formattedDate;
  }
  async function fetchUserDetails() {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/user/${params.id}.json`
    );
    setUserInfo(await response.json());
  }
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const navigate = useNavigate();
  const goToComments = () => {
    navigate(`/comment/${location.state.id}`);
  };
  return userInfo ? (
    <div className="px-28 py-3">
      <Header name="Hacker News" navbar={true} />
      <div className="font-verdana flex gap-1 bg-coffee-l text-grey-n px-1 pt-4 pb-10">
        <div className=" flex flex-col">
          <span>user:</span>
          <span>created:</span>
          <span>karma:</span>
          <div className="flex">
            <span>about:</span>
          </div>
        </div>
        <div className="flex flex-col">
          <button onClick={refreshPage} className="text-green-n">
            {userInfo && userInfo.id}
          </button>
          <span className="text-black">{userInfo && createdTime()}</span>
          <span>{userInfo && userInfo.karma}</span>
          <div className="flex flex-col mt-4 text-black underline">
            {userInfo && (
              <>
                <span>submissions</span>
                <span onClick={goToComments} className="cursor-pointer">
                  comments
                </span>
                <span>favorites</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="px-28 py-3">
      <Header />
      <div className="bg-coffee-l">
        <AuthorLoading />
      </div>
    </div>
  );
}

export default AboutAuthor;
