import React from "react";
import faq from "../assets/faq.png";
import Accoridan from "./Accoridan";
const FrequentlyAQ = () => {
  return (
    <div className='max-w-7xl mx-auto min-h-10/12  flex justify-center items-center my-20 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div>
          <img src={faq} alt='' />
        </div>
        <div className='flex justify-center items-center px-5'>
          <Accoridan />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAQ;
