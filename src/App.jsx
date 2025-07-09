import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/ui/homeui/Home";
import Services from "./components/ui/serviceui/Services";
import Career from "./components/ui/careerui/Career";
import Gallery from "./components/ui/galleryui/Gallery";
import About from "./components/ui/aboutui/About";
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
