import Image from "next/image";
import React from "react";

const HomeOutdoorSection = () => {
  return (
    <div className="bg-black mt-[34rem] lg:mt-[2rem] border-gray-800 border-2 border-gray-300">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 ">
        {/* Left Section - Background Image, Title, and Button */}
        <div
          id="backimg"
          className="w-full lg:w-1/5  flex-col h-[24.4rem]  bg-cover bg-center p-4 "
          style={{
            backgroundImage: `url("/images/Womans-Fashion.png")`,
          }}
        >
          <h2 className="text-3xl text-white font-bold mb-4 ">New Fashion </h2>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full font-bold">
            Shop now
          </button>
        </div>

        {/* Right Section - Products Grid */}
        <div className="w-full lg:w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {/* Product 1 */}
          <div className="bg-black   border-l-2 border-b-2 border-gray-800   p-4 text-start">
            <div className="">
              <p className="text-lg text-white font-semibold">Trouser</p>
              <p className="text-xs text-gray-500"></p>
            </div>
            <div className="flex justify-end  item-start">
              <Image
                width={100}
                height={200}
                src="/images/Trouser.png"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-black border-l-2 border-b-2 border-gray-800  p-4 text-start">
            <div>
              <p className="text-md  text-white font-semibold">Womans Shirt</p>
              <p className="text-xs text-gray-500"></p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/Womens-Shirt.png"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-black border-l-2 border-b-2 border-gray-800 p-4 text-start">
            <div className="mb-2">
              <p className="text-md text-white font-semibold">T-Shirt</p>
              <p className="text-xs text-gray-500"></p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/T-Shirt.png"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-black border-l-2 border-b-2 border-gray-800 p-4 tex-start">
            <div>
              <p className="text-md text-white font-semibold">Shirt</p>
              <p className="text-xs text-gray-500"></p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/Shirt.png"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 5 */}
          <div className="bg-black border-l-2 border-gray-800 p-4 text-start">
            <div>
              <p className="text-md text-white font-semibold">Kurta</p>
              <p className="text-xs text-gray-500"></p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/Kurta.png"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 6 */}
          <div className="bg-black border-l-2 border-gray-800 p-4 text-start">
            <div>
              <p className="text-md  text-white font-semibold">Womans Shirt</p>
              <p className="text-xs text-gray-500"></p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/Womens-Shirt-White.png"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 7 */}

          <div className="bg-black border-l-2 border-gray-800 p-4 text-start">
            <p className="text-md font-semibold text-white">Jogger Pant</p>
            <p className="text-xs text-gray-500"></p>
            <div className="flex justify-end">
              <Image
                width={100}
                height={200}
                src="/images/Jogger.png"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 8 */}
          <div className="bg-black border-l-2 border-gray-800 p-4 text-start">
            <p className="text-md font-semibold ">Womans Shorts</p>
            <p className="text-xs text-gray-500"></p>
            <div className="flex justify-end">
              <Image
                width={100}
                height={200}
                src="/images/Women-Shorts.png"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOutdoorSection;
