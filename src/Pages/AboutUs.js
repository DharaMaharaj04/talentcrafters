import React from 'react';
import teaser from "../assets/images/teaser.jpg";

const AboutUs = () => {
  return (
    <div className='min-h-screen py-8 md:py-16'>
    <section
  className="relative flex items-center  text-white py-8 md:py-32 px-6 md:px-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${teaser})` }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-[#6DC5D1] bg-opacity-80"></div>
  
  <div className="relative bg-opacity-75 text-center p-6 md:p-8 rounded-lg max-w-lg md:max-w-lg">
    <h2 className="text-4xl md:text-6xl text-center                    Sfont-bold leading-tight text-black">
       About US
    </h2>
  </div>
</section>
    <section className="py-12 px-6">
  <div className="container mx-auto max-w-6xl">
    
    <div className="mb-12 text-center">
      <h1 className="text-xl font-bold text-[#6DC5D1] mb-4">Company Overview</h1>
      <p className="text-lg text-gray-700">
        At Talent Crafters, we are a leading recruitment consultancy dedicated to connecting businesses with the best talent. We specialize in delivering recruitment solutions that are both efficient and tailored to your specific needs. Whether you're looking to fill permanent, contract, or temporary roles, our team of skilled consultants ensures you find the right fit for your company culture and business goals. Our approach is client-centric, results-driven, and built on a foundation of trust and transparency.
      </p>
    </div>

    
    <div className="mb-12">
      <h2 className="text-2xl md:text-6xl font-bold text-gray-800 mb-6 text-center">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Integrity</h3>
          <p className="text-gray-600">
            We believe in maintaining the highest standards of honesty and transparency. Our recruitment process is fair,
            ethical, and aligned with the best interests of both clients and candidates.
          </p>
        </div>
       
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Excellence</h3>
          <p className="text-gray-600">
            At Talent Crafters, we strive for excellence in everything we do. From identifying top talent to providing
            exceptional service, we are committed to delivering the best results.
          </p>
        </div>
       
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Collaboration</h3>
          <p className="text-gray-600">
            We view our relationship with clients as a partnership. By understanding your business, goals, and challenges,
            we work together to craft talent solutions that drive success.
          </p>
        </div>
        
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Innovation</h3>
          <p className="text-gray-600">
            In an ever-changing recruitment landscape, we stay ahead by leveraging cutting-edge technology and evolving
            recruitment strategies to deliver the most efficient and effective talent acquisition services.
          </p>
        </div>
        
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Commitment to Diversity</h3>
          <p className="text-gray-600">
            We are passionate about promoting diversity and inclusion. Our recruitment processes prioritize a diverse
            candidate pool, helping companies build inclusive teams that reflect a wide range of perspectives and experiences.
          </p>
        </div>
      </div>
    </div>

    
    <div>
      <h2 className="text-2xl md:text-6xl font-bold text-gray-800 mb-6 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Tailored Solutions</h3>
          <p className="text-gray-600">
            Every business is unique, and so are its recruitment needs. We customize our services to meet your specific
            requirements, ensuring a perfect match between talent and opportunity.
          </p>
        </div>
        
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Expert Consultants</h3>
          <p className="text-gray-600">
            Our team of recruitment experts has a deep understanding of the job market across various industries. We are
            committed to providing insightful guidance and unmatched expertise throughout the recruitment process.
          </p>
        </div>
       
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Fast and Efficient Process</h3>
          <p className="text-gray-600">
            We know that time is of the essence when it comes to hiring. Our streamlined recruitment process is designed
            to help you hire the right talent quickly and efficiently, without compromising on quality.
          </p>
        </div>
        
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Access to Top Talent</h3>
          <p className="text-gray-600">
            Through our extensive network and proactive approach, we provide access to a pool of high-quality candidates,
            many of whom are passive job seekers not actively looking for work but open to new opportunities.
          </p>
        </div>
       
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-2xl hover:border-2 hover:border-[#6DC5D1]">
          <h3 className="text-xl font-bold text-[#6DC5D1] mb-2">Results-Driven Approach</h3>
          <p className="text-gray-600">
            We are focused on delivering results that matter. Whether you're hiring for a specific project or scaling your
            workforce, our solutions are built to ensure long-term success and satisfaction.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutUs