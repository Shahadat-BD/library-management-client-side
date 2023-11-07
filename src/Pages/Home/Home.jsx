import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import BookCategory from '../BookCategory/BookCategory';
import Review from '../Review/Review';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='lg:w-[85%] w-[95%] m-auto mb-14 mt-8'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <BookCategory></BookCategory>
            <ContactUs></ContactUs>
            <Review></Review>
        </div>
    );
};

export default Home;