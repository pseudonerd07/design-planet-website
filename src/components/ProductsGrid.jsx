import React from "react";
import Productcard from "./Productcard"; // adjust path if needed
import product from "../assets/dp_hero.png";

const ProductsGrid = () => {
  return (
    <>
      <h1
        id='products'
        className='text-7xl my-10 text-center font-semibold text-gray-800 '
      >
        Products
      </h1>
      <section className='max-w-7xl mx-auto px-5 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        <Productcard
          image={product}
          name='Product 1'
          price='29.99'
          description='This is a great product.'
          className='col-span-1 '
        />

        <Productcard
          image={product}
          name='Product 2'
          price='39.99'
          description='Another awesome item.'
        />

        <Productcard
          image={product}
          name='Product 3'
          price='19.99'
          description='Useful and affordable.'
        />

        <Productcard
          image={product}
          name='Product 4'
          price='49.99'
          description='Top quality product.'
        />
        <Productcard
          image={product}
          name='Product 1'
          price='29.99'
          description='This is a great product.'
          className='col-span-1'
        />

        <Productcard
          image={product}
          name='Product 2'
          price='39.99'
          description='Another awesome item.'
        />

        <Productcard
          image={product}
          name='Product 3'
          price='19.99'
          description='Useful and affordable.'
        />

        <Productcard
          image={product}
          name='Product 4'
          price='49.99'
          description='Top quality product.'
        />
        <Productcard
          image={product}
          name='Product 1'
          price='29.99'
          description='This is a great product.'
          className='col-span-1'
        />

        <Productcard
          image={product}
          name='Product 2'
          price='39.99'
          description='Another awesome item.'
        />

        <Productcard
          image={product}
          name='Product 3'
          price='19.99'
          description='Useful and affordable.'
        />

        <Productcard
          image={product}
          name='Product 4'
          price='49.99'
          description='Top quality product.'
        />
      </section>
    </>
  );
};

export default ProductsGrid;
