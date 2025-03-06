import React from 'react';
import banner from "../assets/images/teaser.jpg";
import image from "../assets/images/image.jpg";
import take from "../assets/images/brand-design-5.jpg";
import apart from "../assets/images/brand-design-1.jpg";
import success from "../assets/images/brand-design-4.jpg"


const HRInternship = () => {
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
    HR Internship
    </h2>
  </div>
</section>
      
<div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#6DC5D1] sm:text-5xl">
            Training and Internship Program
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Crafting Tomorrow’s HR Leaders
          </p>
          <p className="mt-4 text-lg text-gray-900 max-w-3xl mx-auto">
            At Talent Crafters, we don’t just train; we transform. Our programs are a launchpad for aspiring HR professionals, blending innovation, industry insights, and hands-on experience. Whether you're stepping into HR for the first time or sharpening your skills, our tailored programs prepare you for real-world challenges in the dynamic HR landscape.
          </p>
          <div className="mt-12">
            <img 
              src={image} 
              alt="HR Internship"
              className="w-full h-auto object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* HR Internship Programs Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-6xl font-bold text-black">
             HR Internship Programs
          </h2>
          <p className="mt-4  text-xl text-[#6DC5D1]">
            Discover. Learn. Thrive.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Column */}
            <div className="space-y-6 text-gray-900">
              <p className="text-lg">
                Step into the exciting world of human resources with Talent Crafters' HR Internship Programs. We go beyond classroom training by immersing you in practical, real-world scenarios, equipping you with the tools and confidence to lead in HR.
              </p>
              <p className="text-lg font-semibold text-gray-900">
                What Sets Us Apart?
              </p>
              <ul className="mt-4 space-y-4 text-lg list-inside">
                <li className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-15 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12l3-3m-3 3l-3-3m3 0V3" />
                  </svg>
                  <span><span className='text-[#6DC5D1] font-bolder font-underline'>Learn by Doing:</span> Our interns work on live projects, collaborating with industry experts to solve actual business challenges.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-15 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 12.121a3 3 0 114.243-4.243m6.364 0a3 3 0 114.243 4.243m-6.364 0h1.5a9.001 9.001 0 100-18h-3.5a9.001 9.001 0 100 18h1.5m0 0a9 9 0 11-9-9 9 9 0 019 9z" />
                  </svg>
                  <span><span className='text-[#6DC5D1] font-bolder'>Comprehensive Exposure:</span> Dive deep into core HR functions, from recruitment to compliance, and beyond.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-15 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16M4 12h16M4 20h16" />
                  </svg>
                  <span><span className='text-[#6DC5D1] font-bolder'>Personalized Guidance:</span> Receive one-on-one mentorship, career coaching, and insider tips to fast-track your career.</span>
                </li>
              </ul>
              <div>
              {/* 
                <img 
                  src={apart} 
                  alt="Hands-on Learning"
                  className="w-full h-auto object-cover rounded-lg shadow-xl"
                /> 
                */ }
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 text-gray-900">
              <p className="text-lg font-semibold text-gray-900">
                Key Takeaways:
              </p>
              <ul className="mt-4 space-y-4 text-lg list-inside">
                <li className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-15 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 5h18M3 19h18" />
                  </svg>
                  <span><span className='text-[#6DC5D1] font-bolder'>Master Recruitment:</span> Learn modern sourcing techniques, craft compelling job descriptions, and perfect the art of candidate evaluation.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-15 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l10 10M17 7l-10 10" />
                  </svg>
                  <span><span className='text-[#6DC5D1] font-bolder'>Engage Employees:</span> Understand how to design onboarding programs that leave a lasting impression and boost engagement.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-15 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16M4 12h16M4 20h16" />
                  </svg>
                  <span><span className='text-[#6DC5D1] font-bolder'>Simplify Compliance:</span> Gain hands-on experience in handling essential HR documentation and legal requirements.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-15 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16M4 12h16M4 20h16" />
                  </svg>
                  <span><span className='text-[#6DC5D1] font-bolder'>Understand Payroll Dynamics:</span> Decode payroll systems, from salary structures to statutory deductions, with real-world simulations.</span>
                </li>
              </ul>
              <div>
              {/*
                <img 
                  src={take}
                  alt="HR Key Takeaways"
                  className="w-full h-auto object-cover rounded-lg shadow-xl"
                />  */}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Talent Crafters Section */}
        <div className="px-6 md:px-12 py-8 md:py-16 bg-white text-black flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 mx-4">
          <h2 className="text-2xl md:text-5xl font-bold text-black">
            Why Choose Talent Crafters’ HR Internship Program?
          </h2>
          <ul className="mt-6 space-y-6 text-lg text-gray-900">
            <li className="space-x-4">
              <span className="text-[#6DC5D1] font-bold">Real-World Experience:</span> Work alongside seasoned HR professionals to solve real-world challenges.
            </li>
            <li className="space-x-4">
              <span className="text-[#6DC5D1] font-bold">Skill-Oriented Training:</span> Build a diverse skill set with practical exercises and case studies.
            </li>
            <li className="space-x-4">
              <span className="text-[#6DC5D1] font-bold">Career Success:</span> Get placement assistance, resume-building tips, and a network of industry connections to land your dream role.
            </li>
          </ul>
          </div>
          <div className="md:w-1/2 text-center md:text-left mx-4 py-8 md:py-16">
            <img 
              src={success} 
              alt="Career Success"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>


        <section className="container mx-auto px-8 py-8 text-black">
