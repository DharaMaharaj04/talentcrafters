import React from 'react';
import banner from "../assets/images/teaser.jpg";

const Service = () => {
  return (
    <div className='min-h-screen py-8 md:py-16'>
    <section
  className="relative flex items-center py-8 md:py-32 px-6 md:px-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${banner})` }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-[#6DC5D1] bg-opacity-80"></div>
  
  <div className="relative bg-opacity-75 text-center p-6 md:p-8 rounded-lg max-w-lg md:max-w-lg">
    <h2 className="text-4xl md:text-6xl text-center font-bold leading-tight text-black">
       Services
    </h2>
  </div>
</section>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black py-8 px-8">
{/* Permanent Staffing */}
<div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Permanent Staffing</h2>
  <p className="text-black mb-4">
    Finding the right talent for long-term success is at the heart of what we do. Our
    permanent staffing solutions are tailored to help you identify and hire skilled
    professionals who align with your company’s culture, goals, and vision.
  </p>
  <h3 className="font-bold mb-2">Key Features:</h3>
  <ul className="list-disc list-inside text-black">
    <li>In-depth candidate screening and evaluation.</li>
    <li>Industry-specific talent sourcing.</li>
    <li>Seamless integration of new hires into your team.</li>
  </ul>
</div>

{/* Temporary Staffing */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Temporary Staffing</h2>
  <p className="text-black mb-4">
    When your business faces short-term projects or seasonal demands, our temporary
    staffing services provide a flexible workforce to meet your needs.
  </p>
  <h3 className="font-bold mb-2">Benefits of Temporary Staffing:</h3>
  <ul className="list-disc list-inside text-black">
    <li>Quickly scale your workforce during peak periods.</li>
    <li>Reduce overhead costs with contract-based hiring.</li>
    <li>Access pre-vetted candidates for immediate deployment.</li>
  </ul>
</div>

{/* Contract Staffing */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Contract Staffing</h2>
  <p className="text-black mb-4">
    For specialized roles or fixed-duration projects, our contract staffing services
    connect you with highly skilled professionals who bring expertise and efficiency.
  </p>
  <h3 className="font-bold mb-2">Why Choose Contract Staffing:</h3>
  <ul className="list-disc list-inside text-black">
    <li>Access niche talent for specific projects.</li>
    <li>Flexibility to manage workforce fluctuations.</li>
    <li>Compliance with legal and regulatory requirements.</li>
  </ul>
</div>

{/* Recruitment Process Outsourcing */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">
    Recruitment Process Outsourcing (RPO)
  </h2>
  <p className="text-black mb-4">
    Streamline your recruitment efforts with our end-to-end Recruitment Process
    Outsourcing (RPO) services.
  </p>
  <h3 className="font-bold mb-2">RPO Highlights:</h3>
  <ul className="list-disc list-inside text-black">
    <li>Strategic workforce planning and analytics.</li>
    <li>Tailored recruitment strategies for your organization.</li>
    <li>Improved candidate experience through professional engagement.</li>
  </ul>
</div>

{/* Background Checks & Verification */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Background Checks & Verification</h2>
  <p className="text-black mb-4">
    Ensure your business security with our comprehensive background check and verification
    services.
  </p>
  <h3 className="font-bold mb-2">Services Include:</h3>
  <ul className="list-disc list-inside text-black">
    <li>Employment history verification.</li>
    <li>Criminal record checks.</li>
    <li>Education and certification validation.</li>
  </ul>
</div>

{/* HR Strategy & Consulting */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">HR Strategy & Consulting</h2>
  <p className="text-black mb-4">
    Build a robust HR framework with our expert HR strategy and consulting services.
  </p>
  <h3 className="font-bold mb-2">Core Services:</h3>
  <ul className="list-disc list-inside text-black">
    <li>Workforce planning and optimization.</li>
    <li>Compliance and legal advisory.</li>
    <li>HR technology implementation and support.</li>
  </ul>
</div>

{/* Employee Onboarding & Offboarding */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Employee Onboarding & Offboarding</h2>
  <p className="text-black mb-4">
    We simplify the critical stages of employee transitions, ensuring a seamless onboarding
    experience for new hires and a structured offboarding process for departing employees.
  </p>
  <h3 className="font-bold mb-2">Our Focus Areas:</h3>
  <ul className="list-disc list-inside text-black">
    <li>Customized onboarding plans for smooth integration.</li>
    <li>Exit interviews and knowledge transfer.</li>
    <li>Assistance with documentation and compliance.</li>
  </ul>
</div>

{/* Training & Development */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Training & Development</h2>
  <p className="text-black mb-4">
    Empower your workforce with our tailored training programs designed to foster skill
    development and career growth.
  </p>
  <h3 className="font-bold mb-2">Programs We Offer:</h3>
  <ul className="list-disc list-inside text-black">
    <li>Technical and soft skills training.</li>
    <li>Leadership and management development.</li>
    <li>Customized workshops for organizational needs.</li>
  </ul>
</div>

{/* Administrative Services */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Administrative Services</h2>
  <p className="text-black mb-4">
    Let us handle your administrative tasks so you can focus on your core business activities.
  </p>
  <h3 className="font-bold mb-2">What We Offer:</h3>
  <ul className="list-disc list-inside text-black">
    <li>Payroll processing and tax compliance.</li>
    <li>Employee record management.</li>
    <li>Support for legal and regulatory requirements.</li>
  </ul>
</div>

{/* Resume Writing & Formatting */}
<div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
  <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Resume Writing & Formatting</h2>
  <p className="text-black mb-4">
    A strong resume is the first step toward a successful career. Our resume writing and formatting
    services help candidates present their skills and experiences in a professional and impactful
    way.
  </p>
  <h3 className="font-bold mb-2">Why Choose Us:</h3>
  <ul className="list-disc list-inside text-black">
    <li>Professionally crafted resumes tailored to industry standards.</li>
    <li>ATS (Applicant Tracking System) friendly formatting.</li>
    <li>Personalized consultations to highlight unique strengths.</li>
  </ul>
</div>
</div>

    </div>
  )
}

export default Service