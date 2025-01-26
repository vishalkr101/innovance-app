import React from "react";
import led from "../../assets/led.jpg";
import HorizontalCard from "../HorizontalCard";

const industrialPumps = [
  {
    id: 1,
    name: "Irrigation Pump",
    description: "Efficient pump for irrigation systems.",
    image: "../assets/led.jpg",
    price: "$200",
    features: ["Efficient water usage", "Durable design", "Easy to maintain"],
  },
  {
    id: 2,
    name: "High-Capacity Water Pump",
    description: "Designed for high water output.",
    image: "../assets/led.jpg",
    price: "$350",
    features: ["Efficient water usage", "Durable design", "Easy to maintain"],
  },
  {
    id: 3,
    name: "Tractor-Mounted Pump",
    description: "Easy-to-use pump for agricultural vehicles.",
    image: "../assets/led.jpg",
    price: "$500",
    features: ["Efficient water usage", "Durable design", "Easy to maintain"],
  },
  {
    id: 1,
    name: "Irrigation Pump",
    description: "Efficient pump for irrigation systems.",
    image: "../assets/led.jpg",
    price: "$200",
    features: ["Efficient water usage", "Durable design", "Easy to maintain"],
  },
  {
    id: 2,
    name: "High-Capacity Water Pump",
    description: "Designed for high water output.",
    image: "../assets/led.jpg",
    price: "$350",
    features: ["Efficient water usage", "Durable design", "Easy to maintain"],
  },
  {
    id: 3,
    name: "Tractor-Mounted Pump",
    description: "Easy-to-use pump for agricultural vehicles.",
    image: "../assets/led.jpg",
    price: "$500",
    features: ["Efficient water usage", "Durable design", "Easy to maintain"],
  },
];

const IndustrialPumps = () => {
  return (
    <div className="container mx-auto py-10 mt-36">
      <div className="heading-vision-container h-24 flex items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-white p-8 animate__animated animate__fadeIn">
          Industrial Pumps
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {industrialPumps.map((pump) => (
          <HorizontalCard
            image={led}
            name={pump.name}
            features={pump.features}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustrialPumps;
