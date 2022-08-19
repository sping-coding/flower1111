import React from "react";
import first from "../images/3.png";
import second from "../images/4.png";
import thired from "../images/8.png";
import fourth from "../images/9.png";

const MainSecondCard = () => {
  return (
    <div className="MainSecondCards">
      <div className="MainSecondCardsFirst">
        <h3>Caerulea's Card</h3>
        <img src={first} />
        <img src={second} />
      </div>
      <div className="MainSecondCardsSecond">
        <img className="MainSecondCardsSecondFirstImg" src={thired} />
        <img className="MainSecondCardsSecondSecondImg" src={fourth} />
      </div>
    </div>
  );
};

export default MainSecondCard;
