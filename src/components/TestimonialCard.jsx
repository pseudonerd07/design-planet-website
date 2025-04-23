import React from "react";

const TestimonialCard = ({ customer, className }) => {
  return (
    <div className={`${className} `}>
      <div className='grid grid-cols-1 border border-blue-400 rounded-2xl  p-5 bg-gradient-to-r from-gray-100  to-blue-50   shadow-2xl opacity-80 hover:opacity-100 transition-all'>
        <h1 className='text-3xl font-semibold'>{customer}</h1>
        <p className='text-wrap text-gray-700 italic'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          sapiente, dicta blanditiis aut vitae similique omnis excepturi nulla
          impedit, officia obcaecati dolores sed eveniet rerum possimus deleniti
          voluptatibus? Neque, animi. lores
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
