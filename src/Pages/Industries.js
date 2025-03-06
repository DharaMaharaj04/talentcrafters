import React from "react";
import banner from "../assets/images/Industries.png";


const Industries = () => {
  return (
    <div className="min-h-screen py-8 md:py-16">
    <section
    className="relative flex items-center py-8 md:py-32 px-6 md:px-12 bg-cover bg-center"
    style={{ backgroundImage: `url(${banner})` }}
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-[#6DC5D1] bg-opacity-80"></div>
    
    <div className="relative bg-opacity-75 text-center p-6 md:p-8 rounded-lg max-w-lg md:max-w-lg">
      <h2 className="text-4xl md:text-6xl text-center font-bold leading-tight text-black">
      Industries
      </h2>
    </div>
  </section>
      <div className="container mx-auto py-8 text-black px-8">
      <h2 className="text-4xl font-bold text-center text-black mb-8">
      Industries We Serve
    </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* IT Industry */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Information Technology (IT)</h2>
            <p className="text-gray-700 mb-4">
              In the ever-evolving world of IT, finding top-tier tech talent is crucial. We specialize
              in sourcing professionals skilled in software development, cybersecurity, cloud
              computing, data science, and more.
            </p>
            <h3 className="font-bold mb-2">Roles We Cover:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Software Developers (Frontend, Backend, Full Stack)</li>
              <li>IT Project Managers</li>
              <li>Data Scientists and Analysts</li>
              <li>Network and Security Engineers</li>
            </ul>
          </div>

          {/* Pharmaceuticals */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Pharmaceuticals</h2>
            <p className="text-gray-700 mb-4">
              The pharmaceutical industry demands precision and expertise. We connect you with
              experienced professionals who excel in research, development, manufacturing, and
              regulatory compliance.
            </p>
            <h3 className="font-bold mb-2">Key Focus Areas:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Research Scientists</li>
              <li>Quality Assurance and Control Experts</li>
              <li>Regulatory Affairs Specialists</li>
              <li>Pharmaceutical Sales Representatives</li>
            </ul>
          </div>

          {/* Medical Devices */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Medical Devices</h2>
            <p className="text-gray-700 mb-4">
              Our recruitment solutions for the medical devices sector focus on professionals who
              can contribute to innovation, quality, and compliance in this highly regulated field.
            </p>
            <h3 className="font-bold mb-2">Specialized Talent:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Biomedical Engineers</li>
              <li>Quality Control Technicians</li>
              <li>Regulatory Compliance Managers</li>
              <li>Product Design Specialists</li>
            </ul>
          </div>

          {/* Life Sciences */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Life Sciences</h2>
            <p className="text-gray-700 mb-4">
              The life sciences industry thrives on innovation and research. Talent Crafters
              provides skilled professionals who drive advancements in biotechnology, genetics,
              and pharmaceuticals.
            </p>
            <h3 className="font-bold mb-2">Core Expertise:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Clinical Research Associates</li>
              <li>Bioinformatics Specialists</li>
              <li>Lab Technicians</li>
              <li>Environmental Scientists</li>
            </ul>
          </div>

          {/* Healthcare */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Healthcare</h2>
            <p className="text-gray-700 mb-4">
              Delivering quality care begins with exceptional talent. We help healthcare providers
              find skilled professionals across clinical and non-clinical roles.
            </p>
            <h3 className="font-bold mb-2">Key Roles:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Doctors and Nurses</li>
              <li>Healthcare Administrators</li>
              <li>Medical Coders and Billers</li>
              <li>Allied Health Professionals</li>
            </ul>
          </div>

          {/* Banking & Financial Services */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Banking & Financial Services</h2>
            <p className="text-gray-700 mb-4">
              In a competitive financial landscape, hiring professionals with sharp analytical
              skills and compliance knowledge is essential. We source top talent for roles in
              banking, investment, and financial planning.
            </p>
            <h3 className="font-bold mb-2">Specialized Roles:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Financial Analysts</li>
              <li>Risk and Compliance Managers</li>
              <li>Relationship Managers</li>
              <li>Auditors and Accountants</li>
            </ul>
          </div>

          {/* Logistics, Supply Chain & Retail */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">
              Logistics, Supply Chain & Retail
            </h2>
            <p className="text-gray-700 mb-4">
              Streamlining operations in logistics and retail requires professionals who excel in
              planning, inventory management, and customer service.
            </p>
            <h3 className="font-bold mb-2">Key Hires:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Supply Chain Managers</li>
              <li>Logistics Coordinators</li>
              <li>E-commerce Specialists</li>
              <li>Retail Operations Managers</li>
            </ul>
          </div>

          {/* Manufacturing */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Manufacturing</h2>
            <p className="text-gray-700 mb-4">
              The manufacturing industry depends on skilled professionals who can ensure quality,
              safety, and productivity. Our recruitment solutions cater to roles across production,
              engineering, and operations.
            </p>
            <h3 className="font-bold mb-2">Focus Areas:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Production Managers</li>
              <li>Quality Assurance Engineers</li>
              <li>Maintenance Technicians</li>
              <li>Lean Manufacturing Specialists</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;