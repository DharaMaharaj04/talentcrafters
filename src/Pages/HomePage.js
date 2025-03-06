import React from "react";
import heroImage from "../assets/images/heroimage.jpg";
import teaserImage from "../assets/images/teaserr.jpg"; // Replace with your image path

const HomePage = () => {
  return (
    <div className="min-h-screen py-8 md:py-16">
      {/* Hero Section */}
      <section
  className="relative flex items-center justify-end text-white h-screen px-6 md:px-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-white bg-opacity-80 md:bg-opacity-30"></div>
  
  <div className="relative bg-opacity-75 p-6 md:p-8 rounded-lg max-w-lg md:max-w-lg">
    <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
      <span className="text-[#6DC5D1] font-bolder">Crafting Talent</span> Solutions for Your Business Growth
    </h2>
    <p className="mt-4 text-lg md:text-xl font-normal text-black">
      Expert Recruitment Services Tailored to Your Needs—Filling Roles with Precision, Speed, and Integrity.
    </p>
  </div>
</section>

      {/* About Recruitment Process */}
      <section className="px-6 md:px-12 py-8 md:py-16 bg-white text-black relative max-w-4xl mx-auto text-center normal-case leading-tight">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        About <span className="text-[#6DC5D1] font-bolder">Recruitment Process </span>
        </h2>
        <p className="text-lg leading-relaxed text-justify md:text-left">
        At Talent Crafters, we understand that recruitment is more than just filling positions; it's about finding the right fit for your organization's success. Our thorough recruitment process ensures we match top talent with your company’s specific needs, focusing on skills, culture, and long-term potential. We streamline every step to provide you with seamless, efficient, and effective hiring solutions.
        </p>
      </section>

      {/* About Us Teaser */}
      <section className="px-6 md:px-12 py-8 md:py-16 bg-white text-black flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 mb-8 md:mb-0 mx-4">
      <img
        src={teaserImage} // Replace with your recruitment image
        alt="Recruitment process"
        className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      />
    </div>
    <div className="md:w-1/2 text-center md:text-left mx-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6"> <span className="text-[#6DC5D1] font-bolder">About </span>Talent Crafters</h2>
          <p className="text-lg leading-relaxed text-justify md:text-left">
          Talent Crafters is a forward-thinking recruitment consultancy committed to empowering organizations with high-quality talent. We pride ourselves on providing tailored recruitment solutions that address the unique needs of each client. With a focus on integrity, professionalism, and personalized service, Talent Crafters is your trusted partner in building a strong workforce. Our consultants are dedicated to understanding your business and culture, ensuring we connect you with the best talent that aligns with your goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
