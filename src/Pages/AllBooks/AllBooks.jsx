import React, {useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BiEdit , BiSpreadsheet} from "react-icons/bi";
const AllBooks = () => {
    const useAllBookLoader = useLoaderData()
    console.log(useAllBookLoader);
    const [allBooks,setAllBooks] = useState(useAllBookLoader)
    
    const handleAvailableQuantity = () => {
         const availableQuantity = useAllBookLoader.filter(allBook => allBook.quantity > 0)
          setAllBooks(availableQuantity)
    }

    return (
        <div className='lg:w-[85%] w-[75%] m-auto mb-10 mt-8'>

                  <button onClick={()=>handleAvailableQuantity()} className="font-bold bg-gray-200 px-8 py-2 mb-10 rounded-md">Available Books</button>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10'>
            {
                allBooks.map(allBook => 
                <div key={allBook._id}>
                    <img className='h-72 w-full rounded-r-xl ' src={allBook.bookImage} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2 dark:text-white'>{allBook.bookName}</p>
                      <p className='font-bold text-pink-500 text-sm '> {allBook.authorName}</p>
                      <p className='font-bold text-gray-500 text-sm'>category : {allBook.category}</p>
                      <p>{allBook.rating}</p>
                    
                    <div className='flex'>
                    <Link to={`/updateBook/${allBook._id}`}>
                    <button className='text-white bg-pink-500 px-2 py-2 rounded-md mr-5 flex items-center'> <BiEdit className='text-xl'/>update</button>
                    </Link>
                    
                    <Link to={`/bookDetails/${allBook._id}`}>
                    <button className='text-white bg-pink-500  px-2 py-2 rounded-md flex items-center'> <BiSpreadsheet className='text-xl'/>details</button>
                    </Link>
                    </div>
                </div> 
                )
            }
           </div>
        </div>
    )
};

export default AllBooks;