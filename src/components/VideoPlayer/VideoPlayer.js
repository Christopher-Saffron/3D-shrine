import React from "react";
import "./styles.scss";

const VideoPlayer = ({ vid }) => {
  return (
    <div className="mainVideo-holder">
      <video className="mainVideo" autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
