import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Hero from "../../Hero";
import QuoteForm from "../QuoteForm";
import ServiceCard from "../serviceui/ServiceCard";
import StatsCard from "./StatsCard";
import TestimonialCard from "./TestimonialCard";
import CTASection from "../CTASection";
import WhatsAppButton from "../WhatsAppButton";
import {
  FaUserShield, FaRegHandshake, FaRegCheckCircle,
  FaHeadset, FaBuilding, FaUserSecret, FaHome, FaUsers
} from "react-icons/fa";

export default function Home() {
  const homeData = {
    services: [
      { title: "Event Security", description: "Security for events & parties.", icon: "🎭" },
      { title: "Corporate Security", description: "Security for businesses.", icon: "🏢" },
      { title: "VIP Protection", description: "Personal security services.", icon: "👑" },
      { title: "Residential Security", description: "Home & family protection.", icon: "🏠" }
    ],
    stats: [
      { number: "500+", label: "Events Secured" },
      { number: "50+", label: "Corporate Clients" },
      { number: "100+", label: "Trained Officers" },
      { number: "24/7", label: "Support Available" }
    ],
    testimonials: [
      { name: "Manvinder Singh", company: "Businessman", text: "Excellent service.", rating: 5 },
      { name: "Priya", company: "Private Client", text: "Felt completely safe.", rating: 5 },
      { name: "Amit Sharma", company: "SecureTech Solutions", text: "Outstanding team.", rating: 5 }
    ],    
    features: [
      { title: "Licensed & Insured", description: "Fully licensed and insured company." },
      { title: "Trained Personnel", description: "All officers are rigorously trained." },
      { title: "24/7 Availability", description: "Always ready for emergencies." },
      { title: "Custom Solutions", description: "Tailored security plans." }
    ]
  };

  const services = [
    {
      title: "Event Security",
      description: "Security for events & parties.",
      image: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Corporate Security",
      description: "Security for businesses.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop"
    },
    {
      title: "VIP Protection",
      description: "Personal security services.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4d6qYmz4BZOdKrVASWaQDN2dfvWSxxywv8603YlbX-ibHYO3l7fGOCPXB7nvUB5AZiD0&usqp=CAU"
    },
    {
      title: "Residential Security",
      description: "Home & family protection.",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/5/LM/QZ/OJ/136066219/security-guard-residential-building-782x522-500x500.jpg"
    }
  ];  

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }
      alert('Quote request submitted successfully!');
    } catch (error) {
      alert('Error submitting quote request: ' + error.message);
    }
  };

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      <Hero />
      {/* Home Page Stunning Intro */}
      <section className="relative py-8 md:py-24 px-2 md:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-4 sm:mb-6 rounded-full" />
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white mb-2 sm:mb-4 tracking-wide" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85)' }}>
            Welcome to <span className="text-amber-400">Big Boss Comandos Security Services</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-200 font-medium mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            Elite protection for businesses, events, and individuals—trusted by hundreds for peace of mind and safety.
          </p>
        </div>
      </section>
      {/* Quote Banner Modernized */}
      <section className="relative py-4 md:py-12 px-2 md:px-8 animate-fade-in">
        <div className="bg-black bg-opacity-80 rounded-2xl px-4 sm:px-10 py-6 sm:py-8 text-center max-w-4xl mx-auto shadow-2xl border-l-4 border-amber-400">
          <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4 drop-shadow-lg text-white">
            "Security is not a product, but a process."
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-amber-400 font-semibold drop-shadow">
            — Your safety, our mission.
          </p>
        </div>
      </section>
      {/* Features */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16 animate-fade-in">
            <div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-4 sm:mb-6 rounded-full" />
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-6">Why Choose Us?</h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">What makes us different?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[FaUserShield, FaRegCheckCircle, FaHeadset, FaRegHandshake].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-800 bg-opacity-80 rounded-2xl p-4 sm:p-8 shadow-xl border-l-4 border-amber-400 animate-slide-in-up">
                <Icon className="text-2xl sm:text-4xl text-amber-400 mb-2 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{homeData.features[i].title}</h3>
                <p className="text-sm sm:text-base text-gray-300 text-center">{homeData.features[i].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="py-10 md:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16 animate-fade-in">
            <div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-4 sm:mb-6 rounded-full" />
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-6">Our Services</h2>
            <p className="text-base sm:text-xl text-gray-300">Complete protection you can trust</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {services.map((s, i) => (
              <div className="animate-slide-in-up" key={i}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  image={s.image}
                  showImage={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How We Work */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16 animate-fade-in">
            <div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-4 sm:mb-6 rounded-full" />
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-6">How We Work</h2>
            <p className="text-base sm:text-xl text-gray-300">Our step-by-step approach</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: FaRegHandshake, title: "Consultation", desc: "We listen to your needs." },
              { icon: FaBuilding, title: "Assessment", desc: "We analyze risks and layout." },
              { icon: FaUserSecret, title: "Protection", desc: "Team deploys your security plan." },
              { icon: FaHeadset, title: "Support", desc: "We stay available 24/7." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-800 bg-opacity-80 rounded-2xl p-4 sm:p-8 shadow-xl border-l-4 border-amber-400 animate-slide-in-up">
                <item.icon className="text-2xl sm:text-4xl text-amber-400 mb-2 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Client Icons */}
      <section className="py-4 sm:py-8 bg-gray-800 animate-fade-in">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-8 px-2 sm:px-4">
          {[FaUserShield, FaUsers, FaBuilding, FaUserSecret, FaRegCheckCircle].map((Icon, i) => (
            <Icon key={i} className="text-xl sm:text-3xl text-amber-400" />
          ))}
        </div>
      </section>
      {/* Stats */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {homeData.stats.map((stat, i) => (
              <div className="animate-slide-in-up" key={i}>
                <StatsCard number={stat.number} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features + Form */}
      <section className="py-10 md:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-6">Why Big Boss Comandos Security Services?</h2>
              {homeData.features.map((f, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded-full flex items-center justify-center mr-2 sm:mr-4">
                    <span className="text-black font-bold text-sm sm:text-base">✓</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">{f.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-xl border-l-4 border-amber-400 p-4 sm:p-8 animate-slide-in-right">
              <QuoteForm
                onSubmit={handleFormSubmit}
                className="bg-transparent"
                title="Get a Free Quote"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 animate-fade-in">
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-4 sm:mb-8 rounded-full" />
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10 drop-shadow tracking-wider uppercase">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {homeData.testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <CTASection
        heading="Ready to Secure Your World?"
        description="Contact us today for a free consultation and discover how we can protect what matters most."
        primaryText="Get Free Quote"
        primaryLink="/contact"
        secondaryText="View Our Services"
        secondaryLink="/services"
      />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
