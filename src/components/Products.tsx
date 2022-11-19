import React from "react";
import { products } from "../data";
import { HiPlus } from "react-icons/hi";

const Products = () => {
  const { title, subtitle, pages } = products;
  return (
    <section className="section text-center">
      <div className="container mx-auto">
        <div>
          <h2 className="title">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
            {subtitle}
          </p>
        </div>
        <div className="container">
          {pages.map((page, index) => {
            return (
              <div key={index}>
                <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
                  {page.productList.map((product, index) => {
                    const { image, name, price, oldPrice } = product;
                    return (
                      <div
                        className="w-full max-w-[290px] h-[380px] text-left"
                        key={index}
                      >
                        <div className="border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition">
                          <img src={image.type} alt="" />
                          <div className="absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition">
                            <HiPlus className="text-xl text-primary" />
                          </div>
                        </div>
                        <div className="font-semibold lg:text-xl">{name}</div>
                        <div className="flex items-center gap-x-3">
                          <div>N {price}</div>
                          <div className="text-[15px] text-grey line-through">
                            N {oldPrice}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <button className="h-12 md:m-auto capitalize w-auto">see all</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
