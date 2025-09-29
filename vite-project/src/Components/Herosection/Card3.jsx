import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Star, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const RestaurantsCard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const fetchRestaurants = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/getrestaurants`,
        {},
        { withCredentials: true }
      );
      if (res.data?.data) setRestaurants(res.data.data);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <Link to="/restourentdasboard">
          {/* <Menu size={22} className="text-gray-600" /> */}
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Restaurants</h1>
      </div>

      {restaurants.length > 0 ? (
        <>
          {/* Desktop slider */}
          <div className="relative hidden md:block">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              &#10094;
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              &#10095;
            </button>

            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide py-2"
            >
              {restaurants.map((restro) => {
                const offerText = restro.offers?.join(", ") || "No offers";
                const city = restro.location?.city || "City not available";
                const category =
                  restro.category?.replace(/"/g, "") || "Category";
                const rating = restro.rating || 0;

                return (
                  <div
                    key={restro._id}
                    onClick={() => navigate(`/ResturentDetail/${restro._id}`)}
                    className="min-w-[250px] sm:min-w-[280px] hover:scale-105 cursor-pointer shadow-xl rounded-xl p-2 sm:p-3 bg-white transition-transform duration-200 flex-shrink-0"
                  >
                    <img
                      src={restro.images?.[0] || "/placeholder.png"}
                      alt={restro.name}
                      className="rounded-xl w-full h-40 object-cover"
                    />
                    <div className="mt-3 mx-2">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">
                          {restro.name.replace(/"/g, "")}
                        </p>
                        <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 rounded-md text-xs sm:text-sm">
                          <Star size={14} />
                          <span>{rating.toFixed(1)}</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {category}
                      </p>
                      <div className="text-gray-500 text-xs sm:text-sm mt-1 flex justify-between">
                        <p>{city}</p>
                        <p>
                          {restro.deliveryTime
                            ? `${restro.deliveryTime} min`
                            : "2 km"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 mx-2 space-y-2">
                      <button className="bg-green-500 w-full rounded-md py-1">
                        <div className="flex justify-between font-bold text-white px-2 text-xs sm:text-sm">
                          <h1>{offerText}</h1>
                        </div>
                      </button>
                      <button className="bg-green-200 w-full rounded-md py-1">
                        <div className="flex justify-between font-bold text-green-500 px-2 text-xs sm:text-sm">
                          <h1>{restro.isPureVeg ? "Pure Veg" : "Non-Veg"}</h1>
                          <p>{restro.isOpen ? "Open Now" : "Closed"}</p>
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile horizontal scroll */}
          <div className="md:hidden overflow-x-auto py-2">
            <div className="flex gap-3 px-2">
              {restaurants.map((restro) => {
                const offerText = restro.offers?.join(", ") || "No offers";
                const city = restro.location?.city || "City not available";
                const category =
                  restro.category?.replace(/"/g, "") || "Category";
                const rating = restro.rating || 0;

                return (
                  <div
                    key={restro._id}
                    onClick={() => navigate(`/ResturentDetail/${restro._id}`)}
                    className="min-w-[200px] hover:scale-105 cursor-pointer shadow-xl rounded-xl p-2 bg-white transition-transform duration-200 flex-shrink-0"
                  >
                    <img
                      src={restro.images?.[0] || "/placeholder.png"}
                      alt={restro.name}
                      className="rounded-xl w-full h-36 object-cover"
                    />
                    <div className="mt-2 mx-1">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-800 text-sm">
                          {restro.name.replace(/"/g, "")}
                        </p>
                        <div className="flex items-center gap-1 bg-green-100 text-green-700 px-1 rounded-md text-xs">
                          <Star size={12} />
                          <span>{rating.toFixed(1)}</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs">{category}</p>
                      <div className="text-gray-500 text-xs mt-1 flex justify-between">
                        <p>{city}</p>
                        <p>
                          {restro.deliveryTime
                            ? `${restro.deliveryTime} min`
                            : "2 km"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 mx-1 space-y-1">
                      <button className="bg-green-500 w-full rounded-md py-1 text-xs font-bold text-white">
                        {offerText}
                      </button>
                      <button className="bg-green-200 w-full rounded-md py-1 text-xs font-bold text-green-500">
                        {restro.isPureVeg ? "Pure Veg" : "Non-Veg"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Loading restaurants...</p>
      )}
    </div>
  );
};

export default RestaurantsCard;
