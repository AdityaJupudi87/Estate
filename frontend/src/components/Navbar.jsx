import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by checking for token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update logged-in state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          <li><Link to="/" className="cursor-pointer hover:text-gray-400">Home</Link></li>
          <li><Link to="/#About" className="cursor-pointer hover:text-gray-400">About</Link></li>
          <li><Link to="/#Projects" className="cursor-pointer hover:text-gray-400">Projects</Link></li>
          <li><Link to="/#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</Link></li>
        </ul>

        {/* Conditionally Render Sign Up or Logout Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-200"
          >
            Logout
          </button>
        ) : (
          <Link to="/signup">
            <button className="hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-200">
              Sign Up
            </button>
          </Link>
        )}

        {/* Mobile Menu Button */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
          role="button"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${showMobileMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close Icon"
            role="button"
          />
        </div>

        <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
          <li onClick={() => setShowMobileMenu(false)}>
            <Link to="/" className="px-4 py-2 rounded-full inline-block">Home</Link>
          </li>
          <li onClick={() => setShowMobileMenu(false)}>
            <Link to="/#About" className="px-4 py-2 rounded-full inline-block">About</Link>
          </li>
          <li onClick={() => setShowMobileMenu(false)}>
            <Link to="/#Projects" className="px-4 py-2 rounded-full inline-block">Projects</Link>
          </li>
          <li onClick={() => setShowMobileMenu(false)}>
            <Link to="/#Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</Link>
          </li>

          {/* Conditionally Render Sign Up or Logout Button */}
          {isLoggedIn ? (
            <li onClick={() => { setShowMobileMenu(false); handleLogout(); }}>
              <button className="px-4 py-2 rounded-full inline-block">Logout</button>
            </li>
          ) : (
            <>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link to="/login" className="px-4 py-2 rounded-full inline-block">Login</Link>
              </li>
              <li onClick={() => setShowMobileMenu(false)}>
                <Link to="/signup" className="px-4 py-2 rounded-full inline-block">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
