import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WAbtn = () => {
  return (
    <div className="w-auto fixed z-20 text-white bottom-6 right-5 p-4 bg-accent rounded-full">
      <a
        href="http://https://api.whatsapp.com/send?phone=8120549440&text=Hello,%20I%20would%20like%20to%20order%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default WAbtn;
