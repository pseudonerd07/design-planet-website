import React from "react";

import FooterSection from "./FooterSection";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiOutlinePhone } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import AddressMap from "./AddressMap";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div className='bg-gradient-to-r min-h-screen from-[rgb(15,30,68)] via-[#27448D] to-[#3F4088] flex flex-col'>
      <Navbar />
      <div className='h-20'></div>
      <div className=' max-w-7xl mb-10   m-auto'>
        <h1 className='text-4xl md:text-6xl font-semibold text-center p-10 text-amber-50'>
          Contact Us
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-7  mx-4 md:m-8 gap-10 items-stretch'>
          <div className='flex flex-col col-span-4 bg-white rounded-4xl h-full'>
            <div className='p-10'>
              <div className=''>
                <div className='flex flex-row justify-start items-center '>
                  <FaMapLocationDot className='text-gray-950 size-6 md:size-10 mx-4 my-2 ' />
                  <h1 className='text-md md:text-2xl font-semibold text-gray-950 md:hover:text-3xl transition-all duration-300'>
                    Location
                  </h1>
                </div>
                <p className='mx-4 font-semibold text-gray-600  text-md md:text-xl text-wrap'>
                  # H.No. 1-8-17/A/1,Street No.12, Pillar No: 1132, Opp: Aurora
                  College, Chikkadpally-500020
                </p>
              </div>
              <div className='text-wrap'>
                <div className='flex flex-row justify-start items-center '>
                  <AiOutlinePhone className='text-gray-950 size-6 md:size-10  mx-3 my-2 hover:text-3xl transition-all duration-300' />
                  <h1 className='text-md md:text-2xl font-semibold text-gray-950 md:hover:text-3xl transition-all duration-300'>
                    Phone Number
                  </h1>
                </div>
                <p className='mx-4 font-semibold text-gray-600  text-md md:text-xl text-wrap'></p>
                <ul className='mx-4 font-semibold text-gray-600  text-md md:text-xl text-wrap '>
                  <li>9000995182</li>
                  <li>9949912478</li>
                </ul>
              </div>
              <div className='text-wrap'>
                <div className='flex flex-row justify-start items-center '>
                  <TfiEmail className='text-gray-950 size-6 md:size-10 mx-4 my-2 ' />
                  <h1 className='text-md md:text-2xl font-semibold text-gray-950 md:hover:text-3xl transition-all duration-300'>
                    Email
                  </h1>
                </div>
                <p className='mx-4 font-semibold text-gray-600  text-md md:text-xl text-wrap'>
                  designplanet2024@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className='p-2 bg-gray-800 md:h-full w-full h-[400px]  col-span-3 rounded-4xl flex justify-center items-center ml-3 md:ml-0'>
            <AddressMap />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Contact;
