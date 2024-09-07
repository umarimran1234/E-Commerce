import React from "react";

const DealsSection = () => {
  return (
    <div className="bg-white p-6  container mx-auto ">
      {/* Main Container */}
      <div className="flex flex-col item-center  lg:flex-row  border-2  space-y-6 lg:space-y-0 ">
        {/* Left Section - Deals and Timer */}
        <div className="w-full lg:w-1/5 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Deals and offers</h2>
          <p className="text-sm text-gray-500 mb-4">Hygiene equipments</p>
          {/* Timer */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-gray-800 text-white p-2 rounded-lg">
              <p className="text-xl font-semibold">04</p>
              <p className="text-xs">Days</p>
            </div>
            <div className="bg-gray-800 text-white p-2 rounded-lg">
              <p className="text-xl font-semibold">13</p>
              <p className="text-xs">Hour</p>
            </div>
            <div className="bg-gray-800 text-white p-2 rounded-lg">
              <p className="text-xl font-semibold">34</p>
              <p className="text-xs">Min</p>
            </div>
            <div className="bg-gray-800 text-white p-2 rounded-lg">
              <p className="text-xl font-semibold">56</p>
              <p className="text-xs">Sec</p>
            </div>
          </div>
        </div>

        {/* Right Section - Products */}
        <div className="w-full h-[20rem]  lg:w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          {/* Product 1 */}
          <div className="bg-white  border-2 p-4 text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Smart watches"
              className="mx-auto mb-4"
            />
            <p className="text-sm font-semibold">Smart watches</p>
            <span className="block bg-red-100 text-red-500 text-sm font-bold py-1 px-3 rounded-full mx-auto mt-2">
              -25%
            </span>
          </div>

          {/* Product 2 */}
          <div className="bg-white border-2 p-4 text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Laptops"
              className="mx-auto mb-4"
            />
            <p className="text-sm font-semibold">Laptops</p>
            <span className="block bg-red-100 text-red-500 text-sm font-bold py-1 px-3 rounded-full mx-auto mt-2">
              -15%
            </span>
          </div>

          {/* Product 3 */}
          <div className="bg-white border-2 p-4 text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="GoPro cameras"
              className="mx-auto mb-4"
            />
            <p className="text-sm font-semibold">GoPro cameras</p>
            <span className="block bg-red-100 text-red-500 text-sm font-bold py-1 px-3 rounded-full mx-auto mt-2">
              -40%
            </span>
          </div>

          {/* Product 4 */}
          <div className="bg-white border-2 p-4 text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Headphones"
              className="mx-auto mb-4"
            />
            <p className="text-sm font-semibold">Headphones</p>
            <span className="block bg-red-100 text-red-500 text-sm font-bold py-1 px-3 rounded-full mx-auto mt-2">
              -25%
            </span>
          </div>

          {/* Product 5 */}
          <div className="bg-white border-2 p-4 text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Canon cameras"
              className="mx-auto mb-4"
            />
            <p className="text-sm font-semibold">Canon cameras</p>
            <span className="block bg-red-100 text-red-500 text-sm font-bold py-1 px-3 rounded-full mx-auto mt-2">
              -25%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
