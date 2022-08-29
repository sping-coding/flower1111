import React from "react";
import ReactDOM from "react-dom";
import "swiper/css/bundle";
import MainSwiper from "../components/MainSwiper";
import HomepageChange from "../components/HomepageChange";
import Footer from "../components/Footer";
import MainSecondHeader from "../components/MainSecondHeader";
import MainSecondPicChange from "../components/MainSecondPicChange";
import MainPopular from "../components/MainPopular";
import MainSecondCard from "../components/MainSecondCard";
import MainVideo from "../components/MainVideo";

const HomePage = () => {
  return (
    <div>
      <div className="MainHeader">
        <div className="MainHeader1"></div>
        <div className="MainHeader2">
          <div className="MainHeader2T">
            <h1>MAKE YOUR OWN FLOWER</h1>
            {/* <h3>당신이 원하는 꽃의 조합</h3> */}
            <p>
              ONLY ONE FOR YOU
              <br />
              FROM CEARULEA
              <br />
              REASONAL FLOWERS AND ROSE
            </p>
          </div>
        </div>
        <div className="MainHeader3"></div>
      </div>
      <MainSecondHeader />
      {/* <MainSecondPicChange /> */}
      {/* <MainSecondCard /> */}
      <MainSwiper />
      <MainVideo />
      <MainPopular />
      <HomepageChange />
      <Footer />
    </div>
  );
};

export default HomePage;
