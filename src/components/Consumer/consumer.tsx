import Image from "next/image";
import React from "react";

const Consumer = () => {
  return (
    <div className="bg-white mt-[22rem] lg:mt-[2rem] border-2 border-gray-300">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 ">
        {/* Left Section - Background Image, Title, and Button */}
        <div
          id="backimg"
          className="w-full lg:w-1/5 flex-col h-[26.8rem]  bg-cover bg-center p-4 "
          style={{
            backgroundImage: `url("/images/Mens-Fashion.png")`,
          }}
        >
          <h2 className="text-3xl text-white font-bold mb-4">For mans</h2>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full font-bold">
            Shop now
          </button>
        </div>

        {/* Right Section - Products Grid */}
        <div className="w-full lg:w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {/* Product 1 */}
          <div className="bg-white border-2   p-4 text-start">
            <div className="">
              <p className="text-sm font-semibold">Soft chairs</p>
              <p className="text-xs text-gray-500">From USD 19</p>
            </div>
            <div className="flex justify-end  item-start">
              <Image
                width={100}
                height={200}
                src="/images/mensshirts.jpg"
                alt="Soft chairs"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white border-2  p-4 text-start">
            <div>
              <p className="text-sm font-semibold">Sofa & chair</p>
              <p className="text-xs text-gray-500">From USD 19</p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/menspents.jpg"
                alt="Sofa & chair"
                className=" mb-4 w-[100px] h-[100px]"
              />
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white border-2 p-4 text-start">
            <div className="mb-2">
              <p className="text-sm font-semibold">Kitchen dishes</p>
              <p className="text-xs text-gray-500">From USD 19</p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/mensshorts.jpg"
                alt="Kitchen dishes"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white border-2 p-4 tex-start">
            <div>
              <p className="text-sm font-semibold">Smart watches</p>
              <p className="text-xs text-gray-500">From USD 19</p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/gentsimg2.jpg"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 5 */}
          <div className="bg-white border-2 p-4 text-start">
            <div>
              <p className="text-sm font-semibold">Kitchen mixer</p>
              <p className="text-xs text-gray-500">From USD 100</p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/joggerpentsboys.jpg"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 6 */}
          <div className="bg-white border-2 p-4 text-start">
            <div>
              <p className="text-sm font-semibold">Blenders</p>
              <p className="text-xs text-gray-500">From USD 39</p>
            </div>
            <div className="flex justify-end item-start">
              <Image
                width={100}
                height={200}
                src="/images/menkurta.jpg"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 7 */}

          <div className="bg-white border-2 p-4 text-start">
            <p className="text-sm font-semibold">Home appliance</p>
            <p className="text-xs text-gray-500">From USD 19</p>
            <div className="flex justify-end">
              <Image
                width={100}
                height={200}
                src="/images/womansTshirts.jpg"
                alt="Smart watches"
                className=" mb-4"
              />
            </div>
          </div>

          {/* Product 8 */}
          <div className="bg-white border-2 p-4 text-start">
            <p className="text-sm font-semibold">Coffee maker</p>
            <p className="text-xs text-gray-500">From USD 10</p>
            <div className="flex justify-end">
              <Image
                width={100}
                height={200}
                src="/images/mensshirts2.jpg"
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

export default Consumer;
