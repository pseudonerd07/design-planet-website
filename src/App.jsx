import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Productcard from "./components/Productcard";
import product from "./assets/dp_hero.png";
import ProductsGrid from "./components/ProductsGrid";
import FooterSection from "./components/FooterSection";
import Testimonials from "./components/TestimonialCard";
import TestimonialGrid from "./components/TestimonialGrid";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <HeroSection />
      <ProductsGrid />
      <TestimonialGrid />
      <FooterSection />
      <Routes>
        {/* dummy route */}
        <Route path='/*' element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
