// components/Footer.js
import React, { useState, useEffect } from 'react';
import { ChevronUp, Phone, Mail, MessageSquare, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react'; // Using lucide-react for icons
import { Facebook, X, ChartAreaIcon } from 'lucide-react';
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Placeholder social icons (replace with actual icons or SVGs if needed)
  const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400 hover:text-white transition-colors">
      <path d="M16.74 8.32a5.74 5.74 0 0 0-5.74-5.74V13.5a5.74 5.74 0 1 0 5.74-5.74Z"></path>
      <path d="M11 2H8.5a6.5 6.5 0 0 0 0 13V9.5"></path>
    </svg>
  );

  const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400 hover:text-white transition-colors">
      <path d="M15.545 6.558C15.545 6.558 14.207 3.552 12 3.552c-4.011 0-6.809 2.785-6.809 6.448s2.798 6.448 6.809 6.448c2.205 0 3.545-3 3.545-3" />
      <path d="M12 10.001h6.809" />
    </svg>
  );


  return (
    <footer className="w-full bg-gray-900 text-gray-300 font-sans pt-80">
      <div className=" px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-start">
          {/* Contact Section */}
          <div className="text-center md:text-start flex flex-col items-center justify-center md:flex md:items-start md:justify-start">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange-500" />
                <a href="tel:4915773733381" className="hover:text-orange-400 transition-colors">4915773733381</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange-500" />
                <a href="mailto:info@plus-infinity.de" className="hover:text-orange-400 transition-colors">info@plus-infinity.de</a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3 text-orange-500" />
                <a href="https://wa.me/4915773733381" className="hover:text-orange-400 transition-colors">WhatsApp Service</a>
              </li>
              <li className="flex items-start mt-2">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Infinity Plus</p>
                  <p>Am Pumpwerk 7, </p>
                  <p>44879 Bochum</p>
                </div>
              </li>
              <li className="flex justify-center items-center space-x-4 mt-4">
                <Facebook onClick={()=>{
                  window.open('https://www.facebook.com/infinityplusa', '_blank');
                }} className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                <X onClick={()=>{
                  window.open('https://x.com/Infinitypl9541?t=bq5M60u8khyiuZOjULS96w&s=09', '_blank');
                }} className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                {/* <a href="#" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors">
                  <TikTokIcon />
                </a>
                <a href="#" aria-label="Google" className="text-gray-400 hover:text-white transition-colors">
                  <GoogleIcon />
                </a> */}
              </li>
            </ul>
          </div>

          {/* Assistance Service Section (2 columns) */}
          <div className="lg:col-span-2">
            <div className="text-center md:text-start flex flex-col items-center justify-center md:flex md:items-start md:justify-start">
              <h3 className=" text-lg font-semibold text-white mb-4">Assistance service</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-28 gap-y-3">
                {[
                  "Assistance Service Aachen", "Assistance Service Essen",
                  "Assistance Service Bergheim", "Euskirchen Assistance Service",
                  "Assistance Service Bonn", "Assistance Service Cologne",
                  "Assistance Service Bochum", "Assistance Service Leverkusen",
                  "Assistance Service Dortmund", "Assistance Service Rheine",
                  "Assistance Service Duisburg", "Assistance Service Siegen",
                  "Assistance Service Düren", "Wuppertal Assistance Service",
                  "Assistance Service Düsseldorf"
                ].map((service) => (
                  <a key={service} href="#" className="hover:text-orange-400 transition-colors block">{service}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Further Links Section */}
          <div className=' text-center md:text-start flex flex-col items-center justify-center md:flex md:items-start md:justify-start'>
            <h3 className="text-lg font-semibold text-white mb-4">Further links</h3>
            <ul className="space-y-3">
              {["Blog", "Glossary", "Contact", "Achievers", "Job Ads Indeed", "About us"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-orange-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-600 text-white py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0">&copy; Powered by Potes Media 2025</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#" className="hover:underline">Imprint</a>
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Cookie Policy (EU)</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
