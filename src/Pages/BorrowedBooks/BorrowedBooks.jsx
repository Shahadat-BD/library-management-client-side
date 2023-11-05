import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BorrowedTable from '../BorrowedTable/BorrowedTable';

const BorrowedBooks = () => {
    const {user} = useContext(AuthContext)
    const [borrowedBooks,setBorrowedBooks] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/borrowd-books?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setBorrowedBooks(data)
        })
    },[])
    return (
            <div className='lg:w-[85%] m-auto w-[95%] mt-5 mb-10'>
            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-black font-bold'>Image</th>
                            <th className='text-black font-bold'>Name</th>
                            <th className='text-black font-bold'>Borrowed Date</th>
                            <th className='text-black font-bold'>Category</th>
                            <th className='text-black font-bold'>Return Date</th>
                            <th className='text-black font-bold'>Borrowed Return</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             borrowedBooks.map(borrowed => <BorrowedTable key={borrowed._id} borrowed={borrowed} ></BorrowedTable>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;