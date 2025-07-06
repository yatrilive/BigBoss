import React from "react";

export default function JobCard({ title, type, location, experience, description, requirements, onApply }) {
  return (
    <div className="bg-gray-700 rounded-lg p-8">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-amber-500">{title}</h3>
        <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">
          {type}
        </span>
      </div>
      <div className="flex items-center gap-6 mb-4 text-gray-300">
        <span className="flex items-center">
          <span className="mr-2">📍</span>
          {location}
        </span>
        <span className="flex items-center">
          <span className="mr-2">⏰</span>
          {experience}
        </span>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <div>
        <h4 className="text-white font-bold mb-3">Requirements:</h4>
        <ul className="space-y-2">
          {requirements && requirements.map((req, i) => (
            <li key={i} className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              {req}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="mt-6 bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
        onClick={onApply}
      >
        Apply for {title}
      </button>
    </div>
  );
} 