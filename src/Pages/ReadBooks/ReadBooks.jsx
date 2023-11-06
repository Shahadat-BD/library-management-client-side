import React, { useRef } from 'react'
import { useLoaderData } from 'react-router-dom'

function ReadBooks() {
    const bookForRead =  useLoaderData()
    const {readBook,authorName,bookName} = bookForRead
    return (
        <div className='lg:w-[85%] w-[95%] m-auto mb-14 mt-8'>
           
            <h1 className='text-3xl font-bold'>{bookName}</h1>
            <h1 className='text-lg font-bold text-gray-600 mt-1 mb-5'>Author : {authorName}</h1>
            <h1>{readBook}</h1>

 
        </div>
    )
}

export default ReadBooks
