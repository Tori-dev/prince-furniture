import React from 'react'

const Cstwo = ({image, head, texts} : any) => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[100px]">
          {/* text */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title capitalize">{head}</h2>
            <p className="subtitle">{texts}</p>
            <button className="w-40 mb-6 lg:mb-0">See Products</button>
          </div>
          {/* image */}
          <div className="flex-1">
            <img src={image.type} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cstwo