import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GalleryCard from "./ui/GalleryCard";
import CTASection from "./ui/CTASection";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function Gallery() {
  // Gallery data
  const galleryData = {
    images: [
      {
        id: 1,
        title: "Event Security",
        category: "Events",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
        description: "Professional security at corporate events"
      },
      {
        id: 2,
        title: "Wedding Protection",
        category: "Events",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
        description: "Discreet security for special occasions"
      },
      {
        id: 3,
        title: "Corporate Security",
        category: "Corporate",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        description: "Business premises protection"
      },
      {
        id: 4,
        title: "VIP Protection",
        category: "VIP",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        description: "Personal security services"
      },
      {
        id: 5,
        title: "Residential Security",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        description: "Home and family protection"
      },
      {
        id: 6,
        title: "Construction Security",
        category: "Industrial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        description: "Site and equipment protection"
      },
      {
        id: 7,
        title: "Retail Security",
        category: "Retail",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
        description: "Loss prevention and safety"
      },
      {
        id: 8,
        title: "Concert Security",
        category: "Events",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
        description: "Large event crowd control"
      },
      {
        id: 9,
        title: "Office Security",
        category: "Corporate",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
        description: "Workplace protection services"
      }
    ],
    categories: ["All", "Events", "Corporate", "VIP", "Residential", "Industrial", "Retail"]
  };

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gray-900"> {/* pt-32 pb-20 => reduced padding */}
        <div className="max-w-5xl mx-auto px-4 text-center"> {/* reduced max-w */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work Gallery
          </h1>
          {/* Optional description - removed for simplicity */}
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our recent security operations and events. 
            Each project represents our commitment to excellence and professionalism.
          </p> */}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-800"> {/* py-20 => reduced padding */}
        <div className="max-w-6xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {galleryData.categories.map((category, index) => (
              <button
                key={index}
                className="px-5 py-2 rounded-full bg-gray-700 hover:bg-amber-500 hover:text-black text-white text-sm transition" // font-medium removed
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.images.map((item) => (
              <GalleryCard 
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
