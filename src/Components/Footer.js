import { FaLinkedin,  FaInstagram} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import WhatsAppChat from "../Pages/WhatsApp";

const Footer = () => {
    return (
      <footer className="bg-[#6DC5D1] text-white py-6 px-6 mt-auto">
  <div className="container mx-auto text-center">
    <nav className="flex flex-wrap justify-center gap-4 mb-4 text-lg font-bold">
      <a href="/" className="hover:underline">Home</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/services" className="hover:underline">Services</a>
      <a href="/industries" className="hover:underline">Industries</a>
      <a href="/hr-internship" className="hover:underline">HR Internship</a>
      <a href="/career" className="hover:underline">Careers</a>
      <a href="/contact-us" className="hover:underline">Contact Us</a>
      <a href="/faq" className="hover:underline">FAQ</a>
    </nav>
    <div className="flex justify-center space-x-6 text-3xl text-white">
    <a href="https://www.linkedin.com/company/talent-crafters2025/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin className="hover:text-[#005582] transition duration-200" />
    </a>
    <a href="https://x.com/crafters_t21734?t=r8rxDx6wjs97PW2OZ30xXg&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <BsTwitterX className="hover:text-black transition duration-200" />
    </a>
    <a href=" https://www.instagram.com/talent_crafters?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram className="hover:text-[#833AB4] transition duration-200" />
    </a>
  </div>
    <br />
    <p className="text-sm">&copy; {new Date().getFullYear()} Talent Crafters. All rights reserved.</p>
  </div>
</footer>

    );
  };
  
  export default Footer;