import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Productcard from "./components/Productcard";
import product from "./assets/dp_hero.png";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeroSection />

      <ProductsGrid />
    </div>
  );
}

export default App;
