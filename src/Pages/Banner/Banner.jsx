import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import slider_1 from "../../assets/images/slider/slider-1.jpg"
import slider_2 from "../../assets/images/slider/slider-2.jpg"
import slider_3 from "../../assets/images/slider/slider-3.jpg"

const Banner = () => {
  return (
    <div className="mt-5 mb-20">
      <Swiper
        slidesPerView={1}
        autoplay={{
           delay : 2500
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
               <img className="rounded-lg h-[500px] w-full" src={slider_1} alt=""  />
        </SwiperSlide>
        <SwiperSlide >
               <img className="rounded-lg h-[500px] w-full" src={slider_2} alt=""  />
        </SwiperSlide>
        <SwiperSlide >
               <img className="rounded-lg h-[500px] w-full" src={slider_3} alt=""  />
        </SwiperSlide>     
      </Swiper>

    </div>
  );
};

export default Banner;