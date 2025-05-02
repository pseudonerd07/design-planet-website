import React from "react";
import HeroSection from "./HeroSection";
import ProductsGrid from "./ProductsGrid";
import Productcard from "./Productcard";
import TestimonialGrid from "./TestimonialGrid";
import TestimonialCard from "./TestimonialCard";
import FooterSection from "./FooterSection";
import Navbar from "./Navbar";
import FrequentlyAQ from "./FrequentlyAQ";
const BaseLayout = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <HeroSection />
      <ProductsGrid />
      <TestimonialGrid />
      <FrequentlyAQ />
      <FooterSection />
    </div>
  );
};

export default BaseLayout;