<h2 className="text-4xl font-bold text-center text-[#6DC5D1] mb-8">
Empowering HR Professionals for the Future
    </h2>
        <p className="text-lg">
          At Talent Crafters, our HR Generalist Training Program is more than just a course—it’s a transformative journey
          designed to prepare you for the ever-evolving world of human resources. This program bridges theory and practice,
          equipping participants with the tools, insights, and confidence needed to excel in diverse HR roles.
        </p>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-white py-12">
  <div className="container mx-auto px-8">
    <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">What Makes Us Different?</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-[#6DC5D1] mb-4">Hands-On Learning</h3>
        <p className="text-lg text-black">
          Real-world scenarios, role-playing activities, and live projects to bring HR concepts to life.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-[#6DC5D1] mb-4">Expert-Led Sessions</h3>
        <p className="text-lg text-black">
          Learn from industry leaders with years of HR expertise.
        </p>
      </div>

      {/* Card 3 */}
      <div className=" p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-[#6DC5D1] mb-4">Future-Ready Approach</h3>
        <p className="text-lg text-black">
          Focus on trends like HR analytics, digital tools, and strategic planning.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Program Modules */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#6DC5D1] text-center mb-8 pb-8">Program Modules</h2>

          {/* Module 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex justify-center items-center">
              <img src={success} alt="Module 1" className="w-96 h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl"/>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Module 1: The HR Generalist Role – Foundations of Leadership</h3>
              <p className="text-lg mb-4 text-black">Understand the critical role of an HR Generalist as the backbone of organizational success. Learn how to manage policies, people, and processes with agility and innovation.</p>
              <ul className="list-disc list-inside text-lg text-black">
                <li>The strategic importance of HR in modern businesses.</li>
                <li>How to become a trusted advisor and problem-solver.</li>
              </ul>
            </div>
          </div>
 
          {/* Module 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex justify-center items-center">
              <img src={apart} alt="Module 2" className="w-96 h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl"/>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Module 2: Talent Acquisition Mastery</h3>
              <p className="text-lg mb-4 text-black">Recruiting the right talent is an art and a science. This module covers innovative hiring strategies and teaches you to become a talent magnet.</p>
              <ul className="list-disc list-inside text-lg text-black">
                <li>Crafting irresistible job postings and leveraging social platforms.</li>
                <li>Mastering behavioral interviews and data-driven assessments.</li>
                <li>Building a candidate-centric recruitment experience.</li>
              </ul>
            </div>
          </div>

          {/* Module 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex justify-center items-center">
              <img src={image} alt="Module 3" className="w-96 h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl"/>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-4">Module 3: Creating Strong Employee Relationships</h3>
              <p className="text-lg mb-4 text-black">Happy employees drive business success. Learn how to foster trust, resolve conflicts, and build a resilient workforce.</p>
              <ul className="list-disc list-inside text-lg text-black">
                <li>Managing sensitive workplace situations with empathy and expertise.</li>
                <li>Designing employee engagement programs that boost morale and productivity.</li>
              </ul>
            </div>
          </div>

          {/* Module 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex justify-center items-center">
              <img src={take} alt="Module 4" className="w-96 h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl"/>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-4">Module 4: Payroll Made Simple – The Numbers that Matter</h3>
              <p className="text-lg mb-4 text-black">Demystify the world of payroll and taxation with clear, actionable guidance. This module simplifies complex calculations and compliance standards.</p>
              <ul className="list-disc list-inside text-lg text-black">
                <li>Tax deductions, PF, and ESI calculations with live examples.</li>
                <li>Designing error-free salary structures aligned with compliance.</li>
                <li>Managing employer and employee contributions seamlessly.</li>
              </ul>
            </div>
          </div>

          {/* Additional Modules (Add more as needed...) */}

        </div>
      </section>

      {/* Why Choose Talent Crafters */}
      <section className="bg-white py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">Why Choose Talent Crafters?</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className=" p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-[#6DC5D1] mb-4">A Personalized Learning Experience</h3>
        <p className="text-lg text-black">
          Customized sessions to match your career goals.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-[#6DC5D1] mb-4">Real-World Projects</h3>
        <p className="text-lg text-black">
          Apply your knowledge to case studies and simulations.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-[#6DC5D1] mb-4">Exclusive Community Access</h3>
        <p className="text-lg text-black">
          Join a network of HR professionals and alumni for ongoing learning and opportunities.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Certification Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#6DC5D1] mb-6">Certification</h2>
          <p className="text-lg text-black">
            Upon completion, receive a prestigious certification recognized across industries, showcasing your expertise and
            readiness to take on HR challenges.
          </p>
        </div>
      </section>

        {/* A Journey That Matters Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            A Journey That Matters
          </h2>
          <p className="mt-6 text-lg text-gray-900 max-w-2xl mx-auto">
            Your internship with Talent Crafters is more than a learning experience—it's the first step toward shaping your HR career with purpose, passion, and potential.
          </p>
          <button className="mt-6 bg-[#6DC5D1] text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-200 hover:text-black transition">
            Read More About Us
          </button>
          <div className="mt-8">
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HRInternship;
