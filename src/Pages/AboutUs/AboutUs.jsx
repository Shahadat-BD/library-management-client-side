import React from 'react';
import about from '../../assets/images/slider/about.jpg'
const AboutUs = () => {
    return (
        <div>
             <div className="lg:my-20 my-10">
      <div className="flex lg:flex-row flex-col items-center justify-around gap-5">
        <div className="lg:mb-0 mb-10 lg:w-1/3 w-full">
        <img className=" lg:w-[400px] lg:h-[550px] md:h-[500px] md:m-auto md:w-[400px] w-full h-[500px] rounded-lg " src={about} alt=""  />
        </div>
        <div className="lg:w-1/2 w-full">
          <h3 className="text-pink-500 font-semibold text-md">About Us</h3>
          <h5 className="lg:text-4xl text-2xl dark:text-white font-bold my-3">We are qualified &  experience in this filed.how to do library management system.</h5>
          <p className="text-[#737373] dark:text-[#ffffffa1] font-normal lg:w-[90%]">
            
          At BookStack, we are passionate about literature and knowledge. As your trusted partner in the world of books, we specialize in curating an extensive collection of novels, Islamic texts, programming guides, and business-related publications. Our mission is to connect readers with their next great read, offering a diverse range of books to satisfy every literary appetite.
          </p>
          <p className="text-[#737373] dark:text-[#ffffffa1] font-normal lg:w-4/5 my-3">
          With a commitment to quality and excellence, BookStack is your go-to destination for discovering, learning, and immersing yourself in the wonderful world of books. Join us on this literary journey, and let's build a brighter, more enlightened future together.
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md font-semibold">Get More Info</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AboutUs;