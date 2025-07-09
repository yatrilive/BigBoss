import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuoteForm from "./ui/QuoteForm";
import CTASection from "./ui/CTASection";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function Contact() {
  // Contact page data - completely self-contained
  const contactData = {
    contactInfo: [
      {
        title: "Phone",
        value: "+91 9815746930",
        description: "24/7 Emergency Hotline",
        icon: "📞"
      },
      {
        title: "Email",
        value: "bigbosscomandos@gmail.com",
        description: "General Inquiries",
        icon: "✉️"
      },
      {
        title: "Office",
        value: "Office No. 214, Block 3, Oxford Street, Zirakpur, 140603",
        description: "Main Office Location",
        icon: "🏢"
      }
    ],
    businessHours: [
      { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
      { day: "Sunday", hours: "Emergency Only" },
      { day: "24/7 Emergency", hours: "Available", highlight: true }
    ],
    emergencyContact: {
      phone: "+91 9815746930",
      message: "Available 24/7 for emergency situations"
    },
    officeLocation: {
      address: "Office No. 214, Block 3, Oxford Street, Zirakpur, 140603",
      city: "Chandigarh",
      country: "India"
    }
  };

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
      {/* Modernized Header Section with Background Image, Overlay, and Gradient */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden pt-16 w-full">
        {/* Section-only Background Image */}
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ pointerEvents: "none" }}
        />
        {/* Overlay for readability and blur */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(2px)" }} />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-8 z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #111827 100%)" }} />
        {/* Foreground Content */}
        <div className="relative z-20 text-center max-w-2xl mx-auto px-4">
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6 rounded-full animate-fade-in" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-wide animate-fade-in" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85)' }}>
            Contact <span className="text-amber-400">Big Boss Comandos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium animate-fade-in" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            Ready to discuss your security needs? Get in touch for a <span className="text-amber-400 font-bold">free consultation</span> and quote.
          </p>
        </div>
      </section>

      {/* Contact Content Modernized */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-amber-500 mb-8 drop-shadow">Get In Touch</h2>
              {contactData.contactInfo.map((info, index) => (
                <div key={index} className="flex items-start bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg border-l-4 border-amber-400 p-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <span className="text-black font-bold text-2xl">
                      {info.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {info.title}
                    </h3>
                    <p className="text-amber-400 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Office Location */}
              <div className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg border-l-4 border-amber-400 p-6">
                <h3 className="text-white font-bold text-lg mb-4">Office Location</h3>
                <div className="space-y-2 text-gray-300">
                  <p>{contactData.officeLocation.address}</p>
                  <p>{contactData.officeLocation.city}</p>
                  <p>{contactData.officeLocation.country}</p>
                </div>
              </div>
              {/* Business Hours */}
              <div className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg border-l-4 border-amber-400 p-6">
                <h3 className="text-white font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  {contactData.businessHours.map((schedule, index) => (
                    <div key={index} className={`flex justify-between ${schedule.highlight ? 'text-amber-400 font-bold' : ''}`}>
                      <span>{schedule.day}:</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Emergency Contact */}
              <div className="p-4 bg-red-800 bg-opacity-90 rounded-2xl shadow-lg border-l-4 border-red-400 mt-6">
                <h4 className="text-white font-bold text-lg mb-2">Emergency Contact</h4>
                <p className="text-white font-bold text-xl mb-1">
                  {contactData.emergencyContact.phone}
                </p>
                <p className="text-red-200 text-sm">
                  {contactData.emergencyContact.message}
                </p>
              </div>
            </div>
            {/* Quote Form Modernized */}
            <div className="animate-slide-in-right">
              <div className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-xl border-l-4 border-amber-400 p-8">
                <QuoteForm 
                  onSubmit={handleFormSubmit}
                  className="bg-transparent"
                />
              </div>
            </div>
          </div>
          {/* Google Map Modernized */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl mt-16 animate-fade-in">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Block%203,%20Oxford%20Street,%20Mohali,%20India%20140603&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Additional CTA */}
      <CTASection
        heading="Ready to Get Started?"
        description="Don't wait to secure what matters most. Contact us today for immediate assistance."
        primaryText="View Our Services"
        primaryLink="/services"
        secondaryText="Learn About Us"
        secondaryLink="/about"
      />
      <Footer />
      <WhatsAppButton />
    </div>
  );
} 