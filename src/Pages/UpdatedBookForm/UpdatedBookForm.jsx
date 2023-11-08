import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from '../../hook/useAxiosSecure';

function UpdatedBookForm() {
 const updateBook = useParams()
const [updatedBook,setUpdatedBook] = useState([])
const axiosSecure = useAxiosSecure()
        useEffect(()=>{
                axiosSecure.get('/books-add')
                .then(res => { 
                  const bookUpdate = res.data.find(bookUpdate => bookUpdate._id === updateBook.id)
                  setUpdatedBook(bookUpdate)
                })
        },[])

    const  {bookImage,bookName,category,rating,authorName} = updatedBook

    const handleUpdateBook = event => {
        event.preventDefault()
        const form = event.target
        const bookName = form.bookName.value
        const authorName =  form.authorName.value
        const rating = form.rating.value
        const bookImage = form.bookImage.value
        const category = form.category.value
       
        const bookUpdateInfo = {bookImage,bookName,category,rating,authorName}
        
        axiosSecure.put(`/books-add/${updateBook.id}`,bookUpdateInfo)
        .then(res =>{
            if (res.data.acknowledged) {
                toast("book successfully updated.")        
            }
        })

    }

    return (
        <div>
            <div className='lg:w-[45%] m-auto md:w-[70%] w-full md:my-[185px] lg:my-10  bg-gray-200 rounded-md'>
             <h3 className='text-2xl text-pink-600 font-bold p-3 text-center'>Add Update Book</h3>
            <form onSubmit={handleUpdateBook} className='px-7 py-7'>
                <div className='grid grid-cols-1 gap-5'>
                <input className='py-2 pl-2  rounded-sm' type="text" required defaultValue={bookName} placeholder='book name' name="bookName" id="" />
                <input className='py-2 pl-2  rounded-sm' type="text" required defaultValue={authorName} placeholder='Author name' name="authorName" id="" />
                <input className='py-2 pl-2  rounded-sm' type='number' required defaultValue={rating}  min="0" max="1000" step="0.01" placeholder='rating' name="rating" id="" />
                <select name="category"  id="" className='py-2 pl-2'>
                    <option value="islamic">{category}</option>
                    <option value="islamic">islamic</option>
                    <option value="Programming">Programming</option>
                    <option value="Novel">Novel</option>
                    <option value="Business">Business</option>
                </select>
                </div>
                <input className='w-full my-3 py-2 pl-2  rounded-sm' type="text" required defaultValue={bookImage} placeholder='book image link here' name="bookImage" id="" /> 
                <input className='w-full cursor-pointer bg-pink-600 text-white py-2 font-bold rounded-sm' type="submit" value="update Book" />
            </form>
        </div>
        <ToastContainer/>
        </div>
    )
}

export default UpdatedBookForm
