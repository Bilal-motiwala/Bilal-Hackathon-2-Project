import React from 'react';

const Post = () => {
  return (
    <div>
      {/* Main Wrapper */}
      <div id="products" className="w-full flex justify-center items-center mt-10 mb-10">
        {/* Container */}
        <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-6">
            <h4 className="text-[#23A6F0] text-sm sm:text-base font-bold mb-1">
              Practice Advice
            </h4>
            <h3 className="text-[#252B42] text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              Featured Posts
            </h3>
            <p className="text-[#737373] text-xs sm:text-sm lg:text-base">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-[450px]">
            {/* Product Box 1 */}
            <div className="ml-7 flex flex-col items-center text-center  rounded-lg p-4 ">
              <div className="w-[400px] h-[140px] flex justify-center items-center h-32">
                <img
                  src="/Contentcard.png"
                  alt="Product 1"
                  
                />
              </div>
              
            </div>

           
          

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
