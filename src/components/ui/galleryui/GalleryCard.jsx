import React from "react";

// GalleryCard: always show all fields in order
export default function GalleryCard({ image, title, location, date, description }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg p-0 flex flex-col card">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-amber-400 mb-1">Location: {location}</p>
        <p className="text-sm text-gray-300 mb-1">Date: {date}</p>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
} 