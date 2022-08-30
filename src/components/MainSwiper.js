import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import first from "../images/swiper1.png";
import second from "../images/swiper2.png";
import thired from "../images/swiper3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const MainSwiper = () => {
  return (
    <div className="swiperBackground">
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
          <img src={first} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={second} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thired} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
