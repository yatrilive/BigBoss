import React from "react";

// Simple CertificationCard component
export default function CertificationCard({ title, description }) {
  return (
    <div className="bg-gray-600 rounded-lg p-6">
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
} 