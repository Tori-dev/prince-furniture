import React from "react";
import { newsletter } from "../data";

const NewsLetter = () => {
  const { title, buttonText } = newsletter;
  return (
    <section className="section bg-newsletter min-h-[490px]">
      <div className="container mx-auto flex justify-center lg:justify-end">
        <div className="w-full max-w-[558px] text-center lg:text-left text-white">
          <h2 className="text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal">
            {title}
          </h2>
          <div className="flex flex-col lg:flex-row gap-[22px]">

            <button className="bg-primary h-[60px] hover:bg-slate-900 px-7 rounded-lg font-medium text-xl transition-all">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
