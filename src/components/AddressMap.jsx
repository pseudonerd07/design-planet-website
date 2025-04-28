import React from "react";

const AddressMap = () => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d237.9529398005887!2d78.49619698304248!3d17.399928347147704!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745826017719!5m2!1sen!2sin   '
      width='100%'
      height='100%'
      style={{ border: 0 }}
      allowFullScreen
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      className='rounded-4xl  w-full h-full'
    ></iframe>
  );
};

export default AddressMap;
