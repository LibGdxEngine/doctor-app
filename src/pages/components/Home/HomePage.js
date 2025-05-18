// src/app/page.js (or your HomePage file path)
"use client"; // Add this if you're using Next.js App Router and need client-side interactivity

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Menu as MenuIcon, X as XIcon } from "lucide-react";
import useScrollPosition from "../utils/useScrollPosition"; // Assuming this path is correct
import { useState, useEffect } from "react";
import LanguageDropdown from "../utils/LanguageDropdown"; // Assuming you have a LanguageDropdown component

export default function HomePage() {
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
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#recipient", text: "Assistance Recipient" },
    { href: "#assistant", text: "Become an Assistant" },
    { href: "#budget", text: "Personal Budget" },
    { href: "#provider", text: "Benefits Provider" },
    { href: "#about", text: "About Us" },
  ];

  return (
    <div className="w-full relative min-h-screen">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/young-handsome-physician-medical-robe-with-stethoscope.jpg" // Ensure this image is in your /public folder
          alt="Background image showing hands working with assistance equipment"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay for better text readability on background */}
      <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Slightly darker overlay */}

      {/* Main content container */}
      <div className="relative z-20">
        {/* Header/Navigation */}
        <header
          className={`fixed bg- top-0 left-0 right-0 z-50
          flex items-center justify-between px-4 sm:px-8 md:px-16
          py-3 sm:py-4
          transition-all duration-300 ease-in-out
          ${
            isScrolled || isMobileMenuOpen // Keep header background if mobile menu is open
              ? "bg-white shadow-lg"
              : "bg-white shadow-none"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={() => isMobileMenuOpen && handleMobileLinkClick()}>
              <div className="text-orange-500 font-bold text-2xl">
                <Image
                  src="/newdesign.png" // Ensure this image is in your /public folder
                  alt="Infinity Plus Logo"
                  width={isScrolled || isMobileMenuOpen ? 40 : 50}
                  height={isScrolled || isMobileMenuOpen ? 40 : 50}
                  className="h-10 w-auto sm:h-12 mr-2 transition-all duration-300"
                />
              </div>
              <div className="ml-2 flex flex-col">
                <span
                  className={`font-bold uppercase text-base sm:text-lg tracking-wider transition-colors duration-300 ${
                    isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-gray-900"
                  }`}
                >
                  Infinity Plus
                </span>
                <span
                  className={`text-xs italic transition-colors duration-300 ${
                    isScrolled || isMobileMenuOpen ? "text-orange-500" : "text-orange-400"
                  }`}
                >
                  your strong partner
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className={`font-medium transition-colors duration-300 px-2 py-1 rounded-md text-sm lg:text-sm ${
                  isScrolled || isMobileMenuOpen
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-gray-700 hover:text-orange-400"
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link
              href="#request-assistance"
              className={`px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm lg:text-base whitespace-nowrap ${
                isScrolled || isMobileMenuOpen
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-orange-500 hover:bg-orange-400 text-white" // Contrasting style for transparent header
              }`}
            >
              Request Assistance
            </Link>
          </nav>

          <LanguageDropdown /> {/* Assuming you have a LanguageDropdown component */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {isMobileMenuOpen ? <XIcon size={28} strokeWidth={2.5}/> : <MenuIcon size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </header>

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
                className="text-gray-600 hover:text-orange-500 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
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
                  className="block py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all duration-200 ease-in-out
                             opacity-1 animate-fadeInUp" // Animation classes
                  style={{ animationDelay: `${index * 0.07 + 0.1}s` }} // Staggered animation delay
                >
                  {link.text}
                </Link>
              ))}
              <Link
                href="#request-assistance"
                onClick={handleMobileLinkClick}
                className="block w-full text-center mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors duration-200
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
                  <MessageCircle size={26}/>
                </Link>
                <Link
                  href="tel:022739515274"
                  onClick={handleMobileLinkClick}
                  className="text-gray-500 hover:text-orange-500 transition-colors"
                  aria-label="Call"
                >
                  <Phone size={26}/>
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* Hero Content */}
        <main className="px-6 sm:px-8 py-16 md:px-16 md:py-24 max-w-4xl  flex flex-col items-center md:items-start justify-center min-h-screen pt-32 sm:pt-36 md:pt-40"> {/* Increased padding top */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-center md:text-left">
            Infinity Plus
          </h1>

          <p className="text-white text-lg sm:text-xl mb-8 max-w-xl text-center md:text-left">
            Mit Infinity Plus an Ihrer Seite, ein Leben voller Freiheit und
            Unabhängigkeit genießen: Egal ob im Privat- oder Berufsalltag - mit
            uns an Ihrer Seite meistern Sie jede Herausforderung.
          </p>

          <Link
            href="#request-hero"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-md text-lg font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            Jetzt Assistent*in Anfragen
          </Link>

          {/* Contact options */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10">
            <Link
              href="#" // Replace with your actual WhatsApp link e.g., https://wa.me/yourphonenumber
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-orange-300 transition-colors text-lg"
            >
              <MessageCircle className="mr-2.5 h-6 w-6" />
              <span>WhatsApp</span>
            </Link>
            <Link
              href="tel:022739515274"
              className="flex items-center text-white hover:text-orange-300 transition-colors text-lg"
            >
              <Phone className="mr-2.5 h-6 w-6" />
              <span>02273 9515274</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}