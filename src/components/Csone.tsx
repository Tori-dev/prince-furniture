import React from 'react'

const Csone = ({ image, head, texts }: any) => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-x-[100px]">
          {/* image */}
          <div className="flex-1 w-full rounded-md overflow-hidden">
            <img className="w-full" src={image.type} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title capitalize">{head}</h2>
            <p className="subtitle">{texts}</p>
            <button className="w-40 mb-6 lg:mb-0">See Products</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Csone