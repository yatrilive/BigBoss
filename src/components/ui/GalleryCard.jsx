import React from "react";

// Simple GalleryCard component
export default function GalleryCard({ title, category, image, description }) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
          <div className="text-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
            <p className="text-gray-200 text-sm">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <span className="text-amber-500 text-sm font-medium bg-amber-500 bg-opacity-20 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
} 