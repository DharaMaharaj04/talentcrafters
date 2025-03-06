import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import banner from "../assets/images/CONTACTUS.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_ytws9ft", // Replace with your EmailJS Service ID
        "template_t7t65ke", // Replace with your EmailJS Template ID
        formData,
        "vF_WpO2bIn2dZtNqL" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (err) => {
          console.log("FAILED...", err);
          setSuccessMessage("Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen py-8 md:py-16">
      {/* Hero Section */}
      <section
        className="relative flex items-center py-8 md:py-32 px-6 md:px-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-[#6DC5D1] bg-opacity-80"></div>
        <div className="relative text-center p-6 md:p-8 md:max-w-lg">
          <h2 className="text-4xl md:text-6xl font-bold text-black">Contact Us</h2>
        </div>
      </section>

      <div className="container mx-auto md:max-w-6xl px-12 py-8">
        <h2 className="text-4xl font-bold text-center text-[#6DC5D1] mb-8">
          Get in Touch with Talent Crafters
        </h2>

        <p className="text-center text-gray-700 mb-8">
          We’re here to help! Whether you’re looking for recruitment services, need assistance
          with HR solutions, or just want to connect, we’d love to hear from you.
        </p>

        {/* Contact Information & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Information</h2>
            <p className="text-gray-900 mb-2 text-lg font-bold">Office Location:</p>
            <p className="text-gray-700"><strong>A-9, Sangath-1, B/h Parimal Hospital,</strong></p>
            <p className="text-gray-700 mb-4"><strong>Ahmedabad, Gujarat 380005</strong></p>

            <p className="text-gray-700 mb-2">Phone Number:</p>
            <p className="text-gray-700 mb-4"><strong>9909030155</strong></p>

            <p className="text-gray-700 mb-2">Email:</p>
            <p className="text-gray-700 mb-2">
              <a href="mailto:hr@talentcrafters.in"><strong>hr@talentcrafters.in</strong></a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md p-2 border-2 border-[#6DC5D1] focus:ring-[#6DC5D1] focus:border-[#6DC5D1] placeholder-[#6DC5D1] text-gray-900"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md p-2 border-2 border-[#6DC5D1] focus:ring-[#6DC5D1] focus:border-[#6DC5D1] placeholder-[#6DC5D1] text-gray-900"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md p-2 border-2 border-[#6DC5D1] focus:ring-[#6DC5D1] focus:border-[#6DC5D1] placeholder-[#6DC5D1] text-gray-900"
                  rows="5"
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6DC5D1] text-white py-2 px-4 rounded-md hover:bg-[#5CAAB4] focus:outline-none focus:ring-2 focus:ring-[#6DC5D1]"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Submit"}
              </button>
            </form>

            {successMessage && (
              <p className="text-center mt-4 text-green-600 font-bold">{successMessage}</p>
            )}
          </div>
        </div>

        {/* Follow Us */}
        <p className="text-center text-gray-700 mt-8">
          We Look Forward to Hearing From You! Whether you’re interested in our services, need
          support, or want to discuss career opportunities, we’re just a message away.
        </p>
      </div>
    </div>
  );
};

export default Contact;
