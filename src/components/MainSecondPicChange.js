import React from "react";
import "./MainSecondPicChange.css";
import logo from "../images/mainLLLogo.png";

const MainSecondPicChange = ({ onChange, msgValue }) => {
  return (
    <div className="reserve-store">
      <div className="inner">
        <div className="medal">
          <div className="front">
            <div className="messagetext">
              <p>{msgValue}</p>
            </div>
          </div>
          <div className="back">
            <img src={logo} />
          </div>
        </div>
      </div>
      <div className="MainSecondSide"></div>
    </div>
  );
};

export default MainSecondPicChange;
