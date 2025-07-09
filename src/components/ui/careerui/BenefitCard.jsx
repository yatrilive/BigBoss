import React from "react";

export default function BenefitCard({ icon = "✓", title, description }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-2xl p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 animate-fade-in">
      <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow">
        <span className="text-black font-bold text-xl">{icon}</span>
      </div>
      <h3 className="text-white font-bold text-lg mb-3 drop-shadow">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
} 