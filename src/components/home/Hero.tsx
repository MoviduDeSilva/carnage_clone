
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "NEW COLLECTION",
    subtitle: "Discover the latest trends",
    description: "Premium quality streetwear designed for those who dare to stand out",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/shop/new-arrivals"
  },
  {
    id: 2,
    title: "SUMMER ESSENTIALS",
    subtitle: "Beat the heat in style",
    description: "High-quality fabrics designed for comfort in hot weather",
    cta: "Explore Collection",
    image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
    link: "/shop/summer"
  },
  {
    id: 3,
    title: "LIMITED EDITION",
    subtitle: "Exclusive collaborations",
    description: "Unique pieces that combine art and fashion",
    cta: "View Collection",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/shop/limited-edition"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800); // Match with transition duration
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800); // Match with transition duration
  };
  
  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
              transition: "transform 6s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          {/* Content */}
          <div className="relative h-full z-20 flex items-center">
            <div className="container-fluid">
              <div className="max-w-xl">
                <span 
                  className={`inline-block text-sm tracking-widest uppercase mb-2 md:mb-4 text-white/90 ${
                    index === currentSlide ? "animate-fade-in animate-delay-100" : ""
                  }`}
                >
                  {slide.subtitle}
                </span>
                <h1 
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 ${
                    index === currentSlide ? "animate-fade-in animate-delay-200" : ""
                  }`}
                >
                  {slide.title}
                </h1>
                <p 
                  className={`text-white/80 text-lg mb-6 md:mb-8 max-w-md ${
                    index === currentSlide ? "animate-fade-in animate-delay-300" : ""
                  }`}
                >
                  {slide.description}
                </p>
                <Link 
                  to={slide.link}
                  className={`inline-flex items-center text-white border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 ${
                    index === currentSlide ? "animate-fade-in animate-delay-400" : ""
                  }`}
                >
                  {slide.cta}
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white transition-colors p-2 bg-black/20 backdrop-blur-sm rounded-full focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white transition-colors p-2 bg-black/20 backdrop-blur-sm rounded-full focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrentSlide(index);
              setTimeout(() => setIsAnimating(false), 800);
            }}
            className={`w-12 h-1 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
