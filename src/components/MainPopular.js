import React from "react";
import popular1 from "../images/popular1.webp";
import { Link } from "react-router-dom";

const MainPopular = () => {
  return (
    <div className="MainPopularBox">
      <h2>See What's Popular</h2>
      <div className="MainPopularBoxPics">
        <img className="p" src={popular1} />
        <img className="p" src={popular1} />
        <img className="p" src={popular1} />
        <img className="p" src={popular1} />
      </div>
      <Link className="MainPopularBoxLink" to="./products">
        쇼핑몰로 이동 <span>-&gt;</span>
      </Link>
    </div>
  );
};

export default MainPopular;
