import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const foodData = [
  {
    name: "Pizza",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
    link: "/pizzas",
  },
  {
    name: "Cake",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
    link: "/Cakes",
  },
  {
    name: "Dosa",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
    link: "/Northindian",
  },
  {
    name: "Burger",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
    link: "/Burger",
  },
  {
    name: "North Indian",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Gulab%20Jamun.png",
    link: "/Gulabjamuns",
  },
  {
    name: "Ice Cream",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png",
    link: "/IceCream",
  },
  {
    name: "Rolls",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
    link: "/Rolls",
  },
  {
    name: "Pastry",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pastry.png",
    link: "/Pastry",
  },
  {
    name: "Rasmalai",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rasmalai.png",
    link: "/Rasmalai",
  },
  {
    name: "Noodles",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
    link: "/Noodles",
  },
  // Add more items if needed
];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
  >
    <FaChevronLeft />
  </button>
);

const FoodCategories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: { slidesToShow: 6, slidesToScroll: 6, rows: 2 },
      },
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 5, slidesToScroll: 5, rows: 2 },
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 4, slidesToScroll: 4, rows: 2 },
      },
      {
        breakpoint: 768, // md
        settings: { slidesToShow: 3, slidesToScroll: 3, rows: 2 },
      },
      {
        breakpoint: 640, // sm
        settings: { slidesToShow: 2, slidesToScroll: 2, rows: 2 },
      },
      {
        breakpoint: 480, // xs
        settings: { slidesToShow: 1, slidesToScroll: 1, rows: 2 },
      },
    ],
  };

  return (
    <section className="relative py-10 px-4 max-w-7xl mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Order our best food options
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {foodData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="text-center">
                <NavLink to={item.link || "#"}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  {/* <p className="mt-2 text-sm font-medium">{item.name}</p> */}
                </NavLink>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FoodCategories;
