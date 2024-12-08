import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <main>
        
      <header className="bg-white shadow-md w-full">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}

          <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>

          {/* Image */}

          <Image src="/Lines.png" alt="Lines" width={100} height={50} />

        </div>
      </header>

      <ul className='ml-[180px]'>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Pages</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4 mt-4 ml-[150px]">
        <Image src="/human.png" alt="Human" width={15} height={20} />
        <button className="text-blue-500 text-sm">
          Login / Register
        </button>
      </div>

      <div className='ml-[180px]'>
        <Image src="/Search.png" alt="Search" width={30} height={30} />
        <Image src="/Shop.png" alt="Shop" width={30} height={30} />
        <Image src="/Heart.png" alt="Heart" width={30} height={30} />
      </div>

      <div className='w-[414px] h-[202px] top-[24px] bottom-[24px]'>
        <div className='w-[414px] h-[154px] gap-[30px]'>
          <div className='w-[414px] h-[80px] top-[24px] bottom-6'>
            <h3 className='w-[63px] h-[32px] Montserrat font-bold size-[24px] leading-[32px] letter-[0.1px] text-center text-[#252B42] ml-[170px]'>Shop</h3>
          </div>
        </div>
      </div>

      <div className='w-[414px] h-[44px] gap-[5px] '>
        <div className='w-[117px] h-[44px] top-[10px] bottom-[10px] gap-[15px]'>
          <p className='w-[200px] h-[24px] Montserrat font-bold size-[14px] leading-[24px] letter-[0.2px] text-center text-[#252B42] ml-[110px]'>
            <Image src="/Homeandshop.png" alt="shop" width={990} height={200} />
          </p>
        </div>
      </div>

      {/* Boxes Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center ml-3">
        {/* Box 1 */}
        <div className=" w-full max-w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative ml-20">
          <Image src="/Girlno1.jpg" alt="Girl" width={150} height={100} />
          <button className="absolute bottom-6 text-white px-4 py-2 w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            Cloths <br /> 5 Items 
          </button>
        </div>
      </div>

      {/* Repeat Boxes */}
      {[2, 3, 4, 5].map((item) => (
        <div key={item} className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center ml-3">
          <div className=" w-full max-w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative ml-20">
            <Image src={`/Girlno${item}.jpg`} alt={`Girl ${item}`} width={150} height={100} />
            <button className="absolute bottom-6 text-white px-4 py-2 w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Cloths <br /> 5 Items 
            </button>
          </div>
        </div>
      ))}

      {/* Cards */}
      {['Menno1.png', 'Femaleno1.png', 'Menno2.png'].map((image, idx) => (
        <div key={idx} className="bg-neutral-100 p-2 text-center mt-10">
          <div className="flex justify-center items-center h-42 w-[200px] h-[100px] ml-24">
            <Image src={`/${image}`} alt={`Image ${idx}`} width={62} height={24} />
          </div>
          <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
          <p className="text-[#737373] text-sm">English Department</p>
          <div className="mt-2">
            <span className="text-[#BDBDBD] font-bold mr-2">$16.48</span>
            <span className="text-[#23856D] font-bold ml-2 mr-2">$6.48</span>
          </div>
          <Image src="/Productcolor.png" alt="Product Color" className="mt-2 ml-[147px]" width={60} height={20} />
        </div>
      ))}

      <div className='mt-3 ml-10'>
        <Image src="/Pagination.png" alt="Pagination" width={200} height={50} />
      </div>

      <div className='w-[170px] ml-24 mt-3'>
        <Image src="/Mobileclient.png" alt="Mobile Client" width={170} height={100} />
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 py-10 bg-gray-50 text-gray-700">
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </main>
  )
}

export default Page
