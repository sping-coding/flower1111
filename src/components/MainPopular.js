import React from "react";
import popular1 from "../images/장미.jpg";
import popular2 from "../images/연분홍.jpg";
import popular3 from "../images/진핑크.jpg";
import popular4 from "../images/토마토장미.jpg";
import { Link } from "react-router-dom";

const MainPopular = () => {
  return (
    <div className="MainPopularBox">
      <h2>See What's Popular</h2>
      <div className="MainPopularBoxPics">
        <img src={popular1} />
        <img src={popular2} />
        <img src={popular3} />
        <img src={popular4} />
      </div>
    </div>
  );
};

export default MainPopular;
