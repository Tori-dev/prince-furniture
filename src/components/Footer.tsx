import React from "react";
import Logo from "../assets/logo.svg";
import { footer } from "../data";

const Footer = () => {
  return (
    <footer className="section bg-primary text-white py-2 pt-6">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-3 mb-4">
          <a className="mb-2 lg:mb-0 hidden lg:flex w-28" href="#">
            <img src={Logo} alt="logo" />
          </a>
          <div className="flex gap-x-4 mx-auto lg:mx-0">
            {footer.social.map((item, index) => {
              return (
                <div
                  className="w-10 h-10 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition-all"
                  key={index}
                >
                  <a href="#">{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center">
          <a
            href="http://tori-codes.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            &copy; Victory Akpofure 2022 - All Rights Reserved.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
