import React from "react";
import Categories from "./components/Categories";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import WAbtn from "./components/WAbtn";

function App() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <WAbtn />
      <Hero />
      <Features />
      <Categories />
      <Products />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
