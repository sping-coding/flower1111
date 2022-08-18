import React from "react";
import mainenv from "../images/mainenv.png";

const MainSecondPicChange = () => {
  return (
    <div>
      <section class="reserve-store">
        <div className="MainSecondSide"></div>
        <div class="inner">
          <div class="medal">
            <div class="front">
              <img src={mainenv} />
            </div>
            <div class="back">
              <p>
                각각의 꽃들이 품고있는 꽃말들을 조합해
                <br />
                고객님이 전하고 싶은 메시지에 초점을 맞춘
                <br />
                -크룰리아-
              </p>
            </div>
          </div>
        </div>
        <div className="MainSecondSide"></div>
      </section>
    </div>
  );
};

export default MainSecondPicChange;
