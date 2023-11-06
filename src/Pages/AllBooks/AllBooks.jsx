import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllBooks = () => {
    const useAllBookLoader = useLoaderData()
    console.log(useAllBookLoader);
    const [allBooks,setAllBooks] = useState(useAllBookLoader)
    
    const handleAvailableQuantity = () => {
         const availableQuantity = useAllBookLoader.filter(allBook => allBook.quantity > 0)
          setAllBooks(availableQuantity)
    }

    return (
        <div className='lg:w-[85%] w-[95%] m-auto mb-10 mt-8'>

                  <button onClick={()=>handleAvailableQuantity()} className="font-bold bg-gray-200 px-8 py-2 mb-10 rounded-md">Available Books</button>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3'>
            {
                allBooks.map(allBook => 
                <div key={allBook._id} className='bg-gray-100 p-5 rounded-md'>
                    <img className='h-52 w-full rounded-md' src={allBook.bookImage} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2'>{allBook.bookName}</p>
                      <p className='font-bold text-gray-500 text-sm'>Author : {allBook.authorName}</p>
                      <p className='font-bold text-gray-500 text-sm'>category : {allBook.category}</p>
                      <p>{allBook.rating}</p>
                      <button className='text-white bg-pink-500 px-10 py-2 rounded-md w-full'>Update</button>
                </div> 
                )
            }
        </div>
        </div>
    )
};

export default AllBooks;