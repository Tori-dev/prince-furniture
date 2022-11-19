import React from "react";
import { newInStore } from "../data";
import NISlider from "./NISlider";

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className="section relative overflow-hidden lg:min-h-[540px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          {/* text */}
          <div className="flex lg:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-4">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-12 hidden lg:flex">{subtitle}</p>
            <button>
              {link} <div className="ml-2 hidden group-hover:flex">{icon}</div>
            </button>
          </div>
          {/* product slider */}
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24">
            <NISlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
