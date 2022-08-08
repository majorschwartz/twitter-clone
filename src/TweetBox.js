import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/profile-2337176-1982537.png" />
          <textarea value={tweetMessage} placeholder="What's happening?" type="text"></textarea>
        </div>
        <div className="tweetBox__footer">
          <input type="text" placeholder="Add Image URL"></input>
          <Button className="tweetBox__tweetButton">Tweet</Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
