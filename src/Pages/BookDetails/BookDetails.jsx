import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


function BookDetails() {
    const bookDetails = useLoaderData()
    const {bookImage,bookName,quantity,rating,authorName,category,details,_id} = bookDetails
    return (
        <div className='flex my-10 lg:w-[70%] m-auto md:w-[80%] w-[90%]'>
        <div>
            <div className='flex gap-5 lg:flex-row flex-col'>
            <img className='lg:w-[490px] lg:h-[430px] rounded-md w-full'  src={bookImage} alt="" srcset="" />
           <div>
             <h3 className='font-bold text-red-500 text-2xl'>{bookName}</h3>    
                <h3  className='text-gray-500 font-medium mt-2'> <span className='font-bold'>Author Name :</span> {authorName}</h3>    
                <h3  className='text-gray-500 font-medium mt-2'><span className='font-bold'>Quantity :</span>{quantity}</h3>    
                <h3  className='text-gray-500 font-medium mt-2'><span className='font-bold'>Category : </span>{category}</h3>    
                <h3  className='text-gray-500 font-medium mt-2'><span className='font-bold'>Rating :</span> {rating}</h3> 
                <h3  className='text-gray-500 font-medium mt-2 '> <span className='font-bold'>Product details : </span> {details}</h3> 
                <button  className='py-2 rounded-md text-white bg-red-500 px-16 mt-3'>Borrow</button> <br />
                <Link to={`/readBook/${bookName}`}>
                  <button  className='py-2 rounded-md text-white bg-red-500 px-16 mt-3'>Read</button>
                </Link>
            </div> 
            </div>
        </div>
        </div>
    )
}

export default BookDetails
