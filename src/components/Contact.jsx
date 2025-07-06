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
      phone: "+91 9100000000",
      message: "Available 24/7 for emergency situations"
    },
    officeLocation: {
      address: "Office No. 214, Block 3, Oxford Street, Zirakpur, 140603",
      city: "Chandigarh",
      country: "India"
    }
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission here
  };

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your security needs? Get in touch with us for a 
            free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-amber-500 mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-8 mb-8">
                {contactData.contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-black font-bold text-lg">
                        {info.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        {info.title}
                      </h3>
                      <p className="text-amber-500 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Location */}
              <div className="bg-gray-700 rounded-lg p-6 mb-8">
                <h3 className="text-white font-bold text-lg mb-4">Office Location</h3>
                <div className="space-y-2 text-gray-300">
                  <p>{contactData.officeLocation.address}</p>
                  <p>{contactData.officeLocation.city}</p>
                  <p>{contactData.officeLocation.country}</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-white font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  {contactData.businessHours.map((schedule, index) => (
                    <div key={index} className={`flex justify-between ${schedule.highlight ? 'text-amber-500 font-bold' : ''}`}>
                      <span>{schedule.day}:</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-red-800 rounded-lg">
                <h4 className="text-white font-bold text-lg mb-2">Emergency Contact</h4>
                <p className="text-white font-bold text-xl mb-1">
                  {contactData.emergencyContact.phone}
                </p>
                <p className="text-red-300 text-sm">
                  {contactData.emergencyContact.message}
                </p>
              </div>
            </div>

            {/* Quote Form */}
            <QuoteForm 
              onSubmit={handleFormSubmit}
              className="bg-gray-700"
            />
          </div>
          {/* Google Map directly below the grid, filling the blank space */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg mt-12">
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