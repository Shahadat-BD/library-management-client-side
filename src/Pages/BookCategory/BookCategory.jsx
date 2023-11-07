import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookCategory = () => {
    const [categoryBook,setCategoryBook] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/book_category')
        .then(res => res.json())
        .then(data => {
            setCategoryBook(data)
        })
    },[])
    return (
        <div className='my-20'>
                <h1 className='text-3xl font-bold  border-pink-500 border-l-4 pl-4 mb-10'>Books Category</h1>

             <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
             {
                categoryBook.map(category => 
                        <div key={category._id} className='border p-3 border-gray-200 rounded-md'>
                             <img className='h-[180px] w-full rounded-md' src={category.image} alt="" srcset="" />
                              <h3 className='text-xl my-2 font-bold '>{category.category}</h3>
                            <Link to={`/books/${category.category}`} > <button className='px-5 py-2 text-white bg-pink-600 rounded-md '>show books</button></Link>
            
                        </div>
                )
              }
             </div>
        </div>
    );
};

export default BookCategory;