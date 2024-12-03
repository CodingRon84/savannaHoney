// /src/app/components/Hero.tsx
"use client";

import { useRef, useEffect } from "react";

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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.jpg" // Placeholder image for loading
      >
        <source src="/video/honey-clip2.mp4" type="video/mp4" />
        <source src="/video/honey-clip2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Discover the Sweetness of Nature
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Welcome to Savannah Honey, where every jar tells a story of purity,
          sustainability, and family tradition. From the heart of Jamaica to
          your table, savor the richness of untouched nature.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center space-x-4 animate-fade-in-delay-2">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-md hover:shadow-lg"
            onClick={() => (window.location.href = "#shop")}
          >
            Shop Now
          </button>
          {/* <button
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 shadow-md hover:shadow-lg"
            onClick={() => window.location.href = "#about"}
          >
            Learn Our Story
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
