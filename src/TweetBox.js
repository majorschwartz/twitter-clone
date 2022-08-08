import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Another User",
      username: "another",
      verified: true,
      text: tweetMessage,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/profile-2337176-1982537.png",
      image: tweetImage,
      date: Date.now(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/profile-2337176-1982537.png" />
          <textarea onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"></textarea>
        </div>
        <div className="tweetBox__footer">
          <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} type="text" placeholder="Add Image URL"></input>
          <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
