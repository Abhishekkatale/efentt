import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Megaphone, 
  Handshake, 
  TrendingUp, 
  Users, 
  Trophy, 
  MapPin, 
  Rocket, 
  Heart,
  Star,
  Sparkles,
  ArrowRight,
  Award,
  Target,
  Eye,
  Zap
} from 'lucide-react';

const sectionIds = [
  'hero', 'mission-vision', 'mission-card', 'vision-card',
  'why-choose',
  'why-0', 'why-1', 'why-2',
  'values-header',
  'value-0', 'value-1', 'value-2',
  'cta',
  'stats'
];



const AboutPage = () => {
  const [visibleElements, setVisibleElements] = useState(
    sectionIds.reduce((a, id) => ({ ...a, [id]: false }), {})
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => {
      if (!visibleElements[el.id]) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleElements]);

  const AnimatedSection = ({ children, id, className = "" }) => (
    <div
      id={id}
      data-animate
      className={`transform transition-opacity transition-transform duration-700 ease-out
        ${visibleElements[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}`}
    >
      {children}
    </div>
  );

  return (
    <>
      <Header />
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-white to-rose-100/50"></div>
        <div className="absolute top-10 left-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-4 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-200/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <AnimatedSection id="hero">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                        <Sparkles className="w-5 h-5 text-white mr-2" />
                        <span className="text-white font-medium">Creating Magical Moments</span>
                      </div>
            
             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About 
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Efent Events Planner</span>
          </h1>
          
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              At Efent Events, we specialize in creating memorable and impactful events. 
              From corporate functions to brand activations, we ensure that each event is 
              unique and unforgettable.
            </p>
            
            <button className="group inline-flex items-center bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Discover Our Story
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection id="mission-vision" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Our Mission & Vision
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <AnimatedSection id="mission-card">
              <div className="group relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-pink-200">
                <div className="absolute -top-4 sm:-top-6 left-6 sm:left-8">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="pt-6 sm:pt-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                    Our Mission
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 ml-2" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    To deliver exceptional event experiences through creativity, innovation, 
                    and meticulous planning. Our goal is to bring your vision to life with 
                    seamless execution and extraordinary results.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection id="vision-card">
              <div className="group relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:border-rose-200">
                <div className="absolute -top-4 sm:-top-6 left-6 sm:left-8">
                  <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="pt-6 sm:pt-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                    Our Vision
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 ml-2" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    To be the world's leading event management company, transforming every 
                    event into an extraordinary experience that exceeds expectations and 
                    creates lasting memories.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50/50 to-rose-50/50">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection id="why-choose" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Why Choose Efent Events?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the perfect partner for your next event
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Megaphone,
                title: "Expertise",
                description: "With over a decade of experience in event management, we have honed our skills to deliver flawless events that leave lasting impressions.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: TrendingUp,
                title: "Tailored Solutions",
                description: "We specialize in creating personalized event strategies that align with your specific goals, ensuring each event is a perfect fit.",
                color: "from-rose-500 to-pink-600"
              },
              {
                icon: Users,
                title: "Customer-Centric",
                description: "Your satisfaction is our priority. We work closely with you to understand your needs, ensuring every detail is perfect.",
                color: "from-pink-600 to-rose-600"
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} id={`why-${index}`}>
                <div className="group bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-pink-200 hover:-translate-y-2">
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6`}>
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection id="values-header" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Trophy,
                title: "Excellence",
                description: "We strive for perfection in everything we do, from planning to execution, ensuring that each event is a true success.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "We constantly innovate and stay ahead of the curve to provide creative solutions that set us apart in the event management industry.",
                color: "from-blue-500 to-purple-600"
              },
              {
                icon: Rocket,
                title: "Passion",
                description: "We are passionate about delivering experiences that resonate with our clients and their audiences, leaving a lasting impact.",
                color: "from-pink-500 to-rose-600"
              }
            ].map((value, index) => (
              <AnimatedSection key={value.title} id={`value-${index}`}>
                <div className="group relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 text-center hover:-translate-y-2">
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${value.color} shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6`}>
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600">
        <div className="container mx-auto text-center max-w-4xl">
          <AnimatedSection id="cta" className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg sm:text-xl text-pink-100 mb-8 sm:mb-10 leading-relaxed">
              Let's bring your vision to life with an unforgettable event experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center bg-white text-pink-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started Today
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300">
                View Our Portfolio
                <Star className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection id="stats">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: "500+", label: "Events Organized", icon: Award },
                { number: "50+", label: "Happy Clients", icon: Heart },
                { number: "10+", label: "Years Experience", icon: Trophy },
                { number: "20+", label: "Team Members", icon: Users }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="inline-flex p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>

      <Footer />
    </> 
  );
};

export default AboutPage;