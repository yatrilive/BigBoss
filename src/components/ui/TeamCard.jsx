import React from "react";

// Simple TeamCard component for Leadership Team
export default function TeamCard({ name, position, description }) {
  return (
    <div className="bg-gray-800 rounded-lg p-8 text-center">
      <div className="w-24 h-24 bg-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center">
        <span className="text-black font-bold text-2xl">
          {name.charAt(0)}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-amber-500 font-medium mb-3">{position}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
} 