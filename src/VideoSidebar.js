import React from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import { useState } from "react";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      {/* <h2>I'm a sidebar</h2> */}
      <div className="videoSidebar__button">
        {
          liked ? (
            <FavoriteIcon fontSize="large" onClick={e => setLiked(false)} />

          ) : (
            <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />
          )

        }
        <p>{liked ? likes + 1 : likes}</p>

      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>

      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>

      </div>





    </div>
  );
}

export default VideoSidebar;
