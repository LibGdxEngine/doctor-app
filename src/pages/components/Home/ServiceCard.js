// components/ServiceCard.js
import React from 'react';
import Image from 'next/image'; // Assuming you'll use next/image for icons if they are static files

const ServiceCard = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg">
      <div className="mb-4 text-orange-500"> {/* Apply color here */}
        {/* Your SVG goes here */}
        {iconSrc}
      
      </div>
      <div className="mb-4 text-orange-500">
        {/* Replace with your actual icon component or image */}
        {/* Example if using next/image for icons: */}
        {/* If using SVG icons directly, e.g., from heroicons or custom SVGs: */}
        {/* <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="..."/></svg> */}
        {/* For the example, I'll just put a placeholder icon for now */}
        {!iconSrc && (
             <svg className="w-10 h-10" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
        )}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-medium text-gray-800 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;