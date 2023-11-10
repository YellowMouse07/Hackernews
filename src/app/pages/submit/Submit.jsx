import React from "react";
import { Header } from "../home/header/Header";
import InputField from "./InputField";
import InputButton from "../login/InputButton";
import { Link } from "react-router-dom";

function Submit() {
  return (
    <div className="px-28 py-3 font-verdana">
      <Header name="Submit" navbar={false} />
      <div className="bg-coffee-l flex gap-3 pt-5 pl-5">
        <div className="flex flex-col gap-3 text-grey-n">
          <span>title: </span>
          <span>url:</span>
          <span>text:</span>
        </div>

        <div className="flex flex-col gap-1 w-1/2">
          <InputField />
          <InputField />
          <InputField text={true} />
          <InputButton name="submit" font="font-mono w-[15%]" />
        </div>
      </div>
      <div className="bg-coffee-l pl-16 py-4 text-grey-n text-md flex flex-col gap-4">
          <p>
            Leave url blank to submit a question for discussion. If there is no url,
            text will appear at the top of the thread. If there is a url, text is
            optional.
          </p>
          <p>You can also submit via <Link className="underline" to="/">bookmarklet</Link>.</p>
      </div>
    </div>
  );
}

export default Submit;
