import React from "react";
import "./MainVideo.css";

const MainVideo = () => {
  return (
    <section class="Videos">
      <div class="Videos__area">
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
      <div class="Videos__cover"></div>
    </section>
  );
};

export default MainVideo;
