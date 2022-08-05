import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar"></div>
      <Avatar src="https://cdn.iconscout.com/icon/free/png-256/profile-2337176-1982537.png" />
    </div>
  );
}

export default Post;
