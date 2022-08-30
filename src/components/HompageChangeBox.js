import React from "react";
import mainslide1 from "../images/mainslide1.png";

const HomepageChangeBox = (props) => {
  return (
    <div className="HomepageChangeBoxs">
      <div className="HomepageChangeBoxFirst">
        <div>
          <img
            src={props.item && props.item.name}
            className="HomepageChangeBoxImgF"
            width="250px"
            heigth="250px"
          />
        </div>
        <div className="HomepageChangeBoxFirstText">
          <h3>{props.item && props.item.p}</h3>
        </div>
      </div>
      <div className="HomepageChangeBoxSecond">
        <div>
          <h3>{props.item && props.item.p2}</h3>
        </div>
        <div>
          <img
            src={props.item && props.item.name2}
            className="HomepageChangeBoxImgS"
            width="250px"
            heigth="250px"
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageChangeBox;
