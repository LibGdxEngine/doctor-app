import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Mail } from 'lucide-react'; // Using lucide-react for icons



const RightVideoWithButton = () => {
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
    const IMAGE_URL = 'https://placehold.co/800x600/e2e8f0/64748b?text=Placeholder+Image'; // Placeholder image
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
                            Assistenzleistungen für ein <span className="text-orange-600">Selbstbestimmtes Leben</span>
                        </h1>
                        <p ref={paragraphRef} className="text-sm text-gray-700 mb-8 leading-relaxed">
                            Willkommen bei Infinity Plus, Ihrem zuverlässigen Partner in Bochum und Umgebung. Unser Assistenzdienst unterstützt Menschen mit Behinderung dabei, ein selbstbestimmtes Leben zu führen. Entdecken Sie unsere umfassenden Leistungen, die individuell auf Ihre Bedürfnisse zugeschnitten sind.
                        </p>
                        <div ref={buttonRef} className="mb-8">
                            <a
                                href="https://wa.me/4915773733381" // Replace with your target link
                                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-orange-50/50 transition-all duration-300 transform hover:scale-105 group"
                            >
                                Jetzt Assistenz anfragen
                                <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                        <div ref={contactLinksRef} className="flex flex-col items-center  md:items-start sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-gray-600">
                            <a href="https://wa.me/4915773733381" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-orange-600 transition-colors group">
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

                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/QX7Q0a8GxaA"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
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

export default RightVideoWithButton;