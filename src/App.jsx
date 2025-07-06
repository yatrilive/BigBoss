import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Career from "./components/Career";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-950 text-white font-sans">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
