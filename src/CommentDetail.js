import React from "react";
import Avatar from 'react-avatar';

const CommentDetail = ({ author, date, text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <Avatar googleId="118096717852922241760" size="100" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date"> {date}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
