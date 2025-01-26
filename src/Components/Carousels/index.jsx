import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleNavigation = (name) => {
    if (name === "agricultural") {
      navigate("/agricultural-pumps");
    } else if (name === "industrial") {
      navigate("/industrial-pumps");
    } else if (name === "residential") {
      navigate("/residential-pumps");
    }
  }

  return (
    <div className="relative w-full md:h-[583px] h-[450px]">
       <hr className="border-t-2 border-slate-900" />
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full md:h-[583px] h-[450px] flex items-center object-cover justify-center cursor-pointer"
              onClick={() => handleNavigation(item.name)}
            >
              <img
                src={item.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-gray-500 text-white rounded-md p-2 hover:bg-gray-600"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-gray-500 text-white rounded-md p-2 hover:bg-gray-600"
      >
        &gt;
      </button>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <hr className="border-t-2 border-slate-900" />
    </div>
  );
};

export default Carousel;
