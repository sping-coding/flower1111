import React from "react";
import main from "../images/main.jpg";
import { Link } from "react-router-dom";

const MainPopular = () => {
  return (
    <div className="MainPopularBox">
      <h2>See What's Popular</h2>
      <div className="MainPopularBoxPics">
        <img className="p" src={main} />
        <img className="p" src={main} />
        <img className="p" src={main} />
        <img className="p" src={main} />
      </div>
      <Link className="MainPopularBoxLink" to="./products">
        쇼핑몰로 이동 <span>-&gt;</span>
      </Link>
    </div>
  );
};

export default MainPopular;
