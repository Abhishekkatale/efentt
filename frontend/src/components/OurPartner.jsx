import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';

const OurPartners = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const partners = [
    { name: "Aspire", logo: require("../assets/Aspire.png") },
    { name: "Musitech", logo: require("../assets/musi.png") },
    { name: "Cadence", logo: require("../assets/cade.png") },
    { name: "PDEA", logo: require("../assets/pdea2.png") },
    { name: "Shree", logo: require("../assets/shree.jpg") },
    { name: "Puneri", logo: require("../assets/puneridd.png") },
  ];

  useEffect(() => {
    if (!isAutoPlaying || !carouselRef.current) return;

    const carousel = carouselRef.current;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    const interval = setInterval(() => {
      if (carousel.scrollLeft >= maxScroll - 10) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6">
      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-400 rounded-full opacity-10 animate-pulse delay-2000"></div>
        <Sparkles className="absolute top-32 right-1/3 w-8 h-8 text-pink-400 opacity-20 animate-bounce" />
        <Heart className="absolute bottom-32 right-10 w-6 h-6 text-orange-400 opacity-20 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            We're proud to collaborate with industry leaders who share our vision of creating exceptional experiences together.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
            onScroll={handleScroll}
            onMouseDown={startDrag}
            onMouseMove={duringDrag}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 snap-start px-4 w-64">
                <div className={`group relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200 ${
                  index % 6 === 0
                    ? 'bg-pink-50'
                    : index % 6 === 1
                    ? 'bg-purple-50'
                    : index % 6 === 2
                    ? 'bg-orange-50'
                    : index % 6 === 3
                    ? 'bg-yellow-50'
                    : index % 6 === 4
                    ? 'bg-blue-50'
                    : 'bg-rose-50'
                }`}
                >
                  <div className="relative flex flex-col items-center justify-center h-32">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-28 h-28 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-gray-700 font-medium text-sm group-hover:text-gray-800 transition-colors">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-600/10 hover:bg-purple-600/20 text-purple-600 p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg font-medium">
            ✨ Join our growing family of satisfied partners ✨
          </p>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default OurPartners;
