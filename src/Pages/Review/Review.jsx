import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import person_1 from "../../assets/images/review/man-1.jpg";
import person_2 from "../../assets/images/review/main-2.jpg";
import person_3 from "../../assets/images/review/woman-1.jpg";
import person_4 from "../../assets/images/review/woman-2.jpg";
import check from "../../assets/images/review/quite.png";
const Review = () => {
  return (
    <div className="my-20">
    <h1 className='lg:text-3xl text-2xl font-bold  border-pink-500 dark:text-white border-l-4 pl-4 mb-10'>What Book Reader Says</h1>

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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
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
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img className="h-20 rounded-lg w-24"  src={person_1} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold dark:text-white">Awlad Hossain</h3>
            <p className="dark:text-gray-300">Writer</p>
          </div>
         </div>

          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal dark:text-gray-300">A timeless journey of self-discovery. Coelho's words are a treasure, guiding readers through dreams and destiny. A must-read for anyone seeking inspiration and purpose."</p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img className="h-20 rounded-lg w-24"  src={person_2} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold dark:text-white">Mitchel Jhonson</h3>
            <p className="dark:text-gray-300">Businessman</p>
          </div>
         </div>
          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal dark:text-gray-300">A business revolution! Ries presents a game-changing methodology for startups. This book is an entrepreneur's compass, steering them toward success.</p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img className="h-20 rounded-lg w-24"  src={person_3} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold dark:text-white">Ema Watson</h3>
            <p className="dark:text-gray-300">Programmer</p>
          </div>
         </div>
          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal dark:text-gray-300">Knuth's masterpiece enlightens the coding world. It's the holy grail for software engineers, offering profound insights into algorithms and computer science. </p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img  className="h-20 rounded-lg w-24"  src={person_4} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold dark:text-white">Prianka Jouti</h3>
            <p className="dark:text-gray-300">Teacher</p>
          </div>
         </div>
          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal dark:text-gray-300">A mind-bending journey into startup innovation. Thiel challenges conventions, advocating for creating unique monopolies.  </p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>   
      </Swiper>

    </div>
  );
};

export default Review;