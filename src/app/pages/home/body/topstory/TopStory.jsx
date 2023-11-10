import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import UpVote from "./UpVote";
import Url from "./Url";
import Index from "./Index";
import Points from "./Points";
import Author from "./Author";
import Time from "./Time";
import HideButton from "./HideButton";
import Comments from "./Comments";
function TopStory(props) {
  const [story, setStory] = useState();
  const [style, setStyle] = useState(" text-black ");
  const handleStyle = () => {
    setStyle("text-grey-n");
  };
  async function fetchStory() {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.id}.json`
    );
    setStory(await response.json());
  }
  function unicodetoChar(String) {
    const doc = new DOMParser().parseFromString(String, "text/html");
    return doc.documentElement.textContent;
  }
  useEffect(() => {
    fetchStory();
  }, []);
  return story ? (
    <div className={`flex gap-1 ${style}`}>
      <div className="flex items-start">
        {props.index && <Index index={props.index} />}
        <UpVote />
      </div>
      <div className="flex flex-col ">
        <div className="inline-block">
          <a onClick={handleStyle} href={story.url}>
            <span>{unicodetoChar(story.title)}</span>
          </a>
          <Url url={story.url} />
        </div>
        <div className="flex gap-1 text-[70%] text-grey-n">
          <Points points={story.score} />
          <Author author={story.by} id={story.id} />
          <Time time={story.time} />
          <HideButton />
          <Comments descendants={story.descendants} kids={story.kids} id={story.id} index={props.index - 1} />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full">
      <Loading />
    </div>
  );
}

export default TopStory;
