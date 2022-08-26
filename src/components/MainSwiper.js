import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import first from "../images/3.png";
import second from "../images/4.png";
import thired from "../images/8.png";
import fourth from "../images/9.png";

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
          <img src={first} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={second} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thired} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fourth} />>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainSwiper;
