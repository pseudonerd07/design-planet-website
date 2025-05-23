import React from "react";
import logo from "../assets/dlogo.png";
import { useNavigate, useLocation } from "react-router-dom";
const FooterSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goContactUs = () => {
    navigate("/contact");
  };

  const goHome = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  };

  const goProducts = () => {
    navigate("/products");
  };

  return (
    <div className='w-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-950 text-white'>
      <div className='grid max-w-7xl m-auto grid-cols-1 md:grid-cols-3    gap-8 px-8 py-12 md:px-20 md:py-20'>
        <div className='flex items-center gap-4'>
          <img src={logo} alt='Logo' className='h-18 w-auto object-contain' />
          <div>
            <h2 className='text-xl font-bold'>Design Planet</h2>
            <p className='text-sm text-gray-300 italic'>
              Your Vision, Perfectly Printed.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:items-center gap-2'>
          <a onClick={goHome} className='text-gray-200 hover:underline'>
            Home
          </a>
          <a onClick={goProducts} className='text-gray-200 hover:underline'>
            Products
          </a>
          <a onClick={goContactUs} className='text-gray-200 hover:underline'>
            Address
          </a>
        </div>
        <div className='flex flex-col md:items-end gap-2'>
          <a href='#' className='text-gray-200 hover:underline'>
            Privacy Policy
          </a>
          <a href='#' className='text-gray-200 hover:underline'>
            Terms of Service
          </a>
          <a href='#' onClick={goContactUs}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
