import React from "react";
import logo from "../assets/logo.png";

const FooterSection = () => {
  return (
    <div className='w-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-950 text-white'>
      <div className='grid max-w-7xl m-auto grid-cols-1 md:grid-cols-2    gap-8 px-8 py-12 md:px-20 md:py-20'>
        <div className='flex items-center gap-4'>
          <img src={logo} alt='Logo' className='h-12 w-auto object-contain' />
          <div>
            <h2 className='text-xl font-bold'>Design Planet</h2>
            <p className='text-sm text-gray-300 italic'>
              Your Vision, Perfectly Printed.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:items-end gap-2'>
          <a href='#' className='text-gray-200 hover:underline'>
            Privacy Policy
          </a>
          <a href='#' className='text-gray-200 hover:underline'>
            Terms of Service
          </a>
          <p>Contact Us</p>
          <a href='#' className='text-gray-200 hover:underline'>
            8309-343720/7569-442818
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
