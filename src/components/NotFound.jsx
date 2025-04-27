import React from "react";
import notfound from "../assets/404_not_found.svg";

const NotFound = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <img
          src={notfound}
          alt='oops page not found'
          className='w-1/2 h-4/5 float-animation'
        />
      </div>
    </div>
  );
};

export default NotFound;
