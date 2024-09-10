"use client";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";

const Banner: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Mens");

  const tabs = [
    "Mens",
    "Clothes and wear",
    "Womens",
  ];

  const getContent = () => {
    switch (activeTab) {
      case "Mens":
        return "Men's trending fashion items";
      case "Clothes and wear":
        return "Trending fashion items";
      case "Womens":
        return "Women's cloths here"

      default:
        return "No content available";
    }
  };

  return (
    <div className=" mt-10">
      <div className="flex flex-col md:flex-row md:justify-between border-2 rounded-lg border-gray-300 p-1">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 p-4">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer p-2 ${activeTab === tab ? "bg-blue-200 font-medium rounded-lg" : ""
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="w-full md:w-3/5 p-4">

          <div
            className={`p-6 rounded-lg h-[20rem] ${activeTab === "Mens" && "bg-mens-fashion"} ${activeTab === "Clothes and wear" && "bg-clothes"} ${activeTab === "Womens" && "bg-womens-fashion"}`}
          >
            <h2 className="text-xl font-semibold bg-white text-black w-fit p-2 rounded-xl">
              {getContent()}
            </h2>
            <button className="bg-white text-black p-2 mt-4 rounded-md">
              Learn more
            </button>
          </div>
        </main>

        {/* User/Promotion Panel */}
        <aside className="w-full md:w-1/5 p-4 flex flex-col gap-4">
          <div className="bg-[#E3F0FF] p-4 rounded-lg">
            <h3 className="flex items-center gap-2">
              <MdAccountCircle className="text-4xl" /> Hi, user lets get started
            </h3>
            <div className="flex flex-col">
              <button className="bg-[#127FFF] font-medimum text-white py-2 px-4 rounded-md mt-2">
                Join now
              </button>
              <button className="bg-white text-[#0D6EFD] font-medium py-2 px-4 rounded-md mt-2">
                Log in
              </button>
            </div>
          </div>
          <div className="bg-[#F38332] text-white p-4 rounded-lg">
            <p>Get US $10 off with a new supplier</p>
          </div>
          <div className="bg-[#55BDC3] text-white p-4 rounded-lg">
            <p>Send quotes with supplier preferences</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Banner;
