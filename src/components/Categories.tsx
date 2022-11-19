import React from "react";
import { categories } from "../data";
import Csone from "./Csone";
import Cstwo from "./Cstwo";

const Categories = () => {
  const { title, cimg, ctext, ctitle, bimg, btitle, btext, dimg, dtitle, dtext, ktext, ktitle, kimg } = categories;
  return (
    <section className="section">
      <div className="text-center">
        <h2 className="title capitalize">{title}</h2>
      </div>
      <Csone head={ctitle} texts={ctext} image={cimg} />
      <Cstwo head={btitle} texts={btext} image={bimg} />
      <Csone head={dtitle} texts={dtext} image={dimg} />
      <Cstwo head={ktitle} texts={ktext} image={kimg} />
    </section>
  );
};

export default Categories;
