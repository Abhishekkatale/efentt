import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, ExternalLink, ArrowRight, Star, Heart, Zap } from 'lucide-react';

const Cards = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsData = [
    {
      title: "Event Planning & Management",
      description:
        "We specialize in creating exceptional events that leave lasting impressions. Whether it's a corporate function, private celebration, or large-scale public event, our expert team designs and executes every detail to perfection.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Calendar,
      color: "from-purple-600 via-pink-500 to-orange-500",
      shadowColor: "shadow-purple-600/25"
    },
    {
      title: "Brand Activation",
      description:
        "Our Brand Activation services are designed to engage and captivate your target audience through innovative marketing strategies. We use a variety of platforms to boost brand visibility and create meaningful connections.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Zap,
      color: "from-purple-600 via-pink-500 to-orange-500",
      shadowColor: "shadow-pink-500/25"
    },
    {
      title: "Exhibition Design & Setup",
      description:
        "Our exhibition design services help brands stand out at trade shows, conventions, and expos. We provide end-to-end solutions, from conceptual design to construction, ensuring every stall is visually appealing and functional.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Star,
      color: "from-purple-600 via-pink-500 to-orange-500",
      shadowColor: "shadow-orange-500/25"
    }
  ];

  useEffect(() => {
    cardsData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-r from-orange-500/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        <Sparkles className="absolute top-32 right-1/4 w-8 h-8 text-purple-600/20 animate-bounce" />
        <Heart className="absolute bottom-40 left-1/5 w-6 h-6 text-pink-400/20 animate-pulse" />
        <Star className="absolute top-1/3 left-1/2 w-7 h-7 text-orange-500/20 animate-bounce delay-500" />
      </div>

      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Exceptional Services
          </span>
          <br />
          <span className="text-gray-800">Tailored for You</span>
        </h2>
        <p className="text-gray-700 text-xl leading-relaxed">
          Discover our comprehensive range of services designed to bring your vision to life with creativity, precision, and unmatched expertise.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => {
            const IconComponent = card.icon;
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${isHovered ? 'scale-105 z-10' : 'hover:scale-102'}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
                  isHovered ? card.shadowColor : 'shadow-xl'
                }`}>
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isHovered ? 'scale-110 brightness-60' : 'scale-100 brightness-75'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      isHovered ? 'from-black/80 via-black/50 to-transparent' : 'from-black/60 via-black/40 to-transparent'
                    } transition-all duration-500`}></div>
                  </div>

                  <div className="relative h-full flex flex-col justify-end p-8">
                    <div className={`absolute top-6 right-6 p-3 rounded-full bg-gradient-to-r ${card.color} shadow-lg transform transition-all duration-300 ${
                      isHovered ? 'scale-110 rotate-12' : 'scale-100'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <h3 className={`text-3xl font-bold mb-4 transition-all duration-300 ${
                      isHovered ? 'text-white' : 'text-white'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`text-lg leading-relaxed mb-6 transition-all duration-300 ${
                      isHovered ? 'text-gray-100' : 'text-gray-200'
                    }`}>
                      {card.description}
                    </p>

                    <div className={`transform transition-all duration-300 ${
                      isHovered ? '-translate-y-2 opacity-100' : 'opacity-80'
                    }`}>
                      <button className={`group/btn bg-gradient-to-r ${card.color} hover:shadow-lg text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105`}>
                        <span className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>

                    <div className={`absolute top-4 left-4 transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                    isHovered ? `bg-gradient-to-t ${card.color} opacity-10` : 'opacity-0'
                  }`}></div>
                </div>

                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-all duration-300 ${
                  isHovered ? 'scale-110 rotate-12' : 'scale-100'
                }`}>
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
