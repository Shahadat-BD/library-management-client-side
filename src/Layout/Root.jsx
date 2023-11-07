import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div className='dark:bg-[#111b20]'>
             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;