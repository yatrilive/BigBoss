import React from "react";

export default function StepCard({ step, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-black font-bold text-xl">{step}</span>
      </div>
      <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
} 