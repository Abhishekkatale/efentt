import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBirthdayCake, FaCar, FaMusic, FaBuilding, FaHandshake, FaHeart, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Mayuri Gavhane",
    designation: "Traditional Event",
    feedback: "The traditional event was conducted with such elegance and attention to detail. It was a remarkable experience, leaving everyone impressed.",
    symbol: <FaHeart />,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    avatar: "MG"
  },
  {
    name: "Dr. R. V. Patil",
    designation: "Annual Day Event",
    feedback: "The annual gathering event was beautifully organized, bringing together students and faculty for a memorable experience. Outstanding coordination and execution!",
    symbol: <FaBuilding />,
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
    avatar: "RP"
  },
  {
    name: "Sanket Tilekar",
    designation: "Corporate Event",
    feedback: "The corporate event exceeded all expectations! The level of professionalism and meticulous planning was evident in every aspect.",
    symbol: <FaHandshake />,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    avatar: "ST"
  },
  {
    name: "Sumit Bhosale",
    designation: "DJ Launch Event",
    feedback: "The DJ launch event was electric! The energy, ambiance, and flawless organization made it a night to remember.",
    symbol: <FaMusic />,
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    avatar: "SB"
  },
  {
    name: "Supriya Jadhav",
    designation: "Car Showroom",
    feedback: "The event at our car showroom was a great success. The team ensured every detail was perfect, creating a highly engaging experience for our customers.",
    symbol: <FaCar />,
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50",
    avatar: "SJ"
  },
  {
    name: "Umesh Bhadwalkar",
    designation: "Wedding Event",
    feedback: "The wedding event was nothing short of magical. From the decorations to the seamless coordination, everything was perfect!",
    symbol: <FaHeart />,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    avatar: "UB"
  },
  {
    name: "Pavan Gavhane",
    designation: "Birthday Event",
    feedback: "The birthday event was delightful and filled with joy. The team's efforts in creating a memorable celebration were truly appreciated.",
    symbol: <FaBirthdayCake />,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    avatar: "PG"
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`${testimonial.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden max-w-4xl mx-auto`}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ 
        opacity: isActive ? 1 : 0.7, 
        scale: isActive ? 1 : 0.95, 
        y: 0 
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      {/* Background decorative elements */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} opacity-10 rounded-full blur-2xl`}></div>
      <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${testimonial.color} opacity-5 rounded-full blur-xl`}></div>
      
      {/* Quote icon */}
      <motion.div 
        className="absolute top-6 left-6"
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <FaQuoteLeft className="text-4xl text-gray-300" />
      </motion.div>
      
      <div className="relative z-10">
        {/* Header with avatar and icon */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <motion.div 
              className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {testimonial.avatar}
            </motion.div>
            
            {/* Name and designation */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 font-medium">
                {testimonial.designation}
              </p>
            </div>
          </div>
          
          {/* Event type icon */}
          <motion.div 
            className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg`}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            {testimonial.symbol}
          </motion.div>
        </div>
        
        {/* Stars */}
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {Array(5).fill(0).map((_, i) => (
            <motion.span 
              key={i} 
              className="text-yellow-400 text-2xl mx-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.3 }}
            >
              ★
            </motion.span>
          ))}
        </motion.div>
        
        {/* Feedback */}
        <motion.p 
          className="text-xl text-gray-700 text-center leading-relaxed italic mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          "{testimonial.feedback}"
        </motion.p>
      </div>
    </motion.div>
  );
};

const BeautifulTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Happy Clients</span>
            <br />Say About Us
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the amazing people who trusted us with their special moments
          </p>
        </motion.div>

        {/* Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard 
              key={currentIndex}
              testimonial={testimonials[currentIndex]} 
              isActive={true}
            />
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <motion.button
              onClick={prevTestimonial}
              className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 border border-gray-200 hover:border-purple-300 transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="text-xl" />
            </motion.button>
            
            {/* Dots indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 border border-gray-200 hover:border-purple-300 transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight className="text-xl" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeautifulTestimonial;