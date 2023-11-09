import React from 'react';
import { Link } from 'react-router-dom';
import notFound from "../assets/images/404/not found.jpg";
const NotFound = () => {
    return (
            <div className='text-center lg:mt-0 mt-20'>
             <img className='lg:h-[500px] lg:w-1/2 w-[90%] m-auto' src={notFound} alt="" srcset="" />
                    <Link to={'/'}> <button className='text-white bg-pink-500 px-10 py-2 rounded-md'>Go To Home</button> </Link>
            </div>
    );
};

export default NotFound;