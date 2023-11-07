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
                        <div key={book._id} className='bg-gray-900 text-white py-3 rounded-md'>
                           <div className='flex items-center lg:flex-row flex-col gap-5 mx-3'>
                           <img className='lg:w-[250px] m-auto md:w-full md:h-[200px] lg:h-[200px] rounded-md' src={book.bookImage} alt="" srcset="" />
                             <div className='w-4/5'>
                                <p className='text-2xl font-bold '>{book.bookName}</p>
                                <p className='my-2 font-bold'>Author : {book.authorName}</p>
                                <p className='font-bold'>Category : {book.category}</p>
                                <p className='my-2'>{book.rating}</p>
                               <Link to={`/bookDetails/${book._id}`}>
                               <button className='bg-pink-600 text-white font-bold px-5 py-2 rounded-md flex items-center'><BiSpreadsheet className='text-2xl'/> Book Details </button>
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

