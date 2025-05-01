import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo from "../assets/dlogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const goHome = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  };

  const goContactUs = () => {
    navigate("/contact");
  };

  const goProducts = () => {
    navigate("/products");
    window.scrollTo(0, 0);
  };

  return (
    <nav className='w-full bg-gradient-to-r from-[rgb(15,30,68)] via-[#27448D] to-[#3F4088] text-white shadow-md fixed top-0 left-0 z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 md:px-14 py-2'>
        {/* Logo */}
        <div className='flex flex-row justify-around items-center'>
          <div>
            <img
              src={logo}
              alt='logo-icon'
              onClick={goHome}
              className='w-auto h-14 mt-1 cursor-pointer'
            />
          </div>
          <div
            onClick={goHome}
            className='hidden md:block text-2xl font-extrabold leading-snug md:leading-[1.1] text-wrap cursor-pointer'
          >
            Design Planet
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8 text-lg font-medium'>
          <a
            onClick={goHome}
            className={`hover:text-blue-400  ${
              location.pathname !== "/" ? "text-white" : " text-blue-300"
            } transition-colors duration-300 hover:cursor-pointer`}
          >
            Home
          </a>
          <a
            onClick={goProducts}
            className={`hover:text-blue-400  ${
              location.pathname !== "/products" ? "text-white" : "text-blue-300"
            } transition-colors duration-300 hover:cursor-pointer`}
          >
            Products
          </a>
          <a
            href='#about'
            className={`hover:text-blue-400  ${
              location.pathname !== "/about" ? "text-white" : "text-blue-300"
            } transition-colors duration-300 hover:cursor-pointer`}
          >
            About
          </a>
          <a
            onClick={goContactUs}
            className={`hover:text-blue-400  ${
              location.pathname !== "/contact" ? "text-white" : "text-blue-300"
            } transition-colors duration-300 hover:cursor-pointer`}
          >
            Contact
          </a>
        </div>

        <div className='md:hidden'>
          <button
            className='text-3xl text-white focus:outline-none transition-transform duration-300 transform hover:scale-110'
            onClick={toggleMenu}
          >
            {isMenuOpen ? <IoCloseCircleOutline /> : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-gradient-to-r from-[rgb(15,30,68)] via-[#27448D] to-[#3F4088] px-6 pb-4 flex flex-col space-y-4 text-lg font-medium'>
          <a className='hover:text-blue-400' onClick={goHome}>
            Home
          </a>
          <a
            href='#products'
            className='hover:text-blue-400'
            onClick={goProducts}
          >
            Products
          </a>
          <a href='#about' className='hover:text-blue-400' onClick={toggleMenu}>
            About
          </a>
          <a className='hover:text-blue-400' onClick={goContactUs}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
