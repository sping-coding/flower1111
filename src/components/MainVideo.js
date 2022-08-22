import React from "react";
import "./MainVideo.css";

const MainVideo = () => {
  return (
    <section class="youtube">
      <div class="youtube__area">
        <div id="player">
          <video
            className="mainVV"
            src="/videos/video-2.mp4"
            controls
            loop
            autoPlay
            muted
            playsInline
          >
            <source src="MainV" />
          </video>
        </div>
      </div>
      <div class="youtube__cover"></div>
    </section>
  );
};

export default MainVideo;
