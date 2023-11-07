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
              <h1 className='text-3xl font-bold my-10 border-pink-500 border-l-4 pl-4'> Books Category</h1>

             <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
             {
                categoryBook.map(category => 
                <Link to={`/books/${category.category}`} >
                    <div key={category._id} className='text-center relative'>
                        <img className='h-[200px] w-full rounded-md' src={category.image} alt="" srcset="" />
                        <div className='absolute text-white -mt-11 rounded-b-md bg-pink-500 w-full'>
                            <h3 className='text-xl my-2 font-bold '>{category.category}</h3>
                        </div>
                    </div>
                </Link>
                )
              }
             </div>
        </div>
    );
};

export default BookCategory;