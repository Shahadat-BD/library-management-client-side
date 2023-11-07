import React, { useContext, useState} from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookDetails() {
    const bookDetails = useLoaderData()
    const {bookImage,bookName,quantity,rating,authorName,category,details,_id} = bookDetails

    const {user} = useContext(AuthContext)
    const userName = user?.displayName
    const email = user?.email
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm; 
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    const borrowedDate = formattedToday

    const parseQuantity = parseInt(quantity)
    let decreaseQuantity = parseQuantity

const handleBookBorrow = event =>{
       event.preventDefault()
       const form = event.target
       const returnDate = form.returnDate.value
       const borrowInfo = {returnDate,userName,email,bookImage,bookName,category,borrowedDate,}
       
       fetch('http://localhost:3000/borrowd-books',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(borrowInfo)
         })
         .then(res=> res.json())
         .then(data => {
              if (data.acknowledged) {
                  toast('borrowed books successfully added in database')
              }
         })

            decreaseQuantity = decreaseQuantity - 1
            
         fetch(`http://localhost:3000/books/${_id}`,{
            method :"PATCH",
            headers :{
                "content-type":"application/json"
            },
            body : JSON.stringify({quantity : decreaseQuantity })
         })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount > 0) {
                window.location.reload(true)
            }
         })


}


    return (
        <div className='flex my-10 lg:w-[70%] m-auto md:w-[80%] w-[90%]'>
        <div>
            <div className='flex gap-5 lg:flex-row flex-col items-center'>
            <img className='lg:w-[490px] lg:h-[430px] rounded-md w-full'  src={bookImage} alt="" srcset="" />
           <div>
             <h3 className='font-bold text-pink-600 text-2xl'>{bookName}</h3>    
                <h3  className='text-gray-500 font-medium mt-2 dark:text-white'> <span className='font-bold'>Author Name :</span> {authorName}</h3>    
                <h3  className='text-gray-500 font-medium mt-2 dark:text-[#ffffffc2]'><span className='font-bold'>Quantity :</span>{quantity}</h3>    
                <h3  className='text-gray-500 font-medium mt-2 dark:text-[#ffffffc2]'><span className='font-bold'>Category : </span>{category}</h3>    
                <h3  className='text-gray-500 font-medium mt-2 dark:text-[#ffffffc2]'><span className='font-bold'>Rating :</span> {rating}</h3> 
                <h3  className='text-gray-500 font-medium mt-2 dark:text-[#ffffffc2]'> <span className='font-bold'>Product details : </span> {details.slice(300)}</h3>
                 {/* modal start here */}
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {
                        decreaseQuantity > 0 ?
                        <button className="py-2 rounded-md text-white bg-pink-600 px-16 mt-3" onClick={()=>document.getElementById('my_modal_3').showModal()}>Borrow</button>
                        :
                        <button disabled className="py-2 rounded-md text-white bg-pink-600 px-16 mt-3" onClick={()=>document.getElementById('my_modal_3').showModal()}>Borrow</button>
                    }
                    <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute bg-pink-600 text-white right-2 top-2">✕</button>
                        </form>
                        <form  onSubmit={handleBookBorrow}>
                            <label className='text-pink-600 font-bold'>Write a return date of this book</label>
                            <input className='w-full my-5 px-10 py-2 border-2 rounded-md border-gray-200' required type="date" name="returnDate" id="" />
                            <input className='bg-pink-600 text-white rounded-md px-8 py-2' type="submit" value="Add Borrow" />
                        </form>
                    </div>
                    </dialog>
                 {/* modal end here */}


                <Link to={`/readBook/${_id}`}>
                  <button  className='py-2 ml-3 rounded-md text-white bg-pink-600 px-16 mt-3'>Read</button>
                </Link>
            </div> 
            </div>
        </div>
        <ToastContainer/>
        </div>
        
    )
}

export default BookDetails
