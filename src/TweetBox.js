import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/profile-2337176-1982537.png" />
          <input placeholder="What's happening?" type="text"></input>
          {/* <input placeholder="Enter image URL" type="text"></input> */}
        </div>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
