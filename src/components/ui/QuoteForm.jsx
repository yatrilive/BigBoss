import React, { useState } from "react";

// Reusable Quote Form component
export default function QuoteForm({ 
  onSubmit, 
  className = "",
  showTitle = true,
  title = "Request a Quote"
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const serviceOptions = [
    "Event Security",
    "Corporate Security",
    "VIP Protection",
    "Residential Security",
    "Construction Site Security",
    "Retail Security"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className={`bg-gray-800 rounded-lg p-8 ${className}`}>
      {showTitle && (
        <h3 className="text-2xl font-bold text-white mb-6">
          {title}
        </h3>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-white font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
              placeholder="Enter your phone number"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-white font-medium mb-2">
              Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
} 