import React from "react";
import heroImage from "../assets/dp_hero.png";

const HeroSection = () => {
  return (
    <section className='w-full pt-10 min-h-screen bg-gradient-to-r from-[rgb(15,30,68)] via-[#27448D] to-[#3F4088] bg-amber-400-200 text-white md:flex md:items-center md:justify-center'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center  '>
        {/* Text Content */}
        <div className='flex flex-col justify-evenly items-center w-full p-2 md:col-span-1'>
          <h1 className='text-2xl sm:text-6xl md:text-6xl font-extrabold leading-snug md:leading-[1.1] text-wrap'>
            Your{" "}
            <span className=' text-wrap bg-gradient-to-r from-blue-300 via-blue-400 to-violet-500 bg-clip-text inline-block text-transparent'>
              One-stop
            </span>{" "}
            <br /> solution for <br />
            custom prints and <br />
            school accessories
          </h1>

          <div className='mt-4 md:flex pl-5  md:justify-items-start md:items-center pb-8 w-full md:mb-5'>
            <a href='#products'>
              <button className='bg-blue-400 font-semibold py-2 px-7 text-center mt-5 w-full md:w-auto mx-0 rounded-sm md:rounded-4xl hover:bg-blue-500 active:bg-blue-600    hover:cursor-pointer transition-all  mr-10 shadow-2xl hover:scale-110'>
                Products
              </button>
            </a>
            <button className='border border-blue-400 font-semibold text-white text-center mt-5 w-full active:bg-blue-500  md:w-auto mx-0 rounded-sm py-2 px-7 md:rounded-4xl hover:scale-110 hover:cursor-pointer transition-all duration-100 mr-10 shadow-2xl animate-pulse hover:animate-none'>
              Contact Us
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className='md:col-span-1'>
          <img
            src={heroImage}
            alt='Printing Illustration'
            className='float-animation'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
