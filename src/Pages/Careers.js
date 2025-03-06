import React from 'react';
import banner from "../assets/images/Carrer.jpg";
import image from "../assets/images/teaserr.jpg";

const Careers = () => {
  return (
    <div className='min-h-screen py-8 md:py-16'>

    <section
  className="relative flex items-center py-8 md:py-32 px-6 md:px-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${banner})` }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-[#6DC5D1] bg-opacity-80"></div>
  
  <div className="relative bg-opacity-75 text-center p-6 md:p-8 rounded-lg max-w-lg md:max-w-lg">
    <h2 className="text-4xl md:text-6xl text-center font-bold leading-tight text-black"
    >Careers</h2>
  </div>
</section>


<section className="bg-white py-16">
  <div className="container mx-auto px-4">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">Careers at Talent Crafters</h2>
      <h3 className="text-2xl font-semibold text-[#6DC5D1]  mb-8">Work With Us</h3>
      <p className="text-lg text-black mx-auto max-w-4xl">
        At Talent Crafters, we believe that people are our greatest strength. As a globally recognized
        provider of recruitment and HR solutions, we offer opportunities to make a meaningful impact in
        the HR industry. Whether you’re an experienced professional, a recent graduate, or someone eager
        to embark on an HR career, Talent Crafters is your platform to learn, grow, and succeed.
      </p>
    </div>
    
    {/* Why Join Talent Crafters Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 mb-16">
      <div className="space-y-6 px-8">
        <h3 className="text-3xl font-bold text-[#6DC5D1]">Why Join Talent Crafters?</h3>
        <ul className="space-y-4 text-lg text-black list-disc list-inside">
          <li><strong>Collaborative Environment:</strong> Be part of a team that thrives on teamwork and fosters innovation.</li>
          <li><strong>Continuous Learning:</strong> Gain access to tailored training programs and resources to build your expertise.</li>
          <li><strong>Career Growth Opportunities:</strong> Advance through well-defined career pathways designed for your professional success.</li>
          <li><strong>Meaningful Work:</strong> Partner with clients to create high-performing teams and contribute to their success stories.</li>
        </ul>
      </div>
      <div className="flex justify-center items-center ">
        <img src={image} alt="Join Us" className="w-80 h-80 rounded-full shadow-xl hover:border-2 hover:border-[#6DC5D1] hover:shadow-2xl " />
      </div>
    </div>

    {/* Internship Programs Section */}
    <div className="p-8 rounded-lg shadow-lg mb-16">
      <h3 className="text-2xl md:text-4xl font-semibold text-black mb-6">Internship Programs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* HR Internship Program */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 hover:border-[#6DC5D1] hover:shadow-2xl transition-shadow duration-300">
          <h4 className="text-xl font-semibold text-[#6DC5D1] mb-4">HR Internship Program</h4>
          <ul className="text-lg text-black list-disc list-inside space-y-2">
            <li>Recruitment and talent acquisition.</li>
            <li>Employee onboarding processes.</li>
            <li>HR management essentials.</li>
          </ul>
        </div>
        
        {/* Training Internship Program */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 hover:border-[#6DC5D1] hover:shadow-2xl transition-shadow duration-300">
          <h4 className="text-xl font-semibold text-[#6DC5D1] mb-4">HR Generalist Practical Training</h4>
          <ul className="text-lg text-black space-y-2 list-disc list-inside">
            <li>Core HR practices.</li>
            <li>Recruitment strategies and methodologies.</li>
          </ul>
        </div>
      </div>
    </div>

   {/* How to Apply Section */}
<section className="bg-gray-50 py-10">
<div className="container mx-auto px-4">
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold text-[#6DC5D1] mb-6">How to Apply</h3>
    <p className="text-lg text-black mb-6">
      Follow these steps to apply for an internship or position at Talent Crafters:
    </p>
    <div className="space-y-4 text-lg text-black pl-4 border-l-4 border-[#6DC5D1]">
      <p>
        <span className="font-bold">1. Select Your Area of Interest:</span> Explore our training Programs to choose the path that aligns with your career goals.
      </p>
      <p>
        <span className="font-bold">2. Submit Your Application:</span> Send your updated resume to <span className="text-[#6DC5D1] font-bold"><a href='mailto:hr@talentcrafters.in'>hr@talentcrafters.in</a></span> with the subject line indicating your area of interest.
      </p>
    </div>
  </div>
</div>
</section>

{/* Call to Action Section */}
<section className=" bg-[#6DC5D1] py-10 text-white">
<div className="container mx-auto px-4 text-center">
  <h3 className="text-2xl font-semibold mb-4">Join the Talent Crafters Family</h3>
  <p className="text-lg mb-6">
    We are passionate about shaping the future of work through impactful HR solutions. If you’re ready to make a difference and thrive in a dynamic, people-centric organization, we’d love to hear from you!
  </p>
  <p className="text-lg">
    For more information, visit our <a href="/contact-us" className="underline font-bold text-white">Contact Us</a> page or reach out to us at <span className="font-bold"><a href='mailto:hr@talentcrafters.in'>hr@talentcrafters.in</a></span>.
  </p>
</div>
</section>

  </div>
</section>
    </div>
  )
}

export default Careers