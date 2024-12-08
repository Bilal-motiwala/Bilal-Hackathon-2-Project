import React from "react";
import Image from "next/image";

const Headerandhero = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Left Section */}
          <div className="flex space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Image src="/Callicon.png" alt="Icon" width={20} height={20} />
              <span className="ml-2">(225) 555-0118</span>
            </div>

            <div className="flex items-center ml-6">
              <Image src="/Mail.png" alt="Mail Icon" width={20} height={20} />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row items-center space-x-3">
            <span className="text-center md:text-left">
              Follow Us and get a chance to win 50% off
            </span>
            <div className="flex space-x-2 mt-2 md:mt-0">
              <Image
                src="/Followus.png"
                alt="Follow Us"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and Navigation Links */}
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold">Bandage</h1>

              {/* Links */}
              <div className="hidden md:flex space-x-6">
                {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map(
                  (item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-700 hover:text-blue-500 transition"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-blue-500 text-sm">
                Login / Register
              </button>
              <Image
                src="/Search.png"
                alt="Search Icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/Shop.png"
                alt="Shop Icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/Heart.png"
                alt="Heart Icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden mt-4 justify-center">
            <div className="flex flex-wrap gap-4">
              {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-700 hover:text-blue-500 transition"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-[#00adef] flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Text Section */}
            <div className="md:w-1/2 text-white space-y-6 text-center md:text-left">
              <div className="text-sm font-medium uppercase">Summer 2020</div>
              <h2 className="text-4xl md:text-5xl font-bold">New Collection</h2>
              <p className="text-lg leading-relaxed">
                We know how large objects will act, <br />
                but things on a small scale.
              </p>
              <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors">
                Shop Now
              </button>
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Image
                src="/Femalehero.jpg"
                alt="Hero Image"
                width={400}
                height={500}
                className="w-full max-w-sm md:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerandhero;
