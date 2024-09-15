"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { MdAccountCircle, MdMessage } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black shadow-md">
      <div className="container  mb-2 mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex w-full justify-between items-center space-x-4">
          <Link href="/" className="flex gap-2 items-center">
            {/* Brand Logo */}
            <Image
              width={100}
              height={200}
              alt="Website logo"
              src="/images/E-CommerceLogo-1.jpg"
              className=" rounded-lg  " // Ensure logo resizes properly
            />
          </Link>

          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-[red] rounded-lg py-2 pl-4 pr-10 w-[18rem] md:w-[30rem] focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <select className="absolute right-16 border-l-2 border-[red] top-1/2 transform -translate-y-1/2 text-[#1C1C1C] p-2 text-gray-500">
              <option value="all">All category</option>
            </select>
            <button className="absolute border-[#0D6EFD] right-0 rounded-r-lg text-white top-1/2 transform -translate-y-1/2 p-2 bg-[red]">
              Search
            </button>
          </div>

          {/* Hamburger Icon */}

          {/* Right Side Icons - hidden on smaller devices */}

          <div className=" hidden md:flex space-x-4 text-[#8B96A5]">
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              <MdAccountCircle className="text-2xl" />
              <span className="text-white hover:text-blue-500">Profile</span>
            </Link>
            {/* <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              <MdMessage className="text-2xl" />
              <span className="text-white hover:text-blue-500">
                Messages
              </span>
            </Link> */}
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              <FaHeart className="text-2xl" />
              <span className="text-white hover:text-blue-500">Orders</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col justify-center items-center"
            >
              <FaCartShopping className="text-2xl" />
              <span className="text-white hover:text-blue-500">My Cart</span>
            </Link>
          </div>
          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button onClick={handleMenuToggle}>
              <IoReorderThreeOutline className="text-3xl text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown menu for mobile/tablet */}
      {menuOpen && (
        <nav className="lg:hidden bg-black shadow-md transition-transform duration-300">
          <ul className="flex flex-col items-start space-y-2 px-4 py-2">
            <li>
              <Link href="#" className="block text-white hover:text-blue-500">
                All Category
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-white hover:text-blue-500">
                Hot Offers
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-white hover:text-blue-500">
                Gift Boxes
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-white hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-white hover:text-blue-500">
                Menu Item
              </Link>
            </li>
            <li className=" flex space-x-4 text-[#8B96A5]">
              <Link
                href="#"
                className="flex flex-col justify-center items-center"
              >
                <MdAccountCircle className="text-2xl" />
                <span className="text-white hover:text-blue-500">Profile</span>
              </Link>
              <Link
                href="#"
                className="flex flex-col justify-center items-center"
              >
                <MdMessage className="text-2xl" />
                <span className="text-white hover:text-blue-500">Messages</span>
              </Link>
              <Link
                href="#"
                className="flex flex-col justify-center items-center"
              >
                <FaHeart className="text-2xl" />
                <span className="text-white hover:text-blue-500">Orders</span>
              </Link>
              <Link
                href="#"
                className="flex flex-col justify-center items-center"
              >
                <FaCartShopping className="text-2xl" />
                <span className="text-white hover:text-blue-500">My Cart</span>
              </Link>
            </li>
            <li>
              <select className="w-full p-2 border border-gray-300">
                <option value="all">Help</option>
              </select>
            </li>
            <li className="relative  block">
              <input
                type="text"
                placeholder="Search"
                className="border border-[red] rounded-lg py-2 pl-4 pr-10 w-[18rem] md:w-[30rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="absolute right-16 border-l-2 border-[red] top-1/2 transform -translate-y-1/2 text-[#1C1C1C] p-2 text-gray-500">
                <option value="all">All category</option>
                <option value="Mens">Mens</option>
                <option value="Wmans">Womans</option>
              </select>
              <button className="absolute border-[red] right-0 rounded-r-lg text-white top-1/2 transform -translate-y-1/2 p-2 bg-[red]">
                Search
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Menu */}
      <nav className="hidden lg:flex container mx-auto items-center justify-between">
        <div className="space-x-8 font-medium flex items-center mb-2">
          <Link href="#" className="flex items-center gap-1">
            <IoReorderThreeOutline className="font-bold text-xl" />
            <select className="text-black hover:text-blue-500">
              <option value="">All Category</option>
              <option value="">Mens</option>
              <option value="">Womans</option>
            </select>
          </Link>
          <Link href="/">
            <span className="text-white hover:text-blue-500">Home</span>
          </Link>
          <Link href="/second-page">
            <span className="text-white hover:text-blue-500">About us</span>
          </Link>
          <Link href="/signup">
            <span className="text-white hover:text-blue-500">Contact us</span>
          </Link>
          <Link href="/third-page">
            <span className="text-white hover:text-blue-500">Shop</span>
          </Link>
        </div>
        {/* Language and Shipping */}
        <div className="flex items-center font-medium space-x-4">
          <select className="text-gray-700">
            <option>English,</option>
          </select>
          {/* <div>
            <select className="text-white">
              <option>Ship to</option>
            </select>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
