import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialGrid = () => {
  return (
    <>
      <h1
        id='testimonials'
        className='text-center text-6xl font-semibold mt-10'
      >
        Testimonials
      </h1>
      <section className='max-w-7xl my-15 px-5 m-auto grid grid-cols-1 gap-5 sm:gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        <TestimonialCard customer={"Bharath Kumar"} className='col-span-2' />
        <TestimonialCard customer={"Rithwik Kumar"} className='col-span-2' />
        <TestimonialCard customer={"Santosh"} className='col-span-2' />
        <TestimonialCard customer={"Srikanth"} className='col-span-2' />
        <TestimonialCard customer={"Sai Krishna"} className='col-span-2' />
        <TestimonialCard customer={"Pat Cummins"} className='col-span-2' />
      </section>
    </>
  );
};

export default TestimonialGrid;
