import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import Industries from "./Pages/Industries";
import HRInternship from "./Pages/HRInternship";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router>
      <div className="text-white min-h-screen">
      <Header / >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/hr-internship" element={<HRInternship />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
