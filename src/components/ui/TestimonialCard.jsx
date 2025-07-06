import React from "react";

// Simple TestimonialCard component
export default function TestimonialCard({ name, company, text, rating }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex text-amber-500 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
      <p className="text-gray-300 mb-4 italic">"{text}"</p>
      <div>
        <p className="text-white font-bold">{name}</p>
        <p className="text-amber-500 text-sm">{company}</p>
      </div>
    </div>
  );
} 