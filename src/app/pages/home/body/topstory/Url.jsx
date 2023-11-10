import React from "react";

function Url(props) {
  const domain = props.url && new URL(props.url).hostname;
  const dummyDomain = "www.google.com";
  return (
    <button className="inline-block text-[75%] text-grey-n">
      &nbsp;(
      <a href={props.url} className=" hover:underline">
        {domain ? domain : dummyDomain}
      </a>
      )
    </button>
  );
}

export default Url;
