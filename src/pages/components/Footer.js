// components/Footer.jsx
import React from 'react';
import { Clock, Send, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // For dynamic year in copyright

  return (
    <footer className="w-full bg-white text-orange-600 pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-orange-600">
          <h2 className="text-2xl lg:text-3xl font-semibold text-orange-600 mb-6 md:mb-0 text-center md:text-left">
            Lorem Ipsum Dolor Sit Amet, Conse
          </h2>
          <button className="flex items-center bg-orange-600 hover:bg-orange-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
            <Clock size={20} className="mr-2" />
            Consecteture
          </button>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Left Part: Links and Newsletter */}
          <div className="md:col-span-7 lg:col-span-8">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              <a href="#" className="text-orange-400 hover:text-orange-600 transition-colors">Many</a>
              <a href="#" className="text-orange-400 hover:text-orange-600 transition-colors">Popular Belief, Lorem</a>
              <a href="#" className="text-orange-400 hover:text-orange-600 transition-colors">USES</a>
              <a href="#" className="text-orange-400 hover:text-orange-600 transition-colors">Commod</a>
            </nav>
            <form className="flex items-center max-w-md">
              <input
                type="email"
                placeholder="Keep me updated"
                className="w-full px-4 py-3 text-orange-600  border border-gray-300 rounded-l-lg focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-orange-600 hover:bg-orange-400 text-white p-4 rounded-r-lg transition-colors duration-300 focus:outline-none"
              >
                <Send size={24} />
              </button>
            </form>
          </div>

          {/* Right Part: Contact Info and Socials */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="space-y-4">
              <a href="tel:1234567890" className="flex items-center text-orange-600 hover:text-orange-600 transition-colors">
                <Phone size={20} className="mr-3 text-orange-600" />
                123.456.7890
              </a>
              <a href="mailto:info@loremipsum.com" className="flex items-center text-orange-600 hover:text-orange-600 transition-colors">
                <Mail size={20} className="mr-3 text-orange-600" />
                info@loremipsum.com
              </a>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="bg-orange-600 hover:bg-orange-400 text-white p-2 rounded-full transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-orange-600 hover:bg-orange-400 text-white p-2 rounded-full transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-orange-600 hover:bg-orange-400 text-white p-2 rounded-full transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center text-sm text-orange-500 pt-6 border-t border-orange-600">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Temp &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;