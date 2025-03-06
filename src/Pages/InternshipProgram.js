import React from 'react';
import banner from "../assets/images/teaser.jpg";
import image from "../assets/images/image.jpg";
import take from "../assets/images/brand-design-5.jpg";
import apart from "../assets/images/brand-design-1.jpg";
import success from "../assets/images/brand-design-4.jpg"

const InternshipProgram = () => {
  return (
    <div className='min-h-screen py-8 md:py-16'>
    <section className="relative flex items-center py-8 md:py-32 px-6 md:px-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${banner})` }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-[#6DC5D1] bg-opacity-80"></div>
  
  <div className="relative bg-opacity-75 text-center p-6 md:p-8 rounded-lg max-w-lg md:max-w-lg">
    <h2 className="text-4xl text-center md:text-6xl font-bolder leading-tight text-black">
    HR Generalist Training Program
    </h2>
  </div>
</section>

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
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#6DC5D1] mb-6">Certification</h2>
          <p className="text-lg text-black">
            Upon completion, receive a prestigious certification recognized across industries, showcasing your expertise and
            readiness to take on HR challenges.
          </p>
        </div>
      </section>
    
    </div>
  )
}

export default InternshipProgram