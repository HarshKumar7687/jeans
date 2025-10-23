import React, { useEffect, useState } from "react";
import Background from "../components/Background.jsx";
import Hero from "../components/Hero";
import Product from "./Product.jsx";
import OurPolicy from "../components/OurPolicy.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="overflow-x-hidden relative top-[70px] bg-gradient-to-l from-[#141414] to-[#0c2025]">
      <div className="w-[99vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh]">
        <Hero/>
      </div>
      <Product/>
      <OurPolicy />
      <Footer />
    </div>
  );
};

export default Home;
