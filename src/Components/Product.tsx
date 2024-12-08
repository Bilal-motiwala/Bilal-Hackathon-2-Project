import React from 'react';

const Product = () => {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-8">
        {/* Product Container */}
        <div className="w-[95%] sm:w-[95%] md:w-[650px] lg:w-[770px] bg-[#23856D] flex flex-col-reverse md:flex-row items-center justify-between text-white py-6 px-5 rounded-md">
          {/* Left Side */}
          <div className="text-center md:text-left sm:w-full md:w-[60%]">
            {/* Icon Section */}
            <div className="flex items-center justify-center md:justify-start gap-x-2 mb-2">
              <span>🌟</span> {/* Replace this span with an actual icon if needed */}
              <span className="text-xs sm:text-sm">Summer 2020</span>
            </div>

            {/* Title */}
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold my-3">
              Vita Classic Product
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base leading-5">
              We know how large objects will act, we know how small objects will act. We know.
            </p>

            {/* Button */}
            <button className="underline-offset-4 mt-4 hover:font-bold">
              $16.48 ADD TO CART
            </button>
          </div>

          {/* Right Side (Image) */}
          <div className="sm:w-full md:w-[40%] flex justify-center md:justify-end mb-6 md:mb-0">
            <img
              src="/Hero.png"
              alt="Hero"
              className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
