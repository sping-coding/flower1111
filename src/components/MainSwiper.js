import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import mainslide1 from "../images/mainslide1.png";
import mainslide2 from "../images/mainslide2.png";
import mainslide3 from "../images/mainslide3.png";

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
          <img className="slidePictur" src={mainslide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slidePictur" src={mainslide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slidePictur" src={mainslide3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainSwiper;
