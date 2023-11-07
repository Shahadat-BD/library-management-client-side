import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBook = () => {
    const handleAddBook = event =>{
        event.preventDefault()
        const form = event.target
        const bookName = form.bookName.value
        const authorName =  form.authorName.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const bookImage = form.bookImage.value
        const details = form.details.value
        const category = form.category.value
        const readBook = form.readBook.value
         
        const bookInfo = {bookName,readBook,authorName,rating,quantity,bookImage,details,category}
        console.log(bookInfo);

         fetch('http://localhost:3000/books-add',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(bookInfo)
         })
         .then(res=> res.json())
         .then(data => {
              if (data.acknowledged) {
                  toast('this book successfully added in database')
              }
         })
    }
    return (
        <div>
            <div className='lg:w-[50%] rounded-md m-auto md:w-[70%] w-full md:my-[185px] lg:my-10  bg-gray-200'>
             <h3 className='text-2xl text-pink-600 font-bold p-3 text-center'>Add New Book</h3>
            <form onSubmit={handleAddBook} className='px-5 py-5'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                <input className='py-2 pl-2  rounded-sm' type="text" required placeholder='book name' name="bookName" id="" />
                <input className='py-2 pl-2  rounded-sm' type="text" required placeholder='Author name' name="authorName" id="" />
                <input className='py-2 pl-2  rounded-sm' type='number'  min="0" max="1000" step="0.01" placeholder='rating' name="rating" id="" />
                <input className='py-2 pl-2  rounded-sm' type="number" required placeholder='book quantity' name="quantity" id="" />
                <select name="category" id="">
                    <option value="islamic">islamic</option>
                    <option value="Programming">Programming</option>
                    <option value="Novel">Novel</option>
                    <option value="Business">Business</option>
                </select>
                <input className='py-2 pl-2  rounded-sm' type="text" required placeholder='Book details' name="details" id="" />
                </div>
                <input className='w-full my-3 py-2 pl-2  rounded-sm' type="text" required placeholder='book image link here' name="bookImage" id="" /> 
                <textarea  className='pl-2 mb-3 w-full  rounded-sm' placeholder='Write some part of the book' name="readBook" id="" rows="5"/>
                <input className='w-full cursor-pointer bg-pink-600 text-white py-2 font-bold rounded-sm' type="submit" value="Add Book" />

            </form>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default AddBook;