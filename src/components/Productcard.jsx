import React from "react";

const Productcard = ({ image, name, price, description, className = "" }) => {
  return (
    <div
      className={`bg-gray-100   border rounded-2xl shadow-md hover:shadow-2xl hover:scale-125 transform transition-all duration-500 ease-in-out 
        hover:-translate-y-2 ${className} border-blue-300 mt-2 hover:opacity-80 hover:cursor-pointer`}
    >
      <div className='p-4'>
        <img
          src={image}
          alt={name}
          className='w-full h-48 object-cover rounded-xl mb-4'
        />
      </div>

      <div className='bg-white w-full rounded-b-2xl p-2 flex flex-col justify-center items-center sm:items-start'>
        <h2 className='text-lg font-bold'>{name}</h2>
        <p className='text-gray-500 text-sm'>{description}</p>
        <p className='text-blue-600 font-semibold mt-2'>{price}/-</p>
      </div>
    </div>
  );
};

export default Productcard;
