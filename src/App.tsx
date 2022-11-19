import React from "react";
import Categories from "./components/Categories";
import Features from "./components/Features";
import FeaturesTwo from "./components/FeaturesTwo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewItems from "./components/NewItems";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
      <Features />
      {/* <NewItems /> */}
      <Categories />
      <FeaturesTwo />
      <Products />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
