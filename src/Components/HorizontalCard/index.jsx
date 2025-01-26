import React from "react";

const HorizontalCard = ({ image, name, features }) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover rounded-md animate__animated animate__fadeIn"
        />
      </div>
      {/* Content Section */}
      <div className="w-2/3 flex flex-col">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <ul className="list-disc list-inside text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="text-lg">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizontalCard;
