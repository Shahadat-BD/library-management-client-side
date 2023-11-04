import React from 'react'
import { useLoaderData } from 'react-router-dom'

function BooksByCategory() {
    const bookData = useLoaderData()
    console.log('book data ', bookData);
    return (
        <div>
             <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                     {
                        bookData.map(book => 
                        <div key={book._id}>
                            <img src={book.bookImage} alt="" srcset="" />
                             <p>{book.bookName}</p>
                             <p>{book.authorName}</p>
                       </div>)
                     }
             </div>
        </div>
    )
}

export default BooksByCategory

