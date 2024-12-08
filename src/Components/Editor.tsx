import React from "react";

const Editor = () => {
  return (
    <main className="bg-white">
      {/* Section Container */}
      <div className="container mx-auto px-4 py-16">
        {/* Title Section */}
        <div className="text-center space-y-2">
          <h2 className="text-[20px] font-bold text-[#252B42]">
            EDITOR’S PICK
          </h2>
          <p className="text-[15px] text-[#737373] text-[8px]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Boxes Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {/* Box 1 - Men */}
          <div className="group shadow-md bg-neutral-100 w-full max-w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
            <img
              src="/Menimage.png"
              alt="Men"
              width={150}
              height={100}
              className="object-contain"
            />
            <button className="absolute bottom-0 bg-white text-black px-4 py-2 w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Men
            </button>
          </div>

          {/* Box 2 - Woman */}
          <div className="group shadow-md bg-neutral-100 w-full max-w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
            <img
              src="/Woman.png"
              alt="Woman"
              width={80}
              height={100}
              className="object-contain"
            />
            <button className="absolute bottom-0 bg-white text-black px-4 py-2 w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Woman
            </button>
          </div>

          {/* Box 3 - Accessories */}
          <div className="group shadow-md bg-neutral-100 w-full max-w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
            <img
              src="/Accessories.png"
              alt="Accessories"
              width={170}
              height={100}
              className="object-contain"
            />
            <button className="absolute bottom-0 bg-white text-black px-4 py-2 w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Accessories
            </button>
          </div>

          {/* Box 4 - Kids */}
          <div className="group shadow-md bg-neutral-100 w-full max-w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
            <img
              src="/Kids.png"
              alt="Kids"
              width={170}
              height={100}
              className="object-contain"
            />
            <button className="absolute bottom-0 bg-white text-black px-4 py-2 w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Kids
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Editor;
