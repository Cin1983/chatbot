import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="uiContainerComments">
      <CommentDetail
        author="Boelie"
        date="10:00am"
        text="Wat een prachtig weer"
      />
      <CommentDetail author="Hyacinthia" date="10:15am" text="Nice weer" />
      <CommentDetail author="Dick" date="10:17" text="Wow weer" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
