import React from "react";

export default function JobCard({ title, type, location, experience, description, requirements, formUrl }) {
  return (
    <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-amber-400 drop-shadow" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>{title}</h3>
        <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow">
          {type}
        </span>
      </div>
      <div className="flex items-center gap-6 mb-4 text-gray-200">
        <span className="flex items-center">
          <span className="mr-2">📍</span>
          {location}
        </span>
        <span className="flex items-center">
          <span className="mr-2">⏰</span>
          {experience}
        </span>
      </div>
      <p className="text-gray-200 mb-6">{description}</p>
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
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg gap-2"
      >
        <span>Apply Online</span>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' /></svg>
      </a>
    </div>
  );
} 