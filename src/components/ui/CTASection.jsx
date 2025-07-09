import React from "react";
import { Link } from "react-router-dom";

export default function CTASection({
  heading,
  description,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  primaryButtonClass = "bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-lg transition duration-300",
  secondaryButtonClass = "border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg transition duration-300",
  className = "",
  children
}) {
  // Helper to check if a link is external
  const isExternal = (url) => url && (url.startsWith("http://") || url.startsWith("https://"));

  return (
    <section className={`py-20 bg-gray-800 ${className}`}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{heading}</h2>
        )}
        {description && (
          <p className="text-xl text-gray-300 mb-8">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          {primaryText && primaryLink && (
            isExternal(primaryLink) ? (
              <a href={primaryLink} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>
                {primaryText}
              </a>
            ) : (
              <Link to={primaryLink} className={primaryButtonClass}>
                {primaryText}
              </Link>
            )
          )}
          {secondaryText && secondaryLink && (
            <Link to={secondaryLink} className={secondaryButtonClass}>
              {secondaryText}
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
} 