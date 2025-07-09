import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const mainImage = "/Video.mp4";
  return (
    <section className="relative min-h-[70vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden">
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
      {/* Stronger Overlay for readability and drama */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }} />
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-10 md:h-16 z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #111827 100%)" }} />
      {/* Foreground Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 text-center flex flex-col items-center animate-fade-in">
        {/* Animated Shield Icon */}
        <div className="mb-4 md:mb-6 animate-bounce-slow">
          <span className="inline-block text-5xl sm:text-6xl md:text-8xl text-amber-400 drop-shadow-lg">
            <svg width="48" height="48" className="sm:w-16 sm:h-16 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l7.5 3v5.5c0 5.25-3.75 9.75-7.5 11-3.75-1.25-7.5-5.75-7.5-11V6L12 3z" />
            </svg>
          </span>
        </div>
        {/* Accent Line */}
        <div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-4 md:mb-6 rounded-full animate-fade-in" />
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white mb-2 md:mb-4 leading-tight animate-slide-in-down" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85)' }}>
          Ultimate <span className="text-amber-400">Security</span> &<br className="hidden sm:block" />Peace of Mind
        </h1>
        {/* Description */}
        <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-4 md:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
          Protecting your business, events, and loved ones with <span className="text-amber-400 font-semibold">elite security solutions</span>—trusted by hundreds of clients.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 md:mb-8 animate-fade-in">
          <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Get Free Quote
          </Link>
          <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-2 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 shadow-lg">
            View Services
          </Link>
        </div>
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 md:mb-8 animate-fade-in">
          {[
            ["✔", "Licensed & Insured"],
            ["⏰", "24/7 Response"],
            ["🛡️", "100+ Trained Officers"],
            ["🏆", "Trusted by 500+ Clients"]
          ].map(([icon, label], i) => (
            <div key={i} className="bg-gray-800 bg-opacity-80 rounded-full px-3 py-1 sm:px-6 sm:py-2 text-amber-400 font-bold text-xs sm:text-sm flex items-center gap-2 border-2 border-amber-400 shadow-lg backdrop-blur-md">
              <span>{icon}</span> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Add custom animation classes in your CSS if not present: animate-fade-in, animate-slide-in-down, animate-bounce-slow