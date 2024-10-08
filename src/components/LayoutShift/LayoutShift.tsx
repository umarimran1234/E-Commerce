"use client";

import React, { useState } from "react";
import { IoGridSharp, IoReorderThreeOutline } from "react-icons/io5";

interface ProductProps {
  name: string;
  image: string;
  price: number;
  rating: number;
  orders: number;
  description: string;
}

const products: ProductProps[] = [
  {
    name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
    image: "/images/FirstShirt.png",
    price: 998,
    rating: 7.5,
    orders: 154,
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
    image: "/images/SecondShirt.png",
    price: 998,
    rating: 7.5,
    orders: 154,
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
    image: "/images/ThirdShirt.png",
    price: 998,
    rating: 7.5,
    orders: 154,
    description: "Lorem ipsum dolor sit amet...",
  },
  // ... more products
];

function LayoutShift() {
  const [isGrid, setIsGrid] = useState(false);

  const handleGrid = () => {
    // console.log("Grid Clicked")
    setIsGrid(true);
  };

  const handleNormal = () => {
    // console.log("Normal Layout")
    setIsGrid(false);
  };

  // console.log(isGrid)
  return (
    <>
      <div className=" mx-auto">
        <div className="flex items-center gap-1 border-2 border-gray-900 p-2 md:items-center md:gap-2 flex-col rounded-lg lg:flex-row lg:justify-between mt-20">
          <p className="text-white">
            12,911 items in{" "}
            <span className="font-semibold">Mobile accessory</span>
          </p>
          <div className="flex items-center md:space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-900 rounded"
              />
              <label className="ml-2 mr-2 text-white">Verified only</label>
            </div>
            <div className="flex gap-1 md:gap-2 items-center">
              <select className="border-2 rounded px-2">
                <option value="">Featured</option>
                {/* Add more options as needed */}
              </select>
              <button
                onClick={() => handleGrid()}
                className={`${
                  isGrid
                    ? "p-1 md:text-xl bg-gray-300 rounded-lg border-2"
                    : "p-1 md:text-xl rounded-lg border-2"
                }`}
              >
                <IoGridSharp />
              </button>
              <button
                onClick={() => handleNormal()}
                className={`${
                  !isGrid
                    ? "p-1 md:text-xl bg-gray-300 rounded-lg border-2"
                    : "p-1 md:text-xl rounded-lg border-2"
                }`}
              >
                <IoReorderThreeOutline />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:container mx-auto mt-10">
        <div
          className={`grid {!isGrid ? "gap-8 grid-cols-1" : "lg:grid-cols-3 md:grid-cols-2 gap-4"}`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-black border-2 border-gray-900 m-2 rounded-lg shadow-md overflow-hidden"
            >
              <div
                className={`flex ${
                  !isGrid ? "md:flex-row flex-col " : "flex-col "
                }`}
                style={{ alignItems: "center" }}
              >
                <img
                  src={product?.image}
                  alt={product?.name}
                  className={`{!isGrid ? "w-fit mx-auto md:mx-0 h-52 object-cover" : ""}`}
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{product?.name}</h2>
                  <div className="flex md:flex-row flex-col justify-between">
                    <div>
                      <p className="text-2xl mt-2 font-semibold text-blue-500">
                        {product?.price.toFixed(2)}
                      </p>
                      <p className="text-gray-400">
                        <span className="text-yellow-500">★★★★★</span>{" "}
                        {product?.rating}
                      </p>
                    </div>
                    <div className="flex gap-2 pt-6">
                      <p className="text-gray-400">Orders: {product?.orders}</p>
                      <p className="text-[#00B517]">Free Shipping</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-500">{product?.description}</p>
                    <button className="font-medium text-[#0D6EFD]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LayoutShift;
