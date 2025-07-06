import React from "react";
import { Link } from "react-router-dom";

// Simple ServiceCard component
export default function ServiceCard({ title, description, icon, image, showImage = false, features }) {
  if (showImage) {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
        <div className="h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-amber-500 mb-4">{title}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
          {features && features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-white font-bold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link to="/contact">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300">
              Get Quote for {title}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-amber-500 mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link to="/services" className="text-amber-500 hover:text-amber-400 font-medium">
        Learn More →
      </Link>
    </div>
  );
} 