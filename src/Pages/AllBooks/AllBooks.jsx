import React, {useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { BiEdit , BiSpreadsheet} from "react-icons/bi";
import useAxiosSecure from '../../hook/useAxiosSecure';
const AllBooks = () => {
    const [allBooks,setAllBooks] = useState([])
    const axiosSecure = useAxiosSecure()
     useEffect(()=>{
        axiosSecure.get('/books-add')
        .then(res =>  setAllBooks(res.data))
     },[])

    
    const handleAvailableQuantity = () => {
         const availableQuantity = allBooks.filter(allBook => allBook.quantity > 0)
          setAllBooks(availableQuantity)
    }

    return (
        <div className='lg:w-[85%] w-[75%] m-auto mb-10 mt-8'>

                  <button onClick={()=>handleAvailableQuantity()} className="font-bold bg-gray-200 px-8 py-2 mb-10 rounded-md">Available Books</button>

            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10'>
            {
                allBooks.map(allBook => 
                <div key={allBook._id}>
                    <img className='lg:h-72 h-80 w-full rounded-r-xl ' src={allBook.bookImage} alt="" srcset="" />
                     <p className='text-lg font-bold mt-2 dark:text-white'>{allBook.bookName}</p>
                      <p className='font-bold text-pink-500 text-sm '> {allBook.authorName}</p>
                      <p className='font-bold text-gray-500 dark:text-gray-300 text-sm'>category : {allBook.category}</p>
                      <p className='dark:text-gray-300'>Rating : {allBook.rating}</p>
                    
                    <div className='flex'>
                    <Link to={`/updateBook/${allBook._id}`}>
                    <button className='text-white bg-pink-500 px-2 py-2 rounded-md mr-5 flex text-xs items-center'> <BiEdit className='text-lg'/>update</button>
                    </Link>
                    
                    <Link to={`/bookDetails/${allBook._id}`}>
                    <button className='text-white bg-pink-500  px-2 py-2 rounded-md flex text-xs items-center'> <BiSpreadsheet className='text-lg'/>details</button>
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