import React from "react";
import 두번째꽃 from "../images/두번째꽃.png";
import 두번째풀 from "../images/두번째풀.jpg";
import 두번째포장지 from "../images/두번째포장지2.jpg";

const MainSecondHeader = () => {
  return (
    <div className="MainSecondHeaderItems">
      <h1>크룰리아</h1>
      <div className="MainSecondHeaderItemsPics">
        <div className="MainSecondHeaderItemsFlower">
          <img src={두번째꽃} />
          <span>40여종의 꽃</span>
        </div>
        <div className="MainSecondHeaderItemsGrass">
          <img src={두번째풀} />
          <span>그린소재</span>
        </div>
        <div className="MainSecondHeaderItemsPackage">
          <img src={두번째포장지} />
          <span>크룰리아의 명품 포장</span>
        </div>
      </div>
    </div>
  );
};

export default MainSecondHeader;
