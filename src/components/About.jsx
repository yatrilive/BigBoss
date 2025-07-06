import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TeamCard from "./ui/TeamCard";
import StatsCard from "./ui/StatsCard";
import CertificationCard from "./ui/CertificationCard";
import CTASection from "./ui/CTASection";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function About() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* Top navigation */}
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gray-900 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Big Boss Security</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We offer professional protection for businesses, events, and individuals.
        </p>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold text-amber-500 mb-6">Your Trusted Security Partner</h2>
            <p className="text-gray-300 mb-4">
              Big Boss Security has been protecting clients since our beginning. We provide peace of mind, not just security.
            </p>
            <p className="text-gray-300 mb-4">
              Our trained and licensed team works closely with clients to meet unique needs.
            </p>
            <p className="text-gray-300">
              Whether it's an event, corporate, VIP, or home—our experience ensures you're safe.
            </p>
          </div>

          {/* Right Side - Values */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Why Choose Us?</h3>
            <ul className="text-gray-300 space-y-4">
              <li><strong>Professionalism:</strong> We follow high standards always.</li>
              <li><strong>Reliability:</strong> Clients trust our consistent service.</li>
              <li><strong>Integrity:</strong> We are honest and transparent.</li>
              <li><strong>Excellence:</strong> We aim for the best service always.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard number="500+" label="Events Secured" />
          <StatsCard number="50+" label="Corporate Clients" />
          <StatsCard number="100+" label="Trained Officers" />
          <StatsCard number="24/7" label="Support Available" />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
        <p className="text-xl text-gray-300 mb-10">Meet the experts behind our security operations.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamCard name="Mr. X" position="CEO & Founder" description="20+ years of experience" />
          <TeamCard name="Mr. Y" position="Operations Director" description="Expert in operations" />
          <TeamCard name="Mr. Z" position="Training Coordinator" description="Training specialist" />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-800 px-4 text-center">
        <div className="bg-gray-700 rounded-lg p-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-500 mb-6">Certifications & Licenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CertificationCard title="Licensed Company" description="We are fully licensed and insured." />
            <CertificationCard title="Trained Staff" description="Our team is fully trained and certified." />
            <CertificationCard title="Quality Assurance" description="We conduct regular audits and reviews." />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        heading="Ready to Work With Us?"
        description="Let's talk about how we can protect what matters to you."
        primaryText="Get Free Quote"
        primaryLink="/contact"
        secondaryText="View Our Services"
        secondaryLink="/services"
      />

      {/* Footer */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
