import React from "react";
import popular1 from "../images/장미.png";
import popular2 from "../images/연분홍.png";
import popular3 from "../images/진핑크.png";
import popular4 from "../images/토마토장미.png";
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
      <Link className="MainPopularBoxLink" to="./products">
        쇼핑몰로 이동 <span>-&gt;</span>
      </Link>
    </div>
  );
};

export default MainPopular;
