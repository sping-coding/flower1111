import React from "react";
import mainslide1 from "../images/mainslide1.png";

const HomepageChangeBox = (props) => {
  return (
    <div className="HomepageChangeBoxs">
      <div className="HomepageChangeBoxFirst">
        <img
          src={props.item && props.item.name}
          className="HomepageChangeBoxImgF"
        />
        <h3>{props.item && props.item.p}</h3>
      </div>
      <div className="HomepageChangeBoxSecond">
        <h3>{props.item && props.item.p2}</h3>
        <img
          src={props.item && props.item.name2}
          className="HomepageChangeBoxImgS"
        />
      </div>
    </div>
  );
};

export default HomepageChangeBox;
