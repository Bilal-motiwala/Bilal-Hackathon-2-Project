import React from 'react'

const Featured = () => {
  return (
    <main>
      <div id='products' className="w-full flex justify-center items-center mt-10 mb-1">
        {/* Container */}
        <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-6">
            <h4 className="text-[#737373] text-base font-medium mb-1">Featured Products</h4>
            <h3 className="text-[#252B42] text-2xl font-bold mb-2">BESTSELLER PRODUCTS</h3>
            <p className="text-[#737373] text-[8px] text-sm">Problems trying to resolve the conflict between</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Box 1 */}
            <div className="shadow-md bg-neutral-100 p-4 text-center">
              <div className="flex justify-center items-center h-32 bg-white">
                <img src="/Female1.png" alt="Product 1" className="w-24 h-24 object-contain" />
              </div>
              <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
              <p className="text-[#737373] text-sm">English Department</p>
              <div className="mt-2">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>
                <span className="text-[#23856D] font-bold ml-2">$6.48</span>
              </div>
              <img src="/Productcolor.png" alt="Product Color" className="mt-2 ml-16" />
            </div>

            {/* Product Box 2 */}
            <div className="shadow-md bg-neutral-100 p-4 text-center">
              <div className="flex justify-center items-center h-32 bg-white">
                <img src="/Men1.png" alt="Product 2" className="w-24 h-24 object-contain" />
              </div>
              <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
              <p className="text-[#737373] text-sm">English Department</p>
              <div className="mt-2">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>
                <span className="text-[#23856D] font-bold ml-2">$6.48</span>
              </div>
              <img src="/Productcolor.png" alt="Product Color" className="mt-2 ml-16" />
            </div>

            {/* Product Box 3 */}
            <div className="shadow-md bg-neutral-100 p-4 text-center">
              <div className="flex justify-center items-center h-32 bg-white">
                <img src="/Woman2.png" alt="Product 3" className="w-24 h-24 object-contain" />
              </div>
              <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
              <p className="text-[#737373] text-sm">English Department</p>
              <div className="mt-2">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>
                <span className="text-[#23856D] font-bold ml-2">$6.48</span>
              </div>
              <img src="/Productcolor.png" alt="Product Color" className="mt-2 ml-16" />
            </div>

            {/* Product Box 4 */}
            <div className="shadow-md bg-neutral-100 p-4 text-center">
              <div className="flex justify-center items-center h-32 bg-white">
                <img src="/Woman3.png" alt="Product 4" className="w-24 h-24 object-contain" />
              </div>
              <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
              <p className="text-[#737373] text-sm">English Department</p>
              <div className="mt-2">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>
                <span className="text-[#23856D] font-bold ml-2">$6.48</span>
              </div>
              <img src="/Productcolor.png" alt="Product Color" className="mt-2 ml-16" />
            </div>
          </div>

           {/* Product Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Box 1 */}
            <div className="shadow-md bg-neutral-100 p-4 text-center">
              <div className="flex justify-center items-center h-32 bg-white">
                <img src="/Men2.png" alt="Product 1" className="w-24 h-24 object-contain" />
              </div>
              <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
              <p className="text-[#737373] text-sm">English Department</p>
              <div className="mt-2">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>
                <span className="text-[#23856D] font-bold ml-2">$6.48</span>
              </div>
              <img src="/Productcolor.png" alt="Product Color" className="mt-2 ml-16" />
            </div>

            {/* Product Box 2 */}
            <div className="shadow-md bg-neutral-100 p-4 text-center">
              <div className="flex justify-center items-center h-32 bg-white">
                <img src="/Woman4.png" alt="Product 2" className="w-24 h-24 object-contain" />
              </div>
              <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
              <p className="text-[#737373] text-sm">English Department</p>
              <div className="mt-2">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>
                <span className="text-[#23856D] font-bold ml-2">$6.48</span>
              </div>
              <img src="/Productcolor.png" alt="Product Color" className="mt-2 ml-16" />
            </div>

            {/* Product Box 3 */}
            <div className="shadow-md bg-neutral-100 p-4 text-center">
              <div className="flex justify-center items-center h-32 bg-white">
                <img src="/Men3.png" alt="Product 3" className="w-24 h-24 object-contain" />
              </div>
              <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
              <p className="text-[#737373] text-sm">English Department</p>
              <div className="mt-2">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>
                <span className="text-[#23856D] font-bold ml-2">$6.48</span>
              </div>
              <img src="/Productcolor.png" alt="Product Color" className="mt-2 ml-16" />
            </div>

            {/* Product Box 4 */}
            <div className="shadow-md bg-neutral-100 p-4 text-center">
              <div className="flex justify-center items-center h-32 bg-white">
                <img src="/Men4.png" alt="Product 4" className="w-24 h-24 object-contain" />
              </div>
              <h5 className="font-bold text-[#252B42] mt-2">Graphic Design</h5>
              <p className="text-[#737373] text-sm">English Department</p>
              <div className="mt-2">
                <span className="text-[#BDBDBD] font-bold">$16.48</span>
                <span className="text-[#23856D] font-bold ml-2">$6.48</span>
              </div>
              <img src="/Productcolor.png" alt="Product Color" className="mt-2 ml-16" />
            </div>
          </div>


        </div>
      </div>
    </main>
  )
}

export default Featured
