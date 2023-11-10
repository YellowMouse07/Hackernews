import { useEffect, useState } from "react";
import { fetchId } from "../../../../API/fetch";
import TopStory from "./topstory/TopStory";
export const Body = () => {
  const [idArr, setIdArr] = useState();
  const [ind, setInd] = useState({
    start: 0,
    end: 30,
  });

  useEffect(() => {
    fetchId().then((id) => {
      setIdArr(id);
    });
  }, []);
  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setInd({
      start: ind.start + 30,
      end: ind.end + 30,
    });
  }
  return (
    <div className="px-1 py-2 bg-coffee-l min-h-[100vh]">
      {idArr &&
        idArr.map((id, index) => {
          if (index >= ind.start && index < ind.end) {
            return <TopStory key={id} id={id} index={index + 1} />;
          }
        })}
      {idArr && (
        <button onClick={handleClick} className="pl-12 pt-3">
          More
        </button>
      )}
    
    </div>
  );
};
