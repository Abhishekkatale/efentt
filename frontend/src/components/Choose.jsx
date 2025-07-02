import React, { useState, useRef } from "react";
import { Play, Pause, Heart, Star, Award, Users } from "lucide-react";
import videoSrc from "../assets/vid.MP4";
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const features = [
    { icon: <Heart className="w-5 h-5" />, text: "Personalized Experience", bg: "bg-pink-50" },
    { icon: <Star className="w-5 h-5" />, text: "Premium Quality", bg: "bg-purple-50" },
    { icon: <Award className="w-5 h-5" />, text: "Award Winning Service", bg: "bg-orange-50" },
    { icon: <Users className="w-5 h-5" />, text: "Expert Team", bg: "bg-rose-50" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 md:px-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 border border-gray-200 rounded-full px-6 py-2 mb-6">
            <Heart className="w-4 h-4 text-pink-400" />
            <span className="text-gray-700 text-sm font-medium">Why Choose Efent</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Creating Magic
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where dreams meet reality and every moment becomes unforgettable
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Main Description */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
              <p className="text-gray-700 leading-relaxed text-lg">
                At <span className="font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">Efent</span>, we specialize in transforming your vision into extraordinary experiences. Our passionate team crafts bespoke events that reflect your unique story, whether it's an intimate celebration or a grand corporate gathering.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group ${feature.bg} border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-500 cursor-pointer`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-gray-800 text-sm font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Decorative Ring */}
              <div className={`absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 ${isPlaying ? 'animate-pulse' : ''}`} style={{filter: 'blur(8px)'}}></div>
              
              {/* Video Container */}
              <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Element */}
                <div className="relative">
                  <video
                    ref={videoRef}
                    className="w-full h-64 md:h-80 object-cover rounded-xl cursor-pointer"
                    src={videoSrc}
                    controls={isPlaying}
                    onClick={togglePlay}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    style={{
                      filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                    }}
                    playsInline
                    muted
                  />
                  
                  {/* Play/Pause Overlay */}
                  {!isPlaying && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300 cursor-pointer"
                      onClick={handlePlay}
                    >
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg">Our Story</h3>
                      <p className="text-gray-300 text-sm">Watch how we create magic</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-xs">LIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                <Heart className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              
              <div className={`absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-700 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
                <Star className="w-5 h-5 text-white" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Events Created", bg: "bg-blue-50" },
            { number: "98%", label: "Client Satisfaction", bg: "bg-green-50" },
            { number: "50+", label: "Team Members", bg: "bg-yellow-50" },
            { number: "5+", label: "Years Experience", bg: "bg-purple-50" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`${stat.bg} border border-gray-200 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-500`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="flex justify-center items-center mt-16">
        <motion.button
          className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white font-semibold text-lg relative z-10">
            ✨ Successfully Completed 500+ Projects & Counting!
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default WhyChooseUs;