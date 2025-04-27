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
      <section className='max-w-7xl my-15 px-5 m-auto grid grid-cols-1 gap-5 sm:gap-14 md:grid-cols-2 lg:grid-cols-3'>
        <TestimonialCard customer={"Bharath Kumar"} />
        <TestimonialCard customer={"Rithwik Kumar"} />
        <TestimonialCard customer={"Santosh"} />
        <TestimonialCard customer={"Srikanth"} />
        <TestimonialCard customer={"Sai Krishna"} />
        <TestimonialCard customer={"Pat Cummins"} />
      </section>
    </>
  );
};

export default TestimonialGrid;
