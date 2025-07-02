import React from "react";
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { value: 150, label: "Happy Clients", icon: "👥" },
  { value: 250, label: "Projects Done", icon: "🚀" },
  { value: 180, label: "Events Hosted", icon: "🎉" },
  { value: 95, label: "Success Rate", icon: "⭐", suffix: "%" },
];

const Counter = ({ endValue, suffix = "+" }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const counterRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [endValue, isVisible]);

  return (
    <span ref={counterRef} className="font-bold text-4xl md:text-5xl text-white">
      {count}{suffix}
    </span>
  );
};


const App = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
      
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Amazing Journay</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into realtity with passion, creativity, and excellence.
            </p>
          </motion.div>

       {/* Stats Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1E1B2E] to-[#0F0C1A] transition-all duration-500 hover:scale-[1.03] shadow-lg hover:shadow-2xl hover:shadow-pink-500/30"
    >
      {/* Content */}
      <div className="relative p-8 text-center z-10">
        {/* Icon */}
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-white">
          {stat.icon}
        </div>

        {/* Counter */}
        <div className="mb-2 text-white">
          <Counter endValue={stat.value} suffix={stat.suffix || "+"} />
        </div>

        {/* Label */}
        <p className="text-slate-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
          {stat.label}
        </p>

        {/* Decorative Gradient Dots */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>
    </div>
  ))}
</div>




<div className="flex justify-center items-center mt-16">
  <motion.button
    className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-green-300 font-semibold text-lg relative z-10">
      ✨ Successfully Completed 500+ Projects & Counting!
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </motion.button>
</div>


        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;