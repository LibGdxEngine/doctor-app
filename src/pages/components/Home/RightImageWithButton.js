import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Mail, Import } from 'lucide-react'; // Using lucide-react for icons

import Image from 'next/image'; // Assuming you're using Next.js for image optimization
const RightImageWithButton = ({title , desc, IMAGE_URL }) => {
    // Refs for animation
    const sectionRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const contactLinksRef = useRef(null);

    // Image URL - Replace with your actual image path or URL
    // For local images, place them in the `public` folder and use a path like '/your-image-name.jpg'
    // const IMAGE_URL = ''; // Placeholder image
    const VIDEO_URL = 'https://www.w3schools.com/html/mov_bbb.mp4'; // Placeholder video
    //   useEffect(() => {
    //     const elementsToAnimate = [
    //       titleRef.current,
    //       paragraphRef.current,
    //       buttonRef.current,
    //       contactLinksRef.current,
    //       rightColumnRef.current, // Animate the image column as well
    //     ];

    //     const observer = new IntersectionObserver(
    //       (entries) => {
    //         entries.forEach((entry) => {
    //           if (entry.isIntersecting) {
    //             entry.target.classList.add('animate-fadeInUp');
    //             observer.unobserve(entry.target);
    //           }
    //         });
    //       },
    //       { threshold: 0.1 }
    //     );

    //     elementsToAnimate.forEach((el, index) => {
    //       if (el) {
    //         el.style.opacity = 0;
    //         el.style.transform = 'translateY(20px)';
    //         // Stagger the animation for a nicer effect
    //         el.style.transition = `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`;
    //         observer.observe(el);
    //       }
    //     });

    //     return () => {
    //       elementsToAnimate.forEach((el) => {
    //         if (el) observer.unobserve(el);
    //       });
    //     };
    //   }, []);

    return (
        <section ref={sectionRef} className="w-full py-16 md:py-24 lg:py-32 overflow-hidden">
            <div className=" mx-8 md:mx-36 ">
                <div className="grid lg:grid-cols-2  gap-12 lg:gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <div ref={leftColumnRef}>
                        <h1
                            ref={titleRef}
                            className="text-2xl sm:text-2xl lg:text-5xl font-bold mb-6 leading-tight text-gray-800"
                            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                        >
                            {title}
                        </h1>
                        <p ref={paragraphRef} className="text-sm text-gray-700 mb-8 leading-relaxed">
                            {desc}
                         </p>
                        <div ref={buttonRef} className="mb-8">
                            <a
                                href="#contact-form" // Replace with your target link
                                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-orange-50/50 transition-all duration-300 transform hover:scale-105 group"
                            >
                                Jetzt Assistenz anfragen
                                <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                        <div ref={contactLinksRef} className="flex flex-col items-center  md:items-start sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-gray-600">
                            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-orange-600 transition-colors group">
                                <MessageSquare className="h-5 w-5 mr-2 text-orange-500 group-hover:text-orange-600 transition-colors" />
                                WhatsApp Service
                            </a>
                            <a href="mailto:info@plus-infinity.de" className="flex items-center hover:text-orange-600 transition-colors group">
                                <Mail className="h-5 w-5 mr-2 text-orange-500 group-hover:text-orange-600 transition-colors" />
                                info@plus-infinity.de
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div ref={rightColumnRef} className="mt-12 lg:mt-0">
                        <div className="rounded-xl shadow-2xl overflow-hidden group transform hover:scale-105 transition-transform duration-500 ease-out">

                            <div id="home-video"
                                className="w-full h-[50vh] md:h-[50vh] flex flex-col  items-center justify-center">

                                <Image
                                    src={IMAGE_URL}
                                    alt="Video"
                                    width={500} // Adjust width as needed
                                    height={500} // Adjust height as needed
                                    className="w-full h-full object-cover"
                                    style={{ filter: 'blur(0px)' }} // Adjust the blur effect as needed

                                />
                            </div>

                        </div>
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

export default RightImageWithButton;