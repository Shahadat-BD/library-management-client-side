import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import {BiSpreadsheet} from "react-icons/bi"
function BooksByCategory() {
    const bookData = useLoaderData()
    console.log('book data ', bookData);
    return (
        <div className='lg:w-[85%] w-[95%] m-auto mb-14 mt-8'>
             <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                     {
                        bookData.map(book => 
                        <div key={book._id} className='dark:bg-gray-800 dark:text-white bg-gray-100 py-3 rounded-md'>
                           <div className='flex items-center lg:flex-row flex-row gap-5 mx-3'>
                           <img className='lg:w-[250px] lg:h-[200px] m-auto md:w-full md:h-[200px] h-32  rounded-md' src={book.bookImage} alt="" srcset="" />
                             <div className='w-4/5'>
                                <p className='lg:text-2xl text-md font-bold  '>{book.bookName}</p>
                                <p className='lg:my-2 font-bold text-sm'>Author : {book.authorName}</p>
                                <p className='font-bold text-sm'>Category : {book.category}</p>
                                <p className='lg:my-2'>{book.rating}</p>
                               <Link to={`/bookDetails/${book._id}`}>
                               <button className='bg-pink-600 lg:text-md text-sm px-3 py-1 text-white font-bold lg:px-5 lg:py-2 lg:rounded-md rounded-sm flex items-center'><BiSpreadsheet className='lg:text-2xl text-xl'/> Book Details </button>
                               </Link>
                             </div>
                           </div>
                       </div>)
                     }
             </div>
        </div>
    )
}

export default BooksByCategory

