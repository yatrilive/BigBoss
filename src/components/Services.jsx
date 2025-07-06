import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ServiceCard from "./ui/ServiceCard";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function Services() {
  // Data included directly in component
  const services = [
    {
      title: "Event Security",
      description: "Professional security for weddings, corporate events, concerts, and private parties. Our trained personnel ensure your event runs smoothly and safely.",
      features: ["Crowd control", "Access management", "Emergency response", "24/7 monitoring"],
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop"
    },
    {
      title: "Corporate Security",
      description: "Comprehensive security solutions for businesses, offices, and commercial properties. Protect your assets and employees with our professional services.",
      features: ["Building security", "Employee protection", "Asset protection", "Risk assessment"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop"
    },
    {
      title: "VIP Protection",
      description: "Discreet and reliable personal security for high-profile individuals, celebrities, and dignitaries. Professional protection that adapts to your lifestyle.",
      features: ["Personal bodyguards", "Travel security", "Discreet protection", "Risk management"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
    },
    {
      title: "Residential Security",
      description: "Home security services for residential properties. Keep your family and property safe with our comprehensive protection solutions.",
      features: ["Home monitoring", "Patrol services", "Alarm response", "Family protection"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop"
    },
    {
      title: "Construction Site Security",
      description: "Specialized security for construction sites and industrial areas. Protect your equipment, materials, and workers from theft and vandalism.",
      features: ["Equipment protection", "Site monitoring", "Access control", "Theft prevention"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop"
    },
    {
      title: "Retail Security",
      description: "Loss prevention and customer safety for retail establishments. Our security personnel help maintain a safe shopping environment.",
      features: ["Loss prevention", "Customer safety", "Employee protection", "Incident response"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Security Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to your specific needs. 
            From events to corporate protection, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
                showImage={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Custom Security Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for a personalized security assessment and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Free Consultation
            </Link>
            <Link to="/gallery" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg transition duration-300">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
} 