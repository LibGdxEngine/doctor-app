import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Mail } from 'lucide-react'; // Using lucide-react for icons
import Image from 'next/image'; // Importing Image from next/image for optimized image loading
import Link from 'next/link';

const LeftImageWithText = ({title , desc, title2, desc2, IMAGE_URL}) => {
  // Refs for animation
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const contactLinksRef = useRef(null);




  return (
    <section ref={sectionRef} className="w-full bg-orange-50/50 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className=" mx-8 md:mx-36 ">
        <div className="grid lg:grid-cols-2  gap-12 lg:gap-16 items-center">
          {/* Right Column: Image */}
          <div ref={rightColumnRef} className="w-full ">
            <Image
              src={`${IMAGE_URL}`} // Ensure this image is in your /public folder
              alt="Infinity Plus Logo"
              width={700}
              height={700}
              className="h-68 w-72 transition-all duration-300"
            />
          </div>


          {/* Left Column: Text Content */}
          <div ref={leftColumnRef}>
            <div
              ref={titleRef}
              className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-6 leading-tight text-gray-800"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              {title}
            </div>
            <p ref={paragraphRef} className="text-sm text-gray-700 mb-8 leading-relaxed">
             {desc}
              </p>
            <div
              ref={titleRef}
              className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-6 leading-tight text-gray-800"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              {title2}
            </div>
            <p ref={paragraphRef} className="text-sm text-gray-700 mb-8 leading-relaxed">
            {desc2}
            </p>
        
          </div>


        </div>
      </div>
      {/* Ensure the fadeInUp animation class is available (e.g., from a global CSS or a previous component's style tag) */}
      {/* If not, you can add it here like in the HeroVideoSection:
      <style jsx global>{`
        .animate-fadeInUp {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
      */}
    </section>
  );
};

export default LeftImageWithText;