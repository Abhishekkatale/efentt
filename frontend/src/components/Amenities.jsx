import React, { useState, useEffect } from 'react';
import { Calendar, Music, Camera, Smile, Star, Heart, Sparkles, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventManagementSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Custom Event Planning",
      description: "Tailored to your vision",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Music,
      title: "Entertainment & Music",
      description: "Perfect soundtrack for your day",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Capture every precious moment",
      color: "from-rose-400 to-rose-600"
    },
    {
      icon: Smile,
      title: "Memorable Experiences",
      description: "Creating lasting memories",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
   <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

    {/* Floating Icons */}
    <Star className="absolute top-32 right-1/4 w-6 h-6 text-pink-400/30 animate-bounce" />
    <Heart className="absolute bottom-40 left-1/4 w-8 h-8 text-rose-400/30 animate-pulse" />
    <Sparkles className="absolute top-1/4 left-1/2 w-5 h-5 text-purple-400/30 animate-bounce delay-500" />
  </div>

  <div className="max-w-7xl mx-auto relative">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* Left Image Section */}
      <div className={`lg:w-1/2 w-full relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
        <div className="relative group">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 group-hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Event Setup"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent"></div>
          </div>

          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-2xl overflow-hidden shadow-xl transform rotate-6 hover:rotate-12 transition-transform duration-500 group-hover:scale-110">
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Event Decor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-600/20"></div>
          </div>

          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-gray-800 font-medium shadow-lg">
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange-500" />
              Premium Events
            </span>
          </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div className={`lg:w-1/2 w-full transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
        <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-800">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Your Trusted Event
          </span>
          <br />
          Management Partner
        </h2>

        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          We specialize in creating unforgettable experiences tailored to your vision. Whether it's a wedding, corporate event, or a grand celebration, we transform your dreams into reality.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-gradient-to-r from-pink-50 to-orange-50 shadow-lg scale-105' 
                    : 'hover:bg-orange-50'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`p-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold text-lg">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/services">
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-600 hover:to-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-500/25 border border-gray-200">
              <span className="flex items-center justify-center gap-2">
                EXPLORE SERVICES
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default EventManagementSection;