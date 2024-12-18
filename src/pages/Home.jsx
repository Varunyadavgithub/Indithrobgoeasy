import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedProducts from "../Components/FeaturedProducts";
import ServicesProvided from "../components/ServicesProvided";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <ServicesProvided />
      <AboutUs />
      <Features />
      <FAQ />
    </>
  );
};

export default Home;
