import React from "react";
import Image from "next/image";

const Page = () => {
  const items = [
    { src: "/Girlno1.jpg", alt: "Girl 1" },
    { src: "/Girlno2.jpg", alt: "Girl 2" },
    { src: "/Girlno3.jpg", alt: "Girl 3" },
    { src: "/Girlno4.jpg", alt: "Girl 4" },
    { src: "/Girlno5.jpg", alt: "Girl 5" },
  ];

  return (
    <main>
      {/* Full Page Container */}
      <div className="min-h-screen">
        {/* Top Bar */}
        <div className="bg-[#23856D] text-white py-2 px-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
            {/* Left Section */}
            <div className="flex space-x-4 mb-2 md:mb-0">
              <div className="flex items-center">
                <Image src="/Callicon.png" alt="Call Icon" width={20} height={20} />
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
                <Image src="/Followus.png" alt="Follow Us" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold">Bandage</h1>
              <div className="hidden md:flex space-x-6">
                {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-700 hover:text-blue-500 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-blue-500 text-sm">Login / Register</button>
              <Image src="/Search.png" alt="Search Icon" width={20} height={20} />
              <Image src="/Shop.png" alt="Shop Icon" width={20} height={20} />
              <Image src="/Heart.png" alt="Heart Icon" width={20} height={20} />
            </div>
          </div>
        </nav>

        {/* Shop Title */}
        <div className="w-full bg-[#fafafa] py-6 text-center">
          <h3 className="text-2xl font-bold text-[#252B42]">Shop</h3>
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

        {/* Responsive Image Grid */}
        <div className="container mx-auto mt-8 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative group max-w-[220px] h-[180px] mx-auto cursor-pointer overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-center py-2 w-full group-hover:bg-opacity-75">
                  <p>Cloths</p>
                  <span>5 Items</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter and Client Sections */}
        <div className="mt-6 px-4">
          <Image src="/Filter.png" alt="Filter" width={1200} height={400} layout="responsive" />
        </div>
        <div className="mt-6 px-4">
          <Image src="/Client.png" alt="Client" width={1200} height={400} layout="responsive" />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-2xl font-bold">Bandage</h2>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-blue-600">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-500">
                  Twitter
                </a>
                <a href="#" className="hover:text-pink-500">
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
                <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
                <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
              </ul>
            </div>
             {/* Column 4 */}
             <div>
              <h3 className="font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">iOS & Android</a></li>
                <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-blue-500">Customers</a></li>
                <li><a href="#" className="hover:text-blue-500">API</a></li>
              </ul>
            </div>

             {/* Newsletter Section */}
          <div className="w-full md:w-full lg:w-1/4">
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Lore imp sum dolor Amit.
              </p>
            </form>
          </div>

          </div>
          <div className="mt-10 text-center text-sm">
            Made With Love By Finland All Rights Reserved
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
