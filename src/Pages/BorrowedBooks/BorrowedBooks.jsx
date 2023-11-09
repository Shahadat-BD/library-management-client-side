import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BorrowedTable from '../BorrowedTable/BorrowedTable';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from '../../hook/useAxiosSecure';
const BorrowedBooks = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [borrowedBooks,setBorrowedBooks] = useState([])
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch(`https://y-psi-two.vercel.app/borrowd-books?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setBorrowedBooks(data)
        })
    },[])
    useEffect(()=>{
        axiosSecure.get('/books-add')
        .then(res => setBooks(res.data))
    },[])
   


   const handleReturnButton = (id , bookName)=> {
    const findBook = books.find(book => book.bookName === bookName) 
    console.log("return book after macth of bookname ",findBook);
    let quantity = findBook.quantity + 1 ;
    console.log("borrow book item id",findBook._id);
    console.log("quantity after return",quantity);
    
           axiosSecure.patch(`/books/${findBook._id}`,{quantity : quantity })
           .then(res => {
            if (res.data.modifiedCount > 0) {
                toast('book return successfully')
            }
         })
       
         fetch(`https://y-psi-two.vercel.app/borrowd-books/${id}`,{
            method :"DELETE"
         })
         .then(res => res.json())
         .then(data => {
                if (data.deletedCount > 0) {
                    const remainingBorrowed =  borrowedBooks.filter(borrowed => borrowed._id !== id)
                    setBorrowedBooks(remainingBorrowed)
                }
         })

   }

    return (

         <div className='lg:w-[85%] m-auto w-[95%] mt-5 mb-10'>
             {
                borrowedBooks.length > 0 ? 
                <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-black dark:text-white font-bold'>Image</th>
                            <th className='text-black dark:text-white font-bold'>Name</th>
                            <th className='text-black dark:text-white font-bold'>Borrowed Date</th>
                            <th className='text-black dark:text-white font-bold'>Category</th>
                            <th className='text-black dark:text-white font-bold'>Return Date</th>
                            <th className='text-black dark:text-white font-bold'>Borrowed Return</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                
                                borrowedBooks.map(borrowed => <BorrowedTable key={borrowed._id} borrowed={borrowed} handleReturnButton={handleReturnButton} ></BorrowedTable>)

                        }

                    </tbody>


                </table>
                <ToastContainer/>
            </div>
                :
                <div className='lg:w-1/2 m-auto text-center lg:my-32'>
                    <p className='text-red-500 font-bold text-2xl mb-2'>Sorry you didn't borrow any books !</p>
                    <p className='lg:w-2/3 m-auto font-bold dark:text-white'>So if you want to borrow books, please go to the home page.
                     and choose your favorite category</p>
                </div>
             }
        </div>
    );
};

export default BorrowedBooks;


