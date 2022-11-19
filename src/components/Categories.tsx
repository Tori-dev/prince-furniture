import React from "react";
import { categories } from "../data";
import Csone from "./Csone";
import Cstwo from "./Cstwo";

const Categories = () => {
  const { title, subtitle, cimg, ctext, bimg } = categories;
  return (
    <section className="section">
      <div className="text-center">
        <h2 className="title capitalize">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
      <Csone head={title} texts={ctext} image={cimg} />
      <Cstwo head={title} texts={ctext} image={cimg} />
      <Csone head={title} texts={ctext} image={cimg} />
    </section>
  );
};

export default Categories;
