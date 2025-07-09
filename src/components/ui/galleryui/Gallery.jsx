import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import GalleryCard from "./GalleryCard";
import CTASection from "../CTASection";
import WhatsAppButton from "../WhatsAppButton";

export default function Gallery() {
  // Gallery data
  const galleryData = [
    { id: 1, title: "Event Security", category: "Events", location: "Delhi", date: "May 2024", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop", description: "Professional security at corporate events" },
    { id: 2, title: "Wedding Protection", category: "Events", location: "Chandigarh", date: "June 2024", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop", description: "Handled 200+ guests with discreet security" },
    { id: 3, title: "Corporate Security", category: "Corporate", location: "Gurgaon", date: "April 2024", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", description: "Business premises protection" },
    { id: 4, title: "VIP Protection", category: "VIP", location: "Mumbai", date: "March 2024", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", description: "Personal security services" },
    { id: 5, title: "Residential Security", category: "Residential", location: "Pune", date: "Feb 2024", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop", description: "Home and family protection" },
    { id: 6, title: "Construction Security", category: "Industrial", location: "Noida", date: "Jan 2024", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", description: "Site and equipment protection" },
    { id: 7, title: "Retail Security", category: "Retail", location: "Ludhiana", date: "Dec 2023", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop", description: "Loss prevention and safety" },
    { id: 8, title: "Concert Security", category: "Events", location: "Goa", date: "Nov 2023", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", description: "Large event crowd control" },
    { id: 9, title: "Office Security", category: "Corporate", location: "Bangalore", date: "Oct 2023", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop", description: "Workplace protection services" }
  ];
  const categories = ["All", ...Array.from(new Set(galleryData.map(item => item.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredData = selectedCategory === "All" ? galleryData : galleryData.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      {/* Top background image with overlay and intro text */}
      <section className="relative h-64 md:h-80 flex items-center justify-center mb-4 overflow-hidden pt-16 w-full">
        {/* Section-only Background Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_0rlfDUcKjbLwSaDwE0uBxgvkwL9ubae8w&s"
          alt="Gallery background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ pointerEvents: "none" }}
        />
        {/* Overlay for readability and blur */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.10)", backdropFilter: "blur(4px)" }} />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-8 z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #111827 100%)" }} />
        {/* Foreground Content */}
        <div className="relative z-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
            Our Work Gallery
          </h1>
          <p className="text-lg md:text-xl text-amber-400 font-medium drop-shadow">
            Explore our proudest moments and see how we deliver security and peace of mind for every client, every event, every time.
          </p>
        </div>
      </section>


      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border-2 transition font-semibold text-sm ${selectedCategory === cat ? "bg-amber-500 text-black border-amber-500" : "bg-gray-800 text-white border-gray-700 hover:bg-amber-500 hover:text-black hover:border-amber-500"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Gallery Grid */}
      <section className="pb-10 bg-gradient-to-t from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {filteredData.map((item) => (
              <GalleryCard
                key={item.id}
                title={item.title}
                image={item.image}
                location={item.location}
                date={item.date}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        heading="Ready to Work With Us?"
        description="Contact us today to discuss your security needs and see how we can help protect what matters most."
        primaryText="Get Free Quote"
        primaryLink="/contact"
        secondaryText="View Services"
        secondaryLink="/services"
      />
      <Footer />
      <WhatsAppButton />
    </div>
  );
} 