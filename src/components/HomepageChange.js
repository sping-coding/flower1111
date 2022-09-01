import React, { useEffect } from "react";
import { useState } from "react";
import HomepageChangeBox from "./HompageChangeBox";
import first from "../images/last1.jpg";
import second from "../images/last2.jpg";
import third from "../images/last3.png";
import forth from "../images/last4.png";

const HomepageChange = () => {
  const [buttonSelect, setButtonSelect] = useState([]);

  const choice = {
    first: {
      name: `${first}`,
      p: "크룰리아 No.1 화이트박스",
      p2: "크룰리아 No.1 그레이박스",
      name2: `${second}`,
    },
    second: {
      name: `${third}`,
      p: "크룰리아 Premium 브라운",
      p2: "크룰리아 Premium 핑크",
      name2: `${forth}`,
    },
  };

  const play = (userChoice) => {
    setButtonSelect(choice[userChoice]);
  };

  useEffect(() => {
    setButtonSelect(choice["first"]);
  }, []);

  return (
    <div className="HomepageChanges">
      <h2>PICK YOUR PACKAGE</h2>
      <div className="mainChange">
        <button className="HomepageChangeBtnF" onClick={() => play("first")}>
          Box
        </button>
        <button className="HomepageChangeBtnS" onClick={() => play("second")}>
          Paper
        </button>
      </div>
      <div className="mainBox">
        <div className="mainBoxss">
          <HomepageChangeBox title="items" item={buttonSelect} />
        </div>
      </div>
    </div>
  );
};

export default HomepageChange;
