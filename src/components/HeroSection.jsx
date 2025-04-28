import React from "react";
import heroImage from "../assets/dp_hero.png";
import { useNavigate, useLocation } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goProducts = () => {
    navigate("/products");
  };

  const goContactUs = () => {
    navigate("/contact");
  };
  return (
    <section
      id='home'
      className='w-full overflow-x-hidden pt-10 min-h-screen bg-gradient-to-r from-[rgb(15,30,68)] via-[#27448D] to-[#3F4088] text-white md:flex md:items-center md:justify-center'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-10 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center'>
        {/* Text Content */}
        <div className='flex flex-col justify-evenly items-center w-full p-2 md:col-span-1'>
          <h1 className='text-2xl sm:text-6xl md:text-6xl font-extrabold leading-snug md:leading-[1.1] text-wrap text-center md:text-left'>
            Your{" "}
            <span className='bg-gradient-to-r from-blue-300 via-blue-400 to-violet-500 bg-clip-text text-transparent'>
              One-stop
            </span>{" "}
            <br /> solution for <br />
            custom prints and <br />
            school accessories
          </h1>

          <div className='mt-4 md:flex pl-5 md:pl-5 md:justify-start md:items-center pb-8 w-full md:mb-5'>
            <button
              onClick={goProducts}
              className='bg-blue-400 font-semibold py-2 px-7 text-center mt-5 w-full md:w-auto mx-0 rounded-sm md:rounded-3xl hover:bg-blue-500 active:bg-blue-600 hover:cursor-pointer transition-all md:mr-10 shadow-2xl hover:scale-110'
            >
              Products
            </button>

            <button
              onClick={goContactUs}
              className='border border-blue-400 font-semibold text-white text-center mt-5 w-full md:w-auto mx-0 rounded-sm py-2 px-7 md:rounded-3xl hover:scale-110 hover:cursor-pointer transition-all duration-100 md:mr-10 shadow-2xl animate-pulse hover:animate-none'
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className='md:col-span-1 flex justify-center'>
          <img
            src={heroImage}
            alt='Printing Illustration'
            className='float-animation max-w-full h-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
