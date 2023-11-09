import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner-added'>
    <div className='flex justify-center items-center lg:h-[500px] h-[350px]'>
        <div className='text-center' 
           >
            <h1 className='lg:w-[70%] md:w-[65%] m-auto lg:text-6xl md:text-4xl text-3xl text-center text-white font-semibold'>Welcome to my<span  className='text-pink-500'> Library management system</span> website </h1>
        <button
            className='text-white bg-pink-500 lg:px-8 lg:py-3 px-4 py-2  lg:mt-10 mt-5 font-bold lg:text-lg text-md items-center '>Explore Now <AiOutlineArrowRight className='float-right lg:mt-[3px] mt-1  lg:text-2xl'/> </button>
        </div>
    </div>
</div>
  );
};

export default Banner;