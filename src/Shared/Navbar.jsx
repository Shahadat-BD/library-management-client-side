import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import logo from "../assets/images/logo.png";
const Navbar = () => {

  const { user,logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("user logOut successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const link = <>
    <li className='pr-10'>
      <NavLink 
      className="px-0 rounded-none font-semibold text-md"
      style={({ isActive }) => ({
        color: isActive ? "#FF69B4" : "black",
        borderBottom: isActive ? "2px solid #FF69B4" : "none",
        background: isActive ? "none" : "none",
        fontWeight:"bold"
      })} to={'/'}
      >
        Home
      </NavLink>
      </li>
    <li className='pr-10'>
      <NavLink 
      className="px-0 rounded-none font-semibold text-md"
      style={({ isActive }) => ({
        color: isActive ? "#FF69B4" : "black",
        borderBottom: isActive ? "2px solid #FF69B4" : "none",
        background: isActive ? "none" : "none",
        fontWeight:"bold"
      })} to={'/add-books'}
      >
        Add Books
        </NavLink>
        </li>
    <li className='pr-10'>
      <NavLink 
      className="px-0 rounded-none font-semibold text-md"
      style={({ isActive }) => ({
        color: isActive ? "#FF69B4" : "black",
        borderBottom: isActive ? "2px solid #FF69B4" : "none",
        background: isActive ? "none" : "none",
        fontWeight:"bold"
      })} to={'/all-books'}
      >
        All Books
      </NavLink>
      </li>
    <li className='pr-10'>
      <NavLink 
      className="px-0 rounded-none font-semibold text-md"
      style={({ isActive }) => ({
        color: isActive ? "#FF69B4" : "black",
        borderBottom: isActive ? "2px solid #FF69B4" : "none",
        background: isActive ? "none" : "none",
        fontWeight:"bold"
      })} to={'/borrowed-Books'}
      >
        Borrowed Books
        </NavLink>
        </li>
  </>

  return (
    <div className='lg:w-[85%] w-[95%] m-auto mb-3 mt-2'>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {link}
            </ul>
          </div>
          <Link to={'/'}>
            <div className='flex items-center'>
            <img className='w-20' src={logo} alt="" srcset="" />
            <div>
              <p className='text-3xl font-bold'>
                Book<span className='text-pink-600'>Stack</span>
              </p>
            </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">

          {
            user ?
              <img className="lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6 rounded-full mr-2" src={user.photoURL} alt="" />
              :
              ""

          }
          <p className="mr-3 lg:text-md md:text-md text-xs">{user && user.displayName}</p>
          {user ? (
            <NavLink
              onClick={handleLogOut}
              className="bg-pink-600 text-white lg:px-8 lg:py-3 px-3 py-2 lg:text-md text-xs font-semibold rounded-md"
            >
              LogOut
            </NavLink>
          ) : (
            <NavLink
              to={"/login"}
              className="bg-pink-600 text-white lg:px-8 lg:py-3 px-3 py-2 lg:text-md text-xs font-semibold rounded-md"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;