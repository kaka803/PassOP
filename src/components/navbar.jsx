import React, { useState } from "react";
import menuicon from '../assets/menu.svg';

const Navbar = ({handleSearchChange, searchQuery}) => {

   

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg ">
            <div className="flex items-center justify-between max-w-7xl m-auto">
                {/* Logo */}
                <div className="text-xl font-bold cursor-pointer">
                    <a href="#">PassOP</a>
                </div>

                {/* Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-blue-400">Home</a>
                    <a href="#" className="hover:text-blue-400">About</a>
                    <a href="#" className="hover:text-blue-400">Contact</a>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search name..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="bg-gray-800 text-white px-4 py-2 rounded-full outline-none placeholder-gray-500"
                    />
                    <div className="absolute right-1.5 top-1">
                    <lord-icon
    src="https://cdn.lordicon.com/wjyqkiew.json"
    trigger="hover"
    stroke="bold"
    colors="primary:#ffffff,secondary:#ffffff"
    className='max-[700px]:w-[26px]'>
</lord-icon>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white">
                        <lord-icon
                            src="https://cdn.lordicon.com/ipnwkgdy.json"
                            colors="primary:#ffffff"
                            trigger="hover"
                            className='max-[700px]:w-[32px]'>

                        </lord-icon>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
