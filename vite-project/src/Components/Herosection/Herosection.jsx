import React, { useState } from "react";
import FoodCategories from "./Card";
import Footer from "../Footer";
import { GoArrowUpRight } from "react-icons/go";
import GrocerySlider from "./Card2";
import RestaurantCardSlider from "./Card3";
import { NavLink } from "react-router-dom";
import SignUpModal from "../Signup";
import Login from "../Login";
import { useSelector } from "react-redux";
import { HiLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./Logo.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  let dashboardRoute = "/login";
  if (isAuthenticated && user) {
    if (user.role === "admin") dashboardRoute = "/admin/dashboard";
    else if (user.role === "owner") dashboardRoute = "/dashboard";
    else if (user.role === "user") dashboardRoute = "/user/dashboard";
  }

  return (
    <>
      <header className="bg-blue-400 shadow-md relative overflow-hidden">
        {/* Navbar */}
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="logo text-white text-2xl font-bold">
            Bite<span className="rush">Rush</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mt-10">
            <a href="#" className="text-white hover:underline font-bold">
              Swiggy Corporate
            </a>
            <a href="#" className="text-white font-bold hover:underline">
              Partner with us
            </a>
            <button className="flex items-center gap-2 border border-white text-white px-4 sm:px-5 py-2 sm:py-3 font-bold rounded-2xl hover:bg-white hover:text-orange-600 text-sm sm:text-base">
              Get the App <GoArrowUpRight />
            </button>
            {user?.loggedIn ? (
              <NavLink to={dashboardRoute}>
                <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl hover:opacity-90 text-sm sm:text-base">
                  Dashboard
                </button>
              </NavLink>
            ) : (
              <button
                className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl hover:opacity-90 text-sm sm:text-base"
                onClick={() => setShowLogin(true)}
              >
                Sign In
              </button>
            )}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-orange-600 px-4 pb-4 space-y-2">
            <a href="#" className="block text-white py-2 hover:underline">
              Swiggy Corporate
            </a>
            <a href="#" className="block text-white py-2 hover:underline">
              Partner with us
            </a>
            <button className="flex items-center gap-2 border border-white text-white px-5 py-3 font-bold rounded-2xl hover:bg-white hover:text-orange-600">
              Get the App <GoArrowUpRight />
            </button>
            <button
              className="w-full bg-black text-white px-6 py-3 text-lg font-bold rounded-2xl hover:opacity-90"
              onClick={() => setShowLogin(true)}
            >
              Sign In
            </button>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[600px] lg:min-h-[700px] px-4 lg:px-0">
          {/* Left Image - hidden on mobile */}
          <img
            className="hidden lg:block absolute -left-6 md:-left-20 w-[350px] h-auto lg:h-[600px] object-contain"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            alt="Veggies"
          />

          {/* Center Content */}
          <div className="flex flex-col justify-center items-center text-center z-10 px-2 sm:px-4 lg:px-0 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
              Order food & groceries. Discover <br /> best restaurants. BiteRush
              it!
            </h1>

            {/* Inputs */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 w-full max-w-[600px] sm:max-w-[800px]">
              <div className="relative w-full sm:w-[45%]">
                <HiLocationMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600 text-xl" />
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="pl-10 pr-4 py-2 sm:py-3 w-full rounded-xl text-base sm:text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="relative w-full sm:w-[55%]">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Search for restaurants, items or more"
                  className="pl-10 pr-4 py-2 sm:py-3 w-full rounded-xl text-base sm:text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Food Banner Scroll */}

            <div className="flex gap-3 sm:gap-4 justify-start px-2 md:px-0">
              <img
                className="w-[150px] sm:w-[220px] md:w-[280px] h-[150px] sm:h-[220px] md:h-[290px] object-cover rounded-lg flex-shrink-0"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
                alt="Food 1"
              />
              <img
                className="w-[150px] sm:w-[220px] md:w-[280px] h-[150px] sm:h-[220px] md:h-[290px] object-cover rounded-lg flex-shrink-0"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
                alt="Food 2"
              />
              <img
                className="w-[150px] sm:w-[220px] md:w-[280px] h-[150px] sm:h-[220px] md:h-[290px] object-cover rounded-lg flex-shrink-0"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
                alt="Food 3"
              />
            </div>
          </div>

          {/* Right Image - hidden on mobile */}
          <img
            className="hidden lg:block absolute -right-6 md:-right-20 w-[350px] h-auto lg:h-[600px] object-contain"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
            alt="Sushi"
          />
        </div>
      </header>

      {/* Sections */}
      <div className="min-h-screen bg-white">
        <FoodCategories />
      </div>
      <div className="min-h-screen">
        <GrocerySlider />
      </div>
      <div className="min-h-screen">
        <RestaurantCardSlider />
      </div>
      <div>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt="App Banner"
        />
      </div>
      <Footer />

      {/* Modals */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
          <Login closeModal={() => setShowLogin(false)} />
        </div>
      )}
      {showSignUp && <SignUpModal closeModal={() => setShowSignUp(false)} />}
    </>
  );
}

export default Home;
