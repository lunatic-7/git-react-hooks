import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks";

const Post = ({ id, title, content, author, short = false }) => {
  console.log('rendering Post')

  const { secondaryColor } = useTheme();

  let processedContent = content
  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + '...'
    }
  }

  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{processedContent}</div>
      {short &&
        <div>
          <br />
          <Link to={`/view/${id}`}>View full post</Link>
        </div>
      }
      <br />
      <i>
        Written by: <b>{author}</b>
      </i>
    </div>
  );
};

export default React.memo(Post);
