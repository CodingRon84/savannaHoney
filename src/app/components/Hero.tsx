// /src/app/components/Hero.tsx
"use client";

import { useRef, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById("content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/api/placeholder/1920/1080" // placeholder - to replace with skeleton
      >
        <source src="/video/honey-clip2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to Our Website
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-fade-in-delay">
            Discover amazing experiences and possibilities with us.
          </p>
          <div className="space-x-4 animate-fade-in-delay-2">
            <button
              onClick={scrollToContent}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white transition-transform hover:translate-y-1 cursor-pointer"
          title="Scroll to Content"
        >
          <ArrowDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
