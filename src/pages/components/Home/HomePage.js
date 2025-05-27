// src/app/page.js (or your HomePage file path)
"use client"; // Add this if you're using Next.js App Router and need client-side interactivity
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Menu as MenuIcon, X as XIcon } from "lucide-react";
import useScrollPosition from "../utils/useScrollPosition"; // Assuming this path is correct
import { useState, useEffect } from "react";
import LanguageDropdown from "../utils/LanguageDropdown"; // Assuming you have a LanguageDropdown component

export default function HomePageWithNavBar({ isBigNav = false, headerText = "Assistenznehmer*in", image_url="/seila_assistenz13.jpg" }) {
  const isScrolled = useScrollPosition({ threshold: 10 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts or state changes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu if a link is clicked
  const handleMobileLinkClick = () => {
    // open the link in a new tab
    window.open("https://wa.me/4915773733381", "_blank");
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/assistenznehmer", text: "Assistenznehmer*in" },
    { href: "/assistent-werden", text: "Assistent*in werden" },
    { href: "#budget", text: "Personal Budget" },
    { href: "#provider", text: "Benefits Provider" },
    { href: "#about", text: "About Us" },
  ];


  return (
    <div className={`w-full ${isBigNav ? "h-[85vh] md:h-screen" : "h-[57vh]"} relative`}>
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        {isBigNav ? <video
          autoPlay
          loop
          muted
          className="object-cover object-top scale-x-[-1] w-full h-full"
          style={{ filter: "brightness(0.8)" }} // Adjust brightness here
          src="/home_video.mp4" // Ensure this video is in your /public folder
          type="video/mp4"
        ></video>
          :
          <Image
            src={`${image_url}`} // Ensure this image is in your /public folder
            alt="Background image showing hands working with assistance equipment"
            fill
            priority
            className="object-cover object-top scale-x-[-1]"
          />
        }

      </div>

      {/* Overlay for better text readability on background */}
      <div className=" absolute inset-0 bg-black/60 z-10 "></div> {/* Slightly darker overlay */}

      {/* Main content container */}
      <div className="h-full relative z-20">
        {/* Header/Navigation */}

        <div className="w-full relative z-20">
          <header
            className={`fixed  top-0 left-0 right-0 z-50
          flex items-center justify-between 
          py-12 
          transition-all duration-300 ease-in-out
          ${isScrolled || isMobileMenuOpen // Keep header background if mobile menu is open
                ? "bg-white shadow-lg"
                : "bg-transparent shadow-none"
              }`}
          >
            {/* Logo */}
            <div className=" md:w-1/4 flex items-center ml-8 md:ml-36">
              <Link href="/" className="flex items-center" onClick={() => isMobileMenuOpen && handleMobileLinkClick()}>
                <div className="text-orange-500 font-bold text-2xl">
                  <Image
                    src="/newdesign.png" // Ensure this image is in your /public folder
                    alt="Infinity Plus Logo"
                    width={isScrolled || isMobileMenuOpen ? 60 : 60}
                    height={isScrolled || isMobileMenuOpen ? 60 : 60}
                    className="h-10 w-auto sm:h-12 mr-2 transition-all duration-300"
                  />
                </div>
                <div className="ml-2 flex flex-col">
                  <span
                    className={`font-bold uppercase text-base sm:text-lg tracking-wider transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"
                      }`}
                  >
                    Infinity Plus
                  </span>
                  <span
                    className={`text-xs italic transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "text-orange-500" : "text-white"
                      }`}
                  >
                    your strong partner
                  </span>
                </div>
              </Link>
            </div>


            {/* Desktop Navigation */}
            <nav className="w-full mr-36  hidden md:flex items-center justify-between space-x-2 lg:space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className={`
        relative // Make the Link component a relative parent for the absolute pseudo-element
        font-medium
        transition-colors duration-300
        px-2 py-1 rounded-xl text-base lg:text-base
        group // Add the group class to enable group-hover
        ${isScrolled || isMobileMenuOpen
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-400"
                    }
      `}
                >
                  {link.text}
                  {/* Animated bottom line */}
                  <span
                    className={`
          absolute inset-x-0 bottom-0 h-0.5 // Define the line's position and height
          ${isScrolled || isMobileMenuOpen
                        ? "bg-orange-500" // Color when scrolled/mobile menu open
                        : "bg-orange-400" // Color when not scrolled/mobile menu closed
                      }
          transform origin-left scale-x-0 // Start with no width
          transition-transform duration-300 ease-out // Animation properties
          group-hover:scale-x-100 // Expand on hover
        `}
                  ></span>
                </Link>
              ))}

              {/* Your existing "Request Assistance" button */}
              <Link
                href="#request-assistance"
                className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm lg:text-base whitespace-nowrap ${isScrolled || isMobileMenuOpen
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-orange-500 hover:bg-orange-400 text-white" // Contrasting style for transparent header
                  }`}
              >
                Request Assistance
              </Link>
            </nav>


            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                className={`p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-wgrhite"
                  }`}
              >
                {isMobileMenuOpen ? <XIcon size={28} strokeWidth={2.5} /> : <MenuIcon size={28} strokeWidth={2.5} />}
              </button>
            </div>

          </header>
          {/* The very thin white line */}
          <div className={` fixed top-32 left-0 right-0 z-30 
        w-full h-[0.1px] // Full width, 1 pixel height (h-px is a Tailwind utility)
        ${isScrolled || isMobileMenuOpen
              ? 'bg-gray-600' // Lighter gray for scrolled/mobile
              : 'bg-gray-500' // Pure white for transparent header
            }
        // Optional: Add margin-top if you want some space between nav and line
        // mt-2
      `}></div>

        </div>
        {/* Mobile Menu Overlay (for background click to close and blur effect) */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          ></div>
        )}

        {/* Mobile Menu Panel - SLIDE IN ANIMATION */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm bg-white shadow-2xl z-40
            transform transition-transform duration-500 ease-in-out md:hidden
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`} // Slide in from right
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <span className="text-orange-500 font-bold text-xl">Menu</span>
              <button
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
                className="text-gray-600 hover:text-orange-500 p-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <XIcon size={28} />
              </button>
            </div>

            {/* Mobile Navigation Links - STAGGERED FADE-IN ANIMATION */}
            <nav className="flex-grow p-5 space-y-2 overflow-y-auto">
              {navLinks.map((link, index) => (
                <Link
                  key={link.text}
                  href={link.href}
                  onClick={handleMobileLinkClick} // Close menu on link click
                  className="block py-3 px-4 text-gray-700 font-medium rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-all duration-200 ease-in-out
                             opacity-1 animate-fadeInUp" // Animation classes
                  style={{ animationDelay: `${index * 0.07 + 0.1}s` }} // Staggered animation delay
                >
                  {link.text}
                </Link>
              ))}
              <Link
                href="#request-assistance"
                onClick={handleMobileLinkClick}
                className="block w-full text-center mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors duration-200
                           opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${navLinks.length * 0.07 + 0.1}s` }}
              >
                Request Assistance
              </Link>
            </nav>

            {/* Mobile Menu Footer (Optional: Contact Icons) */}

            <div className="p-5 mt-auto border-t border-gray-200">

              <div className="flex items-center justify-center space-x-6">
                <Link
                  href="#" // Replace with your WhatsApp link
                  onClick={handleMobileLinkClick}
                  className="text-gray-500 hover:text-orange-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={26} />
                </Link>
                <Link
                  href="tel:022739515274"
                  onClick={handleMobileLinkClick}
                  className="text-gray-500 hover:text-orange-500 transition-colors"
                  aria-label="Call"
                >
                  <Phone size={26} />
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* Hero Content */}
        <main className={`h-full pt-36  flex flex-col ${isBigNav ? "items-center md:items-start justify-star px-4 md:px-36" : "items-center justify-center"}  t`}> {/* Increased padding top */}

          {isBigNav && <div
          style={{fontSize: "0.8rem"}}
            className="inline-block text-[#289697] text-center md:text-left md:text-base text-white mb-4 mt-8"
          >
            Egal ob im Privat- oder Berufsalltag – mit uns an Ihrer Seite meistern Sie jede Herausforderung.
          </div>}

          <h1 style={{ }} className={`w-full leading-[1] md:leading-[8] text-3xl md:w-3/4 lg:text-5xl leading-relaxed font-semibold text-white text-left mb-4 ${isBigNav ? "text-center md:text-left" : "text-center"} `}>
            {headerText}
          </h1>

          {isBigNav && <div className="w-full md:w-5/12 text-center md:text-left mb-4 ">
            Mit Infinity Plus an Ihrer Seite, ein Leben voller Freiheit
            und Unabhängigkeit genießen. Egal ob im Privat- oder Berufsalltagmit - uns an Ihrer Seite meistern Sie jede Herausforderung.
          </div>}
          {isBigNav && <Link
            href="#request-hero"
            className="inline-block   bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            Jetzt Assistent*in Anfragen
          </Link>}

          {/* WHITE LINE */}
          {isBigNav && <div className={`w-11/12 md:w-5/12 h-[0.5px] mt-12 bg-gray-300 }`}></div>}

          {/* Contact options */}
          {isBigNav && <div className="w-11/12  md:w-5/12 mt-6  flex flex-row items-center justify-between md:justify-center sm:space-y-0 sm:space-x-10">
            <Link
              href="https://wa.me/4915773733381" // Replace with your actual WhatsApp link e.g., https://wa.me/yourphonenumber
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-orange-300 transition-colors text-lg"
            >
              <MessageCircle className="mr-2.5 h-6 w-6" />
              <span>WhatsApp</span>
            </Link>
            {/* WHITE LINE VERTICAL*/}
            <div className={` w-[0.5px] h-full mt-0 bg-gray-300 }`}></div>

            <Link
              href="tel:4915773733381"
              className="flex items-center text-white hover:text-orange-300 transition-colors text-lg"
            >
              <Phone className="mr-2.5 h-6 w-6" />
              <span>491577 3733381</span>
            </Link>
          </div>}
        </main>
      </div>
    </div>
  );
}