import React from "react";
import Image from "next/image";
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
            <div className="flex justify-center">
              <Image
                width={100}
                height={200}
                src="/images/womansshorts.jpg"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
            <p className="text-sm font-semibold">{"Women's Shorts"}</p>
            <span className="block bg-red-100 text-red-500 text-sm font-bold py-1 px-3 rounded-full mx-auto mt-2">
              -25%
            </span>
          </div>

          {/* Product 2 */}
          <div className="bg-white border-2 p-4 text-center">
            <div className="flex justify-center">
              <Image
                width={100}
                height={200}
                src="/images/gentsimg2.jpg"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
            <p className="text-sm font-semibold">Trouser</p>
            <span className="block bg-red-100 text-red-500 text-sm font-bold py-1 px-3 rounded-full mx-auto mt-2">
              -15%
            </span>
          </div>

          {/* Product 3 */}
          <div className="bg-white border-2 p-4 text-center">
            <div className="flex justify-center">
              <Image
                width={80}
                height={200}
                src="/images/womansJogers.jpg"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
            <p className="text-sm font-semibold">{"Women's Joggers"}</p>
            <span className="block bg-red-100 text-red-500 text-sm font-bold py-1 px-3 rounded-full mx-auto mt-2">
              -40%
            </span>
          </div>

          {/* Product 4 */}
          <div className="bg-white border-2 p-4 text-center">
            <div className="flex justify-center">
              <Image
                width={100}
                height={200}
                src="/images/womanspnats.jpg"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
            <p className="text-sm font-semibold">{"Women's Pants"}</p>
            <span className="block bg-red-100 text-red-500 text-sm font-bold py-1 px-3 rounded-full mx-auto mt-2">
              -25%
            </span>
          </div>

          {/* Product 5 */}
          <div className="bg-white border-2 p-4 text-center">
            <div className="flex justify-center">
              <Image
                width={150}
                height={200}
                src="/images/womansTshirts.jpg"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
            <p className="text-sm font-semibold">{"Women's T-Shirt"}</p>
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
