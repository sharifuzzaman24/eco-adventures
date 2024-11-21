import React from "react";
import { FaLeaf, FaHome, FaSearch, FaUser, FaBars } from "react-icons/fa"; // Eco-friendly icons
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white py-4 shadow-lg fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        <div className="text-2xl font-semibold flex items-center space-x-2">
          <FaLeaf className="text-white text-3xl" />
          <span>EcoAdventures</span>
        </div>

        
        <div className="space-x-6 hidden md:flex items-center">
          <NavLink
            to={'/'}
            className="text-white hover:text-green-200 transition-all duration-200"
          >
            <FaHome className="inline mr-2" />
            Home
          </NavLink>
          <a
            
            className="text-white hover:text-green-200 transition-all duration-200"
          >
            <FaSearch className="inline mr-2" />
            Adventures
          </a>
          <a
            
            className="text-white hover:text-green-200 transition-all duration-200"
          >
            About
          </a>
          <NavLink
            to={'/login'}
            className="text-white hover:text-green-200 transition-all duration-200"
          >
            <FaUser className="inline mr-2" />
            Login
          </NavLink>
        </div>

        
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
