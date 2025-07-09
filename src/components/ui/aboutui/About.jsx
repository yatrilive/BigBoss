import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import TeamCard from "./TeamCard";
import StatsCard from "../homeui/StatsCard";
import CertificationCard from "./CertificationCard";
import CTASection from "../CTASection";
import WhatsAppButton from "../WhatsAppButton";

export default function About() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* Top navigation */}
      <Navbar />

      {/* Stunning Header Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden pt-16 w-full">
        {/* Section-only Background Image */}
        <img
          src="https://gentursecurity.com/wp-content/uploads/2023/01/close-protection-360x300.jpg"
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ pointerEvents: "none" }}
        />
        {/* Overlay for readability and blur */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(2px)" }} />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-8 z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #111827 100%)" }} />
        {/* Foreground Content */}
        <div className="relative z-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-wide" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85)' }}>
            About <span className="text-amber-400">Big Boss Comandos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            Professional protection for businesses, events, and individuals—<span className="text-amber-400 font-bold">trusted by hundreds</span> for peace of mind and safety.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow tracking-wider uppercase">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="bg-gray-900 rounded-2xl shadow-lg border-l-4 border-amber-400 p-8 flex flex-col items-center animate-fade-in">
              <span className="text-5xl mb-4">🎯</span>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Mission</h3>
              <p className="text-gray-200">To deliver peace of mind and safety through professional, reliable, and innovative security solutions tailored to every client.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl shadow-lg border-l-4 border-amber-400 p-8 flex flex-col items-center animate-fade-in">
              <span className="text-5xl mb-4">🌟</span>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Vision</h3>
              <p className="text-gray-200">To be the most trusted security partner, setting the standard for excellence and integrity in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="rounded-2xl shadow-xl border-l-4 border-amber-400 p-8 bg-gray-900 animate-fade-in">
            <h2 className="text-3xl font-bold text-amber-400 mb-6 drop-shadow">Your Trusted Security Partner</h2>
            <p className="text-gray-200 mb-4">Big Boss Security has been protecting clients since our beginning. We provide <span className='text-amber-400 font-semibold'>peace of mind</span>, not just security.</p>
            <p className="text-gray-200 mb-4">Our trained and licensed team works closely with clients to meet unique needs.</p>
            <p className="text-gray-200">Whether it's an event, corporate, VIP, or home—our experience ensures you're safe.</p>
          </div>

          {/* Right Side - Values */}
          <div className="rounded-2xl shadow-xl border-l-4 border-amber-400 p-8 bg-gray-900 animate-fade-in">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 drop-shadow">Why Choose Us?</h3>
            <ul className="text-gray-200 space-y-4">
              <li><span className="text-amber-400 font-bold">Professionalism:</span> We follow high standards always.</li>
              <li><span className="text-amber-400 font-bold">Reliability:</span> Clients trust our consistent service.</li>
              <li><span className="text-amber-400 font-bold">Integrity:</span> We are honest and transparent.</li>
              <li><span className="text-amber-400 font-bold">Excellence:</span> We aim for the best service always.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-900 rounded-2xl shadow-lg border-l-4 border-amber-400 p-8 flex flex-col items-center animate-fade-in">
            <span className="text-4xl mb-2">🛡️</span>
            <StatsCard number="500+" label="Events Secured" />
          </div>
          <div className="bg-gray-900 rounded-2xl shadow-lg border-l-4 border-amber-400 p-8 flex flex-col items-center animate-fade-in">
            <span className="text-4xl mb-2">🏢</span>
            <StatsCard number="50+" label="Corporate Clients" />
          </div>
          <div className="bg-gray-900 rounded-2xl shadow-lg border-l-4 border-amber-400 p-8 flex flex-col items-center animate-fade-in">
            <span className="text-4xl mb-2">👮‍♂️</span>
            <StatsCard number="100+" label="Trained Officers" />
          </div>
          <div className="bg-gray-900 rounded-2xl shadow-lg border-l-4 border-amber-400 p-8 flex flex-col items-center animate-fade-in">
            <span className="text-4xl mb-2">⏰</span>
            <StatsCard number="24/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 drop-shadow tracking-wider uppercase">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-800 rounded-2xl shadow-lg border-l-4 border-amber-400 p-8 animate-fade-in">
              <p className="text-lg text-gray-100 mb-4 italic">“Big Boss Security made our event feel safe and seamless. The team was professional and attentive.”</p>
              <div className="flex items-center gap-3 justify-center">
                <span className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold">A</span>
                <span className="text-gray-300 font-semibold">Amit Sharma</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl shadow-lg border-l-4 border-amber-400 p-8 animate-fade-in">
              <p className="text-lg text-gray-100 mb-4 italic">“Their officers are always on time and courteous. We trust them with our corporate security.”</p>
              <div className="flex items-center gap-3 justify-center">
                <span className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold">S</span>
                <span className="text-gray-300 font-semibold">Sneha Verma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
        <h2 className="text-3xl font-bold mb-6 drop-shadow tracking-wider uppercase">Our Leadership Team</h2>
        <p className="text-xl text-gray-200 mb-10">Meet the experts behind our security operations.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in"><TeamCard name="Mr. X" position="CEO & Founder" description="20+ years of experience" /></div>
          <div className="animate-fade-in"><TeamCard name="Mr. Y" position="Operations Director" description="Expert in operations" /></div>
          <div className="animate-fade-in"><TeamCard name="Mr. Z" position="Training Coordinator" description="Training specialist" /></div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="bg-gray-900 rounded-2xl shadow-lg border-2 border-amber-400 p-8 max-w-6xl mx-auto animate-fade-in">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 drop-shadow tracking-wider uppercase">Certifications & Licenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hover:scale-105 transition-transform duration-300 animate-fade-in">
              <CertificationCard title="Licensed Company" description="We are fully licensed and insured." icon="✅" />
            </div>
            <div className="hover:scale-105 transition-transform duration-300 animate-fade-in">
              <CertificationCard title="Trained Staff" description="Our team is fully trained and certified." icon="🎓" />
            </div>
            <div className="hover:scale-105 transition-transform duration-300 animate-fade-in">
              <CertificationCard title="Quality Assurance" description="We conduct regular audits and reviews." icon="🏅" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 drop-shadow tracking-wider uppercase">Our Partners & Clients</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-gray-800 rounded-xl shadow p-4 flex items-center justify-center w-40 h-20 animate-fade-in">
              <span className="text-2xl text-amber-400 font-bold">LOGO 1</span>
            </div>
            <div className="bg-gray-800 rounded-xl shadow p-4 flex items-center justify-center w-40 h-20 animate-fade-in">
              <span className="text-2xl text-amber-400 font-bold">LOGO 2</span>
            </div>
            <div className="bg-gray-800 rounded-xl shadow p-4 flex items-center justify-center w-40 h-20 animate-fade-in">
              <span className="text-2xl text-amber-400 font-bold">LOGO 3</span>
            </div>
            <div className="bg-gray-800 rounded-xl shadow p-4 flex items-center justify-center w-40 h-20 animate-fade-in">
              <span className="text-2xl text-amber-400 font-bold">LOGO 4</span>
            </div>
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
