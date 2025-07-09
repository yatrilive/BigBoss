import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  const {
    company,
    services,
    companyLinks,
    contact,
    socialLinks,
    legalLinks
  } = {
    company: {
      name: "Big Boss Comandos Security Services",
      description: "Professional and trusted security services for every occasion.",
      features: ["24/7 Emergency Support", "Licensed & Insured", "Trained Officers"]
    },
    services: [
      "Event Security",
      "Corporate Security",
      "VIP Protection",
      "Residential Security",
      "Construction Security",
      "Retail Security"
    ],
    companyLinks: [
      { text: "About Us", path: "/about" },
      { text: "Gallery", path: "/gallery" },
      { text: "Testimonials", path: "/" },
      { text: "Contact", path: "/contact" },
      { text: "Careers", path: "/career" }
    ],
    contact: {
      address: "Office No. 214, Block 3, Oxford Street, Zirakpur",
      phone: "+91 9815746930",
      email: "bigbosscomandos@gmail.com",
      emergencyPhone: "+91 9815746930"
    },
    socialLinks: [
      { name: "Facebook", icon: "📘", url: "#" },
      { name: "Twitter", icon: "🐦", url: "#" },
      { name: "Instagram", icon: "📷", url: "#" },
      { name: "LinkedIn", icon: "💼", url: "#" }
    ],
    legalLinks: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white pt-10 pb-4 px-3 sm:px-5 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-10 mb-8 sm:mb-10">
          <div className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg p-4 sm:p-6 mb-4 md:mb-0 flex flex-col items-start">
            {/* Left-aligned accent line above company name */}
            <div className="w-16 h-1 bg-amber-400 mb-4 rounded-full" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-amber-400 mb-2 drop-shadow">{company.name}</h2>
            <p className="text-gray-400 text-xs sm:text-sm mb-2">{company.description}</p>
            <ul className="mt-2 space-y-1 text-gray-300 text-xs sm:text-sm">
              {company.features.map((f, i) => (
                <li key={i} className="flex items-center gap-1"> <span className="text-amber-400">✓</span> {f}</li>
              ))}
            </ul>
            <div className="mt-4">
              <h4 className="text-amber-400 font-semibold mb-2 text-sm">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} title={s.name} className="text-xl sm:text-2xl hover:text-amber-400 transition drop-shadow">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg p-4 sm:p-6 mb-4 md:mb-0">
            <h3 className="text-base sm:text-lg font-semibold text-amber-400 mb-2">Services</h3>
            <ul className="space-y-1 text-gray-300 text-xs sm:text-sm">
              {services.map((s, i) => (
                <li key={i} className="hover:text-amber-400 cursor-pointer transition">{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg p-4 sm:p-6 mb-4 md:mb-0">
            <h3 className="text-base sm:text-lg font-semibold text-amber-400 mb-2">Company</h3>
            <ul className="space-y-1 text-gray-300 text-xs sm:text-sm">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="hover:text-amber-400 transition">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-400 mb-2">Contact</h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-300 mb-2">
                <p>{contact.address}</p>
                <p>Phone: <span className="text-white font-semibold">{contact.phone}</span></p>
                <p>Email: <span className="text-white font-semibold">{contact.email}</span></p>
              </div>
            </div>
            <div className="mt-2 p-2 sm:p-3 bg-red-800 bg-opacity-90 rounded-xl text-white border-l-4 border-red-400 shadow-md">
              <p className="font-bold text-xs sm:text-base">Emergency: {contact.emergencyPhone}</p>
              <p className="text-xs text-red-200">Available 24/7</p>
            </div>
          </div>
        </div>
        {/* Thin, subtle divider for copyright */}
        <div className="h-px bg-gray-800 opacity-60 my-4" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-2">
          <p className="mb-2 md:mb-0">© {year} {company.name}. All rights reserved.</p>
          <div className="flex gap-3 sm:gap-4">
            {legalLinks.map((link, i) => (
              <a key={i} href={link.url} className="hover:text-amber-400 transition">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
