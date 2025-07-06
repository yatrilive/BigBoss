import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  // Use the correct public path for the image (case-sensitive)
  const mainImage = "/Video.mp4";

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Section-only Background Video */}
      <video
        src={mainImage}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ pointerEvents: "none" }}
      />
      {/* Overlay for readability and blur */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.10)", backdropFilter: "blur(4px)" }} />
      {/* Foreground Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Shield Icon */}
        <div className="mb-6 animate-pulse">
          <span className="inline-block text-6xl md:text-7xl text-amber-400 drop-shadow-lg">
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l7.5 3v5.5c0 5.25-3.75 9.75-7.5 11-3.75-1.25-7.5-5.75-7.5-11V6L12 3z" />
            </svg>
          </span>
        </div>
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
          Ultimate <span className="text-amber-400">Security</span> &<br />Peace of Mind
        </h1>
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
          Protecting your business, events, and loved ones with <span className="text-amber-400 font-semibold">elite security solutions</span>—trusted by hundreds of clients.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Get Free Quote
          </Link>
          <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg">
            View Services
          </Link>
        </div>
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            ["✔", "Licensed & Insured"],
            ["⏰", "24/7 Response"],
            ["🛡️", "100+ Trained Officers"],
            ["🏆", "Trusted by 500+ Clients"]
          ].map(([icon, label], i) => (
            <div key={i} className="bg-gray-800 bg-opacity-80 rounded-full px-6 py-2 text-amber-400 font-bold text-sm flex items-center gap-2 border border-amber-400">
              <span>{icon}</span> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}