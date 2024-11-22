import React, { useContext, useState } from "react";
import { FaLeaf, FaHome, FaSearch, FaUser, FaBars } from "react-icons/fa"; 
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { IoDocumentAttach } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { GrDocumentUpdate } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

          {user ? (
            <div className="dropdown dropdown-end tooltip tooltip-info tooltip-left" data-tip={user.email}>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User Profile" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-green-50 rounded-lg z-[1] mt-4 w-52 p-2 shadow"
              >
                <li>
                  <Link to={'/profile'} className="justify-between text-gray-700">
                    Profile
                  </Link>
                </li>
                <li><Link to={'/update-profile'} className=" text-gray-700">Update Profile</Link></li>
                <li><button onClick={logOut} className=" text-gray-700">Logout</button></li>
              </ul>
            </div>
          ) : (
            <NavLink
              to={'/login'}
              className="text-white hover:text-green-200 transition-all duration-200"
            >
              <FaUser className="inline mr-2" />
              Login
            </NavLink>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-green-600 text-white p-4 absolute top-16 left-0 w-full shadow-lg z-10">
          <NavLink
            to={'/'}
            className="block py-2 px-4 hover:bg-green-200 transition-all duration-200"
            onClick={toggleMenu}
          >
            <FaHome className="inline mr-2" />
            Home
          </NavLink>
          <a
            className="block py-2 px-4 hover:bg-green-200 transition-all duration-200"
            onClick={toggleMenu}
          >
            <FaSearch className="inline mr-2 font-bold" />
            Adventures
          </a>
          <a
            className="block py-2 px-4 hover:bg-green-200 transition-all duration-200"
            onClick={toggleMenu}
          >
            <IoDocumentAttach className="inline mr-2" />
            About
          </a>
          {user ? <div className="bg-gray-700 w-full h-[2px] mt-2"></div> : ''}
          {user ? (
            <div className="mt-2">
              <Link to={'/profile'} className="block py-2 px-4 text-white" onClick={toggleMenu}>
                <CgProfile className="inline mr-2 text-lg" />
                Profile
              </Link>
              <Link to={'/update-profile'} className="block py-2 px-4 text-white" onClick={toggleMenu}>
                <GrDocumentUpdate className="inline mr-2 text-lg" />
                Update Profile
              </Link>
              <button onClick={logOut} className="block py-2 px-4 text-white">
                <IoIosLogOut className="inline mr-2 text-lg" />
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to={'/login'}
              className="block py-2 px-4 text-white hover:bg-green-200 transition-all duration-200"
              onClick={toggleMenu}
            >
              <FaUser className="inline mr-2" />
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
