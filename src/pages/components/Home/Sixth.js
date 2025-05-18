// components/ImageFeatureSection.jsx
import React from "react";
import Image from "next/image"; // Using next/image for optimization
import { Phone, Mail } from "lucide-react";

// Assume these are the paths to your images in the public folder
const MAIN_IMAGE_URL = "/muhammad-hicham-PYxK4LNGn6E-unsplash.jpg"; // Replace with your actual photo path
const PATTERN_IMAGE_URL = "/Pattern.svg"; // Replace with your actual pattern path

const Sixth = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-16">
        <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content Column */}
          <div className="md:w-1/2 lg:w-5/12 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Call Us Anytime {/* Replace with your actual heading */}
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
              {/* Replace with your actual paragraph content */}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-6 mb-8">
              <a
                href="tel:1234567890"
                className="flex items-center justify-center md:justify-start text-gray-700 hover:text-sky-600 transition-colors"
              >
                <Phone size={20} className="mr-2 text-sky-500" />
                123.456.7890 {/* Replace with actual phone */}
              </a>
              <a
                href="mailto:info@loremipsum.com"
                className="flex items-center justify-center md:justify-start text-gray-700 hover:text-sky-600 transition-colors"
              >
                <Mail size={20} className="mr-2 text-sky-500" />
                info@loremipsum.com {/* Replace with actual email */}
              </a>
            </div>
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Somes Us {/* Replace with your actual button text */}
            </button>
          </div>

          {/* Right Image Column */}
          <div className="md:w-1/2 lg:w-7/12 mt-8 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Pattern Image (Background) */}
              <div
                className="absolute -bottom-8 -right-8 sm:-bottom-2 sm:-right-10 lg:bottom-20 lg:right-28 z-0 opacity-80"
                style={{ width: "60%", height: "60%" }}
              >
                <Image
                  src={PATTERN_IMAGE_URL}
                  alt="Decorative pattern"
                  width={600} // Adjust as needed
                  height={600} // Adjust as needed
                  className="pointer-events-none" // So it doesn't interfere with mouse events
                />
              </div>

              {/* Main Photo (Foreground) */}
              <div className="relative z-10  bg-gray- rounded-lg overflow-hidden">
                {/* The bg-gray-300 is a fallback if image doesn't load or as placeholder style */}
                <Image
                  src={MAIN_IMAGE_URL}
                  alt="Featured content" // Provide a descriptive alt text
                  width={400} // Adjust as needed
                  height={600} // Adjust as needed
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sixth;
