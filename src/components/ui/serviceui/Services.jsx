import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ServiceCard from "./ServiceCard";
import WhatsAppButton from "../WhatsAppButton";

export default function Services() {
  // Data included directly in component
  const services = [
    {
      title: "Event Security",
      description: "Professional security for weddings, corporate events, concerts, and private parties. Our trained personnel ensure your event runs smoothly and safely.",
      features: ["Crowd control", "Access management", "Emergency response", "24/7 monitoring"],
      image: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4d6qYmz4BZOdKrVASWaQDN2dfvWSxxywv8603YlbX-ibHYO3l7fGOCPXB7nvUB5AZiD0&usqp=CAU"
    },
    {
      title: "Residential Security",
      description: "Home security services for residential properties. Keep your family and property safe with our comprehensive protection solutions.",
      features: ["Home monitoring", "Patrol services", "Alarm response", "Family protection"],
      image: "https://5.imimg.com/data5/SELLER/Default/2022/5/LM/QZ/OJ/136066219/security-guard-residential-building-782x522-500x500.jpg"
    },
    {
      title: "Construction Site Security",
      description: "Specialized security for construction sites and industrial areas. Protect your equipment, materials, and workers from theft and vandalism.",
      features: ["Equipment protection", "Site monitoring", "Access control", "Theft prevention"],
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/LZ/AB/NQ/3913259/construction-security-services-provider-500x500.jpg"
    },
    {
      title: "Retail Security",
      description: "Loss prevention and customer safety for retail establishments. Our security personnel help maintain a safe shopping environment.",
      features: ["Loss prevention", "Customer safety", "Employee protection", "Incident response"],
      image: "https://static.wixstatic.com/media/5ab760_2781f59068784ef4a5b70bb0ae67a1c6~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Security%20Guard%20in%20Uniform_edited.jpg"
    }
  ];

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      
      {/* Top background image with overlay and intro text */}
      <section className="relative h-64 md:h-80 flex items-center justify-center mb-4 overflow-hidden pt-16 w-full">
        {/* Section-only Background Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptRPvaYAE69z441fdfjMLKUOfw5r7mL3i7Q&s"
          alt="Services background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ pointerEvents: "none" }}
        />
        {/* Overlay for readability and blur */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.10)", backdropFilter: "blur(4px)" }} />
        {/* Foreground Content */}
        <div className="relative z-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
            Our Security Services
          </h1>
          <p className="text-lg md:text-xl text-amber-400 font-medium drop-shadow">
            Discover our full range of professional security solutions for events, businesses, VIPs, and more. Your safety is our mission.
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