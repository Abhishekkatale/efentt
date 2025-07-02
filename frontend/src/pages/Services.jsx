import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaBullhorn, FaChartLine, FaSearch, FaHandshake, FaUsers, FaHeart, FaFire, FaFutbol, FaGlobe } from "react-icons/fa";
import { Sparkles } from 'lucide-react';
const services = [
  {
    icon: FaBullhorn,
    title: "Corporate Events",
    description: "We specialize in organizing impactful corporate events that align with your company's goals, including conferences, workshops, and seminars.",
    gradient: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: FaGlobe,
    title: "Trip Organization & Travel Services",
    description: "We offer seamless trip planning and travel services, ensuring hassle-free experiences for corporate retreats, team outings, and personalized journeys.",
    gradient: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: FaChartLine,
    title: "Exhibitions",
    description: "Efnet manages exhibitions that showcase your brand and products to a wide audience. Our team ensures smooth execution and memorable experiences.",
    gradient: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: FaSearch,
    title: "Brand Activation",
    description: "We create unique brand activation experiences to engage your audience and create lasting impressions through innovative campaigns.",
    gradient: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    icon: FaHandshake,
    title: "Digital Desk – Staff Management",
    description: "Our Digital Desk services help streamline staff management during events, offering real-time coordination and scheduling.",
    gradient: "from-teal-400 to-teal-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600"
  },
  {
    icon: FaUsers,
    title: "Social Gatherings",
    description: "Whether it's a casual meetup or a large-scale reunion, we plan and execute social gatherings that bring people together beautifully.",
    gradient: "from-indigo-400 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    icon: FaHeart,
    title: "Weddings",
    description: "From intimate ceremonies to grand celebrations, our wedding planning services ensure your special day is flawless and unforgettable.",
    gradient: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600"
  },
  {
    icon: FaFire,
    title: "Festivals",
    description: "Celebrate traditions and culture with our expertly managed festival events, blending vibrant themes with seamless execution.",
    gradient: "from-red-400 to-red-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600"
  },
  {
    icon: FaFutbol,
    title: "Sports Events",
    description: "Our sports event management team ensures every game, tournament, or competition runs smoothly for players and spectators.",
    gradient: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  }
];

const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon;
  
  return (
  
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      <div className={`${service.bgColor} backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
        {/* Decorative gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
        
        {/* Icon container with floating animation */}
        <motion.div 
          className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md border-2 border-white/50 relative z-10`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <IconComponent className={`text-3xl ${service.iconColor}`} />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {service.description}
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full"></div>
      </div>
    </motion.div>
  );
};

const BeautifulServicesSection = () => {
  return (
      <>
        <Header />
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto relative z-10 pt-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
             <div className="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-white mr-2" />
            <span className="text-white font-medium">Our Services</span>
          </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Crafting Memorable
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Experiences</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From corporate gatherings to dream weddings, we bring your vision to life with creativity, precision, and a touch of magic.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Create Magic Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>

    < Footer />     
    </>
  );
};

export default BeautifulServicesSection;