import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
const Accoridan = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const toggleOne = () => {
    setOne(!one);
    setTwo(false);
    setThree(false);
  };
  const toggleTwo = () => {
    setTwo(!two);
    setOne(false);
    setThree(false);
  };
  const toggleThree = () => {
    setThree(!three);
    setOne(false);
    setTwo(false);
  };
  return (
    <div className='flex flex-col h-full w-full text-center justify-center'>
      <div className='shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl mb-2 '>
        <div className='grid grid-cols-12 '>
          <h2
            onClick={() => {
              toggleOne();
            }}
            className=' col-span-10 p-5 text-left text-lg sm:text-xl font-semibold hover:cursor-pointer'
          >
            Why choose us?
          </h2>
          <div
            onClick={() => {
              toggleOne();
            }}
            className=' col-span-2 w-full h-full flex justify-center items-center hover:cursor-pointer'
          >
            {one === true ? (
              <FaAngleUp className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            ) : (
              <FaAngleDown className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            )}
          </div>
          {one && (
            <div className='col-span-12 words-break py-5 px-8'>
              <p className='text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                architecto id natus sint quis voluptatibus officia unde! Odit,
                numquam necessitatibus aspernatur amet a modi consectetur
                corporis alias maxime pariatur! Deleniti!
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl mb-2 '>
        <div className='grid grid-cols-12 '>
          <h2
            onClick={toggleTwo}
            className='col-span-10 p-5 text-left text-lg sm:text-xl font-semibold hover:cursor-pointer'
          >
            Can you print custom sizes or shapes?
          </h2>
          <div
            onClick={toggleTwo}
            className='col-span-2  w-full h-full flex justify-center items-center hover:cursor-pointer'
          >
            {two === true ? (
              <FaAngleUp className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            ) : (
              <FaAngleDown className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            )}
          </div>
          {two && (
            <div className='col-span-12 words-break py-5 px-8'>
              <p className='text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                architecto id natus sint quis voluptatibus officia unde! Odit,
                numquam necessitatibus aspernatur amet a modi consectetur
                corporis alias maxime pariatur! Deleniti!
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl mb-2 '>
        <div className='grid grid-cols-12 '>
          <h2
            onClick={() => {
              toggleThree();
            }}
            className='col-span-10 p-5 text-left text-lg sm:text-xl font-semibold hover:cursor-pointer'
          >
            Do you offer bulk discounts or wholesale pricing?
          </h2>
          <div
            onClick={() => {
              toggleThree();
            }}
            className='col-span-2 w-full h-full flex justify-center items-center hover:cursor-pointer'
          >
            {three === true ? (
              <FaAngleUp className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            ) : (
              <FaAngleDown className='size-6 text-blue-400  hover:text-blue-500 transition-all duration-200' />
            )}
          </div>
          {three && (
            <div className='col-span-12 words-break py-5 px-8'>
              <p className='text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                architecto id natus sint quis voluptatibus officia unde! Odit,
                numquam necessitatibus aspernatur amet a modi consectetur
                corporis alias maxime pariatur! Deleniti!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accoridan;
