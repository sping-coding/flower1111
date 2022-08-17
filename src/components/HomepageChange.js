import React, { useEffect } from "react";
import { useState } from "react";
import HomepageChangeBox from "./HompageChangeBox";
import mainslide1 from "../images/mainslide1.png";

const HomepageChange = () => {
  const [buttonSelect, setButtonSelect] = useState([]);

  const choice = {
    first: {
      name: `${mainslide1}`,
      p: "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",
      p2: "pppppppppppppppppppppppppppppppppppppppppppppppppppp",
      name2: `${mainslide1}`,
    },
    second: {
      name: `${mainslide1}`,
      p: "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",
      p2: "ppppppppppppppppppppppppppppppppppppppppppppppppppp",
      name2: `${mainslide1}`,
    },
  };

  const play = (userChoice) => {
    setButtonSelect(choice[userChoice]);
  };

  useEffect(() => {
    setButtonSelect(choice["first"]);
  }, []);

  return (
    <div>
      <div className="mainChange">
        <button className="HomepageChangeBtnF" onClick={() => play("first")}>
          first
        </button>
        <button className="HomepageChangeBtnS" onClick={() => play("second")}>
          second
        </button>
      </div>
      <div className="main">
        <HomepageChangeBox title="items" item={buttonSelect} />
      </div>
    </div>
  );
};

export default HomepageChange;
