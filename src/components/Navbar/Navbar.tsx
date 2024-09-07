import React from 'react';
import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                {/* Left Side */}
                <div className="flex w-1/2 justify-between items-center space-x-4">
                    <div className="flex gap-2 items-center">
                        {/* Brand Logo */}
                        <span className='bg-[#0D6EFD] text-white p-1 rounded-lg'><FaShoppingBag /></span>
                        <div className="text-[#8CB7F5] font-bold text-xl">Brand</div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-[#0D6EFD] rounded-full py-2 pl-4 pr-10 w-[30rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select className="absolute right-16 border-x-2 p-2 border-[#0D6EFD] top-1/2 transform -translate-y-1/2 text-gray-500">
                            <option value="all">All categories</option>
                        </select>
                        <span className='absolute right-2 top-1/2 transform -translate-y-1/2'>Search</span>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    {/* Icons */}
                    <div className="flex space-x-4">
                        <Link href="#">
                            <span className="text-gray-700 hover:text-blue-500">Profile</span>
                        </Link>
                        <Link href="#">
                            <span className="text-gray-700 hover:text-blue-500">Messages</span>
                        </Link>
                        <Link href="#">
                            <span className="text-gray-700 hover:text-blue-500">Orders</span>
                        </Link>
                        <Link href="#">
                            <span className="text-gray-700 hover:text-blue-500">My Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Nav Links */}
            <nav className="hidden container mx-auto lg:flex justify-between">
                <div className='space-x-4'>
                    <Link href="#">
                        <span className="text-gray-700 hover:text-blue-500">All Category</span>
                    </Link>
                    <Link href="#">
                        <span className="text-gray-700 hover:text-blue-500">Hot Offers</span>
                    </Link>
                    <Link href="#">
                        <span className="text-gray-700 hover:text-blue-500">Gift Boxes</span>
                    </Link>
                    <Link href="#">
                        <span className="text-gray-700 hover:text-blue-500">Projects</span>
                    </Link>
                    <Link href="#">
                        <span className="text-gray-700 hover:text-blue-500">Menu Item</span>
                    </Link>
                </div>
                {/* Language and Shipping */}
                <div className="flex items-center space-x-4">
                    <select className="text-gray-700">
                        <option>English, USD</option>
                    </select>
                    <div>
                        <span role="img" aria-label="Germany Flag">
                            🇩🇪
                        </span>
                        Ship to
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
