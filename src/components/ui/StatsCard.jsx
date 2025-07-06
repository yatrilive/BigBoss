import React from "react";

// Simple StatsCard component
export default function StatsCard({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
        {number}
      </div>
      <div className="text-gray-300 font-medium">
        {label}
      </div>
    </div>
  );
} 