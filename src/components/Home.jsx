import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import QuoteForm from "./ui/QuoteForm";
import ServiceCard from "./ui/ServiceCard";
import StatsCard from "./ui/StatsCard";
import TestimonialCard from "./ui/TestimonialCard";
import CTASection from "./ui/CTASection";
import WhatsAppButton from "./ui/WhatsAppButton";
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
      { name: "John Smith", company: "ABC Corp", text: "Excellent service.", rating: 5 },
      { name: "Sarah Johnson", company: "Private Client", text: "Felt completely safe.", rating: 5 },
      { name: "Mike Davis", company: "XYZ Industries", text: "Outstanding team.", rating: 5 }
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
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop"
    },
    {
      title: "Corporate Security",
      description: "Security for businesses.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop"
    },
    {
      title: "VIP Protection",
      description: "Personal security services.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
    },
    {
      title: "Residential Security",
      description: "Home & family protection.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop"
    }
  ];  

  const handleFormSubmit = (formData) => {
    // intentionally left blank (logic preserved)
  };

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />
      <Hero />

      {/* Quote Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Security team night"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            "Security is not a product, but a process."
          </h2>
          <p className="text-lg md:text-2xl text-amber-400 font-semibold drop-shadow">
            — Your safety, our mission.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">What makes us different?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[FaUserShield, FaRegCheckCircle, FaHeadset, FaRegHandshake].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-800 rounded-lg p-8 shadow-lg">
                <Icon className="text-4xl text-amber-400 mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{homeData.features[i].title}</h3>
                <p className="text-gray-300 text-center">{homeData.features[i].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-800"> 
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Our Services</h2>
      <p className="text-xl text-gray-300">Complete protection you can trust</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((s, i) => (
        <ServiceCard
          key={i}
          title={s.title}
          description={s.description}
          image={s.image}
          showImage={true}
        />
      ))}
    </div>
  </div>
</section>


      {/* How We Work */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-gray-300">Our step-by-step approach</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FaRegHandshake, title: "Consultation", desc: "We listen to your needs." },
              { icon: FaBuilding, title: "Assessment", desc: "We analyze risks and layout." },
              { icon: FaUserSecret, title: "Protection", desc: "Team deploys your security plan." },
              { icon: FaHeadset, title: "Support", desc: "We stay available 24/7." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-800 rounded-lg p-8 shadow-lg">
                <item.icon className="text-4xl text-amber-400 mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Icons */}
      <section className="py-8 bg-gray-800">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-8 px-4">
          {[FaUserShield, FaUsers, FaBuilding, FaUserSecret, FaRegCheckCircle].map((Icon, i) => (
            <Icon key={i} className="text-3xl text-amber-400" />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {homeData.stats.map((stat, i) => (
              <StatsCard key={i} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Features + Form */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-6">Why Big Boss Security?</h2>
              {homeData.features.map((f, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
                    <p className="text-gray-300">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-700 rounded-lg p-8">
              <QuoteForm
                onSubmit={handleFormSubmit}
                className="bg-gray-600"
                title="Get a Free Quote"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Client Feedback</h2>
            <p className="text-xl text-gray-300">Real words from real clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeData.testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Secure What Matters Most?"
        description="Get a free consultation from our expert security team today."
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
