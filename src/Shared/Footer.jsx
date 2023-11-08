import React from 'react';
import logo from "../assets/images/logo.png";

import icon_1 from "../assets/icon/gogle.png";
import icon_2 from "../assets/icon/indin.png";
import icon_3 from "../assets/icon/twitter.png";
import icon_4 from "../assets/icon/instragram.png";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 dark:bg-gray-800 dark:text-white bg-gray-800 text-white">
  <aside >
            <div className='flex items-center'>
            <img className='w-20 -ml-5 lg:-ml-5' src={logo} alt="" srcset="" />
            <div>
              <p className='lg:text-3xl text-2xl font-bold dark:text-white'>
                Book<span className='text-pink-500'>Stack</span>
              </p>
            </div>
            </div>
            <p className='text-[#E8E8E8] mt-2 w-full'>At BookStack, we are passionate  about <br /> literature  and knowledge.As your trusted <br />partner in the world of books,  </p>
   

  </aside> 
  <nav >
    <header className="text-lg font-bold dark:text-pink-500">Services</header> 
    <a className="link link-hover">Novel Book</a> 
    <a className="link link-hover">Islamic Book</a> 
    <a className="link link-hover">Business Book</a> 
    <a className="link link-hover">Programming Book</a>
  </nav> 
  <nav>
    <header className="text-lg font-bold dark:text-pink-500">Our Section</header> 
    <a className="link link-hover">All Books</a> 
    <a className="link link-hover">Add Books</a> 
    <a className="link link-hover">Borrowed Books</a> 
    <a className="link link-hover">About Us</a>
  </nav> 
  <nav >
  <form>
            <header className="text-white dark:text-pink-500 font-bold text-xl ">
              Contact Us
            </header>
            <fieldset className="form-control lg:w-80 md:w-full w-80">
              <label className="label">
                <span className="text-white ">Enter your email address</span>
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full "
                />
                <button className="bg-pink-500 h-12 px-4 rounded-r-md font-bold text-white absolute top-0 right-0">
                  Subscribe
                </button>
                <div className='flex gap-2 mt-5'>
   <img className='w-8 h-8 rounded-full bg-pink-500 p-2' src={icon_1} alt=""  />
    <img className='w-8 h-8 rounded-full bg-pink-500 p-2' src={icon_2} alt=""  />
    <img className='w-8 h-8 rounded-full bg-pink-500 p-2' src={icon_3} alt=""  />
    <img className='w-8 h-8 rounded-full bg-pink-500 p-2' src={icon_4} alt=""  />
   </div>
              </div>
            </fieldset>
          </form>
  </nav>
</footer>
        </div>
    );
};

export default Footer;