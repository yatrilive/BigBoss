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
      name: "Big Boss Security",
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
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-amber-500 mb-3">{company.name}</h2>
            <p className="text-gray-400 text-sm">{company.description}</p>
            <ul className="mt-4 space-y-1 text-gray-300 text-sm">
              {company.features.map((f, i) => (
                <li key={i}>✓ {f}</li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-amber-500 font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} title={s.name} className="text-2xl hover:text-amber-500 transition">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-amber-500 mb-2">Services</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              {services.map((s, i) => (
                <li key={i} className="hover:text-amber-500 cursor-pointer transition">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-amber-500 mb-2">Company</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="hover:text-amber-500 transition">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-amber-500 mb-2">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>{contact.address}</p>
              <p>Phone: {contact.phone}</p>
              <p>Email: {contact.email}</p>
            </div>
            <div className="mt-4 p-3 bg-red-800 rounded text-white">
              <p className="font-bold">Emergency: {contact.emergencyPhone}</p>
              <p className="text-sm text-red-300">Available 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {year} {company.name}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {legalLinks.map((link, i) => (
              <a key={i} href={link.url} className="hover:text-amber-500 transition">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
