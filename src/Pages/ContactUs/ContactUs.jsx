import React from 'react'
import contact from '../../assets/images/slider/contactUs.png';
function ContactUs() {
    return (
        <div>
            <h1 className='text-3xl font-bold dark:text-white border-pink-500 border-l-4 pl-4'>Get In Touch</h1>
           
            <div className="flex lg:flex-row flex-col-reverse items-center  justify-around gap-5">
        <div className="lg:w-[45%] w-full">
        <form className='rounded-md shadow-lg p-5 dark:bg-white'>
                <h2 className='text-pink-500 text-center font-bold text-2xl my-3'>Contact Us</h2>
                <input className='form-control bg-gray-200 w-full rounded-sm p-2 mb-2' type="name" placeholder='write you name' />
                <input className='form-control bg-gray-200 w-full rounded-sm p-2 mb-2' type="email" name="email" placeholder='write your email'  id="" />
                <input className='form-control bg-gray-200 w-full rounded-sm p-2 mb-2' type="number" name="phone number" placeholder='phone number' id="" />
                <textarea className='form-control bg-gray-200 w-full rounded-sm p-2 mb-2' name="message" placeholder='write your message' id="" cols="30" rows="5"></textarea>
                <button disabled className='bg-pink-500 w-full py-2 rounded-sm text-white'>Send Message</button>
             </form>
        </div>
        <div className="lg:mb-0">
        <img className="lg:w-[500px] w-full h-[390px] lg:h-[550px] rounded-lg " src={contact} alt=""  />
             
        </div>
      </div>

        </div>
    )
}

export default ContactUs
