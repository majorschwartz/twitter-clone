import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import Twitter from "@material-ui/icons/Twitter";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"1556348857625092096"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{ height: 400 }} />
        <TwitterShareButton url={"https://google.com/"} options={{ text: "Google Share" }} />
      </div>
    </div>
  );
}

export default Widgets;
