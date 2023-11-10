import React, { useEffect, useState } from "react";
import { Header } from "../home/header/Header";
import TopStory from "../home/body/topstory/TopStory";
import { useLocation, useParams } from "react-router-dom";
import InputButton from "../login/InputButton";
import { Footer } from "../home/footer/Footer";
import UpVote from "../home/body/topstory/UpVote";

function CommentsMain() {
  const [comments, setComments] = useState();
  const location = useLocation();
  const params = useParams();
  async function fetchDirectComment() {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${location.state.kid}.json`
    );
    setComments(await response.json());
  }
  useEffect(() => {
    fetchDirectComment();
  }, []);
  comments && console.log(comments);
  return (
    <div className="px-28 py-3">
      <Header name="Hacker News" navbar={true} />
      <div className="bg-coffee-l pl-4 pt-4 font-verdana">
        <TopStory id={params.id} />

        <div className="ml-3 mt-3">
          <textarea className="resize w-3/4 h-44 border border-black rounded-sm"></textarea>
          <p className="text-grey-n">
            If you haven't already, would you mind reading about HN's approach
            to comments and site guidelines?
          </p>
          <InputButton font="font-mono" name="add comment" />
        </div>
        <div className="text-verdana">
          <UpVote />
          <div>{comments && comments.text}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CommentsMain;
