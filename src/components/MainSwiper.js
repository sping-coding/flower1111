import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import first from "../images/3프라지아.jpg";
import second from "../images/4카네이션.jpg";
import thired from "../images/8작약.jpg";
import fourth from "../images/9디스버드.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const MainSwiper = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="FirstFF">
            <div className="FirstFFH">
              <img src={first} />
              <span>#프라지아</span>
            </div>
            <div className="FirstFFT">
              <p>시작을</p>
              <p> &nbsp; &nbsp; &nbsp; &nbsp;응원해</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="FirstFF">
            <div className="FirstFFH">
              <img src={second} />
              <span>#카네이션</span>
            </div>
            <div className="FirstFFT">
              <p>당신을</p>
              <p>존경합니다</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="FirstFF">
            <div className="FirstFFH">
              <img src={thired} />
              <span>#작약</span>
            </div>
            <div className="FirstFFT">
              <p>변함없는</p>
              <p>&nbsp; &nbsp;사랑</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="FirstFF">
            <div className="FirstFFH">
              <img src={fourth} />
              <span>#디스버드</span>
            </div>
          </div>
          <div className="FirstFFT">
            <p>영혼한 &nbsp; &nbsp;</p>
            <p>&nbsp; &nbsp;우정</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainSwiper;
