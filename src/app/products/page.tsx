import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <main className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
          <Image src="/Lines.png" alt="Lines" width={100} height={50} />
        </div>
      </header>

      {/* Navbar */}
      <ul className="flex justify-center space-x-4 text-gray-700 text-sm py-4">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Pages</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <Image src="/human.png" alt="Human" width={20} height={20} />
        <button className="text-blue-500 text-sm">Login / Register</button>
        <Image src="/Search.png" alt="Search" width={25} height={25} />
        <Image src="/Shop.png" alt="Shop" width={25} height={25} />
        <Image src="/Heart.png" alt="Heart" width={25} height={25} />
      </div>

      {/* Section Title */}
      <div className="text-center mt-6">
        <h3 className="text-2xl font-bold text-[#252B42]">Shop</h3>
        <div className="flex justify-center mt-2">
          <Image src="/Homeandshop.png" alt="shop" width={150} height={30} />
        </div>
      </div>

      {/* Boxes Section */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {/* Box Components */}
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="relative group w-full max-w-[150px] h-[200px] mx-auto bg-gray-200 rounded-md overflow-hidden"
          >
            <Image
              src={`/Girlno${item}.jpg`}
              alt={`Girl ${item}`}
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
            <button className="absolute bottom-2 left-0 right-0 text-white text-sm bg-black bg-opacity-60 px-2 py-1 text-center">
              Cloths <br /> 5 Items
            </button>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4">
        {["Menno1.png", "Femaleno1.png", "Menno2.png"].map((image, idx) => (
          <div
            key={idx}
            className="bg-neutral-100 p-4 text-center rounded-md shadow-md"
          >
            <div className="flex justify-center items-center">
              <Image src={`/${image}`} alt={`Image ${idx}`} width={60} height={60} />
            </div>
            <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
            <p className="text-[#737373] text-sm">English Department</p>
            <div className="mt-2">
              <span className="text-[#BDBDBD] font-bold mr-2">$16.48</span>
              <span className="text-[#23856D] font-bold">$6.48</span>
            </div>
            <Image
              src="/Productcolor.png"
              alt="Product Color"
              width={60}
              height={20}
              className="mx-auto mt-2"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Image src="/Pagination.png" alt="Pagination" width={150} height={30} />
      </div>

      {/* Mobile Client */}
      <div className="flex justify-center mt-6">
        <Image
          src="/Mobileclient.png"
          alt="Mobile Client"
          width={150}
          height={80}
        />
      </div>

      {/* Footer */}
      <footer className="mt-10 bg-gray-50 text-gray-700 text-center py-4">
        <p>Made With Love By Finland All Right Reserved</p>
      </footer>
    </main>
  );
};

export default Page;
