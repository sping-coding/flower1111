import React from "react";
import "./MainSecondPicChange.css"

const MainSecondPicChange = ({onChange, msgValue}) => {
  return (
    <div>
      <section className="reserve-store">
        <div className="MainSecondSide"></div>
        <div className="inner">
          <div className="medal">
            <div className="front">
              <div className="messagetext">
                {msgValue}
              </div>
            </div>
            <div className="back">
              <h2 className="messagetext">CAERULEA</h2>
            </div>
          </div>
        </div>
        <div className="MainSecondSide"></div>
      </section>
    </div>
  );
};

export default MainSecondPicChange;
