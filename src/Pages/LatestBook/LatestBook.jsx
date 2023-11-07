import React from 'react';
import book_1 from "../../assets/images/latest-book/the-hundread.jpg";
import book_2 from "../../assets/images/latest-book/paradoxical-sajid.jpeg";
import book_3 from "../../assets/images/latest-book/show-dog.jpg";
import book_4 from "../../assets/images/latest-book/poter-pachali.png";
const LatestBook = () => {
    return (
        <div>
                            <h1 className='text-3xl font-bold my-10 border-pink-500 border-l-4 pl-4'>Our Latest Book</h1>
              <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 '>
                <div>
                    <img className='h-72 w-full rounded-r-xl ' src={book_1} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2'>The 100</p>
                      <p className='font-bold text-pink-500 text-sm '> Mitchel h. heart</p>
                      <p className='font-bold text-gray-500 text-sm'>category : Islamic </p>
                      <p>4.80</p>
                </div> 
                <div>
                    <img className='h-72 w-full rounded-r-xl ' src={book_2} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2'>The 100</p>
                      <p className='font-bold text-pink-500 text-sm '> Mitchel h. heart</p>
                      <p className='font-bold text-gray-500 text-sm'>category : Islamic </p>
                      <p>4.80</p>
                </div> 
                <div>
                    <img className='h-72 w-full rounded-r-xl ' src={book_3} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2'>The 100</p>
                      <p className='font-bold text-pink-500 text-sm '> Mitchel h. heart</p>
                      <p className='font-bold text-gray-500 text-sm'>category : Islamic </p>
                      <p>4.80</p>
                </div> 
                <div>
                    <img className='h-72 w-full rounded-r-xl ' src={book_4} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2'>The 100</p>
                      <p className='font-bold text-pink-500 text-sm '> Mitchel h. heart</p>
                      <p className='font-bold text-gray-500 text-sm'>category : Islamic </p>
                      <p>4.80</p>
                </div> 
           </div>
        </div>
    );
};

export default LatestBook;