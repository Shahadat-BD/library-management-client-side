import React from 'react';
import book_1 from "../../assets/images/latest-book/the-hundread.jpg";
import book_2 from "../../assets/images/latest-book/paradoxical-sajid.jpeg";
import book_3 from "../../assets/images/latest-book/show-dog.jpg";
import book_4 from "../../assets/images/latest-book/poter-pachali.png";
const LatestBook = () => {
    return (
        <div>
                            <h1 className='text-3xl font-bold my-10 border-pink-500 border-l-4 pl-4 dark:text-white'>Our Latest Book</h1>
              <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 '>
                <div className='px-7'>
                    <img className='h-72 w-full  rounded-r-xl ' src={book_1} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2 dark:text-white'>The 100</p>
                      <p className='font-bold text-pink-500 text-sm '> Mitchel h. heart</p>
                      <p className='font-bold text-gray-500 text-sm'>category : Islamic </p>
                       <div className="rating w-1/3 m-auto">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
                </div> 
                <div className='px-7'>
                    <img className='h-72 w-full  rounded-r-xl ' src={book_2} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2 dark:text-white'>Paradoxical Sajid</p>
                      <p className='font-bold text-pink-500 text-sm '> Arif Azad</p>
                      <p className='font-bold text-gray-500 text-sm'>category : Islamic </p>
                       <div className="rating w-1/3 m-auto">
                        <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                     </div>
                </div> 
                <div className='px-7'>
                    <img className='h-72 w-full  rounded-r-xl ' src={book_3} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2 dark:text-white'>Shoe Dog</p>
                      <p className='font-bold text-pink-500 text-sm '>Phil Knight</p>
                      <p className='font-bold text-gray-500 text-sm'>category : Business </p>
                       <div className="rating w-1/3 m-auto">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
                </div> 
                <div className='px-7'>
                    <img className='h-72 w-full  rounded-r-xl ' src={book_4} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2 dark:text-white'>Pother Pachali</p>
                      <p className='font-bold text-pink-500 text-sm '> Bibotivoshon Bpd</p>
                      <p className='font-bold text-gray-500 text-sm'>category : Novel </p>
                       <div className="rating w-1/3 m-auto">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
                </div> 
           </div>
        </div>
    );
};

export default LatestBook;