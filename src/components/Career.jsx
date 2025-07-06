import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTASection from "./ui/CTASection";
import JobCard from "./ui/careerui/JobCard";
import BenefitCard from "./ui/careerui/BenefitCard";
import StepCard from "./ui/careerui/StepCard";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function Career() {
  const jobOpenings = [
    {
      title: "Security Officer",
      type: "Full-time",
      location: "Multiple Locations",
      experience: "1-3 years",
      description: "Join our team as a security officer. Responsibilities include patrolling, monitoring, and responding to security incidents.",
      requirements: [
        "Valid security license",
        "High school diploma or equivalent",
        "Good communication skills",
        "Physical fitness",
        "Clean background check"
      ]
    },
    {
      title: "Event Security Specialist",
      type: "Part-time/Contract",
      location: "Event Venues",
      experience: "2-5 years",
      description: "Specialized role for event security. Work at concerts, weddings, corporate events, and other special occasions.",
      requirements: [
        "Event security experience",
        "Crowd control training",
        "Flexible schedule",
        "Professional appearance",
        "Emergency response training"
      ]
    },
    {
      title: "Corporate Security Manager",
      type: "Full-time",
      location: "Office Locations",
      experience: "5+ years",
      description: "Manage security operations for corporate clients. Oversee security teams and develop security protocols.",
      requirements: [
        "Management experience",
        "Security industry knowledge",
        "Risk assessment skills",
        "Client relationship management",
        "Bachelor's degree preferred"
      ]
    },
    {
      title: "VIP Protection Officer",
      type: "Full-time",
      location: "Various Locations",
      experience: "3-7 years",
      description: "Provide personal security for high-profile individuals. Discreet and professional protection services.",
      requirements: [
        "VIP protection experience",
        "Advanced security training",
        "Discretion and professionalism",
        "Travel flexibility",
        "Advanced driving skills"
      ]
    }
  ];

  const benefits = [
    { title: "Competitive Pay", description: "Above-market compensation with performance bonuses" },
    { title: "Health Benefits", description: "Comprehensive health, dental, and vision coverage" },
    { title: "Training & Development", description: "Ongoing professional development and certification programs" },
    { title: "Flexible Schedules", description: "Various shift options to fit your lifestyle" },
    { title: "Career Growth", description: "Clear advancement paths and promotion opportunities" },
    { title: "Team Environment", description: "Supportive work culture with experienced professionals" }
  ];

  const applicationSteps = [
    { step: "1", title: "Submit Application", description: "Complete our online application form with your details and experience" },
    { step: "2", title: "Initial Screening", description: "Phone interview to discuss your background and career goals" },
    { step: "3", title: "Background Check", description: "Comprehensive background verification and reference checks" },
    { step: "4", title: "Training & Certification", description: "Complete required training programs and obtain necessary licenses" },
    { step: "5", title: "Job Placement", description: "Begin your career with Big Boss Security" }
  ];

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Navbar />

      <section className="pt-32 pb-20 bg-gray-900 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build a rewarding career in security with Big Boss Security.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Job Openings</h2>
            <p className="text-xl text-gray-300">Explore our available positions</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, i) => (
              <JobCard key={i} {...job} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-300">We offer great benefits and a strong team culture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <BenefitCard key={i} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Application Process</h2>
            <p className="text-xl text-gray-300">Simple steps to join us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {applicationSteps.map((step, i) => (
              <StepCard key={i} {...step} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Join Our Team?"
        description="Start your career in security with Big Boss Security today"
        primaryText="Apply Now"
        primaryLink="/contact"
        secondaryText="Learn About Us"
        secondaryLink="/about"
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
