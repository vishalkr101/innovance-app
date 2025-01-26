import React from 'react'

const Card = ({image, text}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border bg-white">
      <img src={image} alt="Card" className="w-80 h-64 object-contain" />
      <div className="p-4">
        <p className="text-gray-800 text-lg font-semibold">{text}</p>
      </div>
    </div>
  )
}

export default Card