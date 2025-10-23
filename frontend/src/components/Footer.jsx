import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo1.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collection" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  // Real social media links - replace with your actual URLs
  const socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    whatsapp: "https://web.whatsapp.com/"
  };

  return (
    <div className='w-full bg-[#ecfafaec] text-black pt-8 pb-6 border-t border-gray-300'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          
          {/* Brand Section */}
          <div className='text-center md:text-left'>
            <div className='flex items-center justify-center md:justify-start gap-3 mb-4'>
              <img src={logo} alt="Jeans Brand" className='w-16 h-12' />
              <h1 className='text-2xl font-bold text-black'>Jeans</h1>
            </div>
            <p className='text-gray-700 text-sm mb-4 max-w-md'>
              Premium denim wear combining style, comfort, and quality craftsmanship for the modern individual.
            </p>
            
            {/* Social Media Links */}
            <div className='flex justify-center md:justify-start gap-4'>
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110"
              >
                <FaFacebookF className='w-4 h-4 text-white' />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-400 hover:scale-110"
              >
                <FaTwitter className='w-4 h-4 text-white' />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:bg-pink-600 hover:scale-110"
              >
                <FaInstagram className='w-4 h-4 text-white' />
              </a>
              <a 
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-500 hover:scale-110"
              >
                <FaWhatsapp className='w-4 h-4 text-white' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='text-center md:text-left'>
            <h3 className='font-semibold text-lg mb-4 text-black'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(link.path)}
                    className='text-gray-700 hover:text-black hover:font-medium transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='text-center md:text-left'>
            <h3 className='font-semibold text-lg mb-4 text-black'>Contact</h3>
            <div className='space-y-2 text-sm text-gray-700'>
              <p>123 Fashion Street</p>
              <p>Denim City, DC 12345</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@jeansbrand.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-400 pt-4 text-center'>
          <p className='text-gray-600 text-sm'>
            © {new Date().getFullYear()} Jeans Brand. All rights reserved.
          </p>
          <div className='flex justify-center gap-6 mt-2'>
            <button className='text-gray-600 hover:text-black text-xs transition-colors duration-200'>
              Privacy
            </button>
            <button className='text-gray-600 hover:text-black text-xs transition-colors duration-200'>
              Terms
            </button>
            <button className='text-gray-600 hover:text-black text-xs transition-colors duration-200'>
              Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;