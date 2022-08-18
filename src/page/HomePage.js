import React from "react";
import ReactDOM from "react-dom";
import "swiper/css/bundle";
import MainSwiper from "../components/MainSwiper";
import HomepageChange from "../components/HomepageChange";
import Footer from "../components/Footer";
import MainSecondHeader from "../components/MainSecondHeader";
import MainSecondPicChange from "../components/MainSecondPicChange";

const HomePage = () => {
  return (
    <div>
      <div className="MainHeader">
        <div className="MainHeader1"></div>
        <div className="MainHeader2">
          <div className="MainHeader2T">
            <h1>Make your own flower</h1>
            <span>당신이 원하는 꽃의 조합</span>
          </div>
        </div>
        <div className="MainHeader3"></div>
      </div>
      <MainSecondHeader />
      <MainSecondPicChange />
      <div className="mainEmpty"></div>
      <MainSwiper />
      <div className="mainEmpty gray">
        <div>
          <h1>
            감동을 만들어 드립니다
            <br />
            어쩌구 저쩌구
          </h1>
        </div>
      </div>
      <div className="mainEmpty">
        <h1>
          Premium
          <br />
          Customisation
          <br />
          Flower
        </h1>
      </div>
      <HomepageChange />
      <Footer />
    </div>
  );
};

export default HomePage;
