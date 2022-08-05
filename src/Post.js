import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://cdn.iconscout.com/icon/free/png-256/profile-2337176-1982537.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <div className="post__username">The Username</div>
            <div className="post__verified">
              <VerifiedUserIcon className="post__badge" />
            </div>
            <div className="post__usertag">@atwitteruser</div>
          </div>
          <div className="post__headerDescription">
            <p>This is some text within the tweet.</p>
          </div>
        </div>
        <img src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=300%2C280"></img>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
