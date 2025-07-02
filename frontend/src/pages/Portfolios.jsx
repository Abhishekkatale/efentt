import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, Star, Heart, Award, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonials';
// Sample portfolio data with placeholder images
const portfolioData = [
  {
    title: "Utkansh 2.0 - PDEACOEM Gathering",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    description: "A grand cultural and technical gathering at PDEACOEM, featuring competitions, performances, and knowledge-sharing sessions.",
    link: "https://www.instagram.com/reel/DGsC-UEzW2d/?igsh=MWI4OHJ4OGh5Mmloag==",
    category: "Cultural",
    attendees: "500+",
    featured: true
  },
  {
    title: "Wet'n Joy Trip Organization - Pune",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
    description: "Successfully organized and managed a trip for 40 people from Pune to Wet'n Joy, ensuring seamless coordination and an enjoyable experience.",
    link: "https://www.instagram.com/reel/DHfTrbmNFUh/?igsh=MXhnbDJpdXd5MW4yOA==",
    category: "Travel",
    attendees: "40",
    featured: false
  },
  {
    title: "Ramp Inferno 2025 - Cadence Academy",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&h=300&fit=crop",
    description: "A spectacular fashion event showcasing creativity, style, and talent, making a bold statement in the fashion world.",
    link: "https://www.instagram.com/reel/DG7wheHJs80/?igsh=MWwyZ2l5OHVzeHhkZw==",
    category: "Fashion",
    attendees: "300+",
    featured: true
  },
  {
    title: "Corporate Event - Aspire Sports Club",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop",
    description: "A dynamic corporate event featuring keynote speakers, seminars, and networking sessions aimed at fostering business growth.",
    link: "https://www.instagram.com/reel/DDTx7olTBDd/?igsh=MTc4aHhoMm8xdmM2bA==",
    category: "Corporate",
    attendees: "200+",
    featured: false
  },
  {
    title: "Traditional Event - Cadence Academy",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&h=300&fit=crop",
    description: "A cultural event blending traditional performances and community activities to celebrate heritage and innovation.",
    link: "https://www.instagram.com/reel/C6lhKlkIs4K/?igsh=MXl5ZGNiaHkyaTEz",
    category: "Cultural",
    attendees: "150+",
    featured: false
  },
  {
    title: "Annual Gathering Event - PDEACOEM",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop",
    description: "An annual celebration at PDEACOEM, bringing together students, alumni, and faculty with engaging talks and performances.",
    link: "https://www.instagram.com/reel/C4nWH3LB-Ml/?igsh=MThlajIzOHhzZ3UxeA==",
    category: "Academic",
    attendees: "400+",
    featured: true
  }
];

const PortfolioSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cultural', 'Corporate', 'Fashion', 'Travel', 'Academic'];
  
  const filteredData = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white py-24 pt-28">
        <div className="absolute inset-0 "></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-white mr-2" />
            <span className="text-white font-medium">Our Recent Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Creating Magical
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Happy Clients</span>
            <br />Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every event tells a story. Let us help you write yours with unforgettable moments and seamless execution.
          </p>
        </div>


        
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-200' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full flex items-center text-sm font-medium">
                  <Star className="w-4 h-4 mr-1" />
                  Featured
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{item.attendees}</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-medium">{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Action Button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-200/50 to-transparent rounded-bl-3xl"></div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800">50+</h4>
              <p className="text-gray-600">Events Organized</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800">2000+</h4>
              <p className="text-gray-600">Happy Attendees</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800">15+</h4>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800">98%</h4>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to Plan Your Next Event?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create something extraordinary together. Your dream event is just one click away.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2U0Eno08Q7gM_X7F_06sudsPf5y6-OKWtT1yB3G9Iqdiwdw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us Now
                <Heart className="w-5 h-5 ml-2" />
              </a>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-30 translate-y-30"></div>
          </div>
        </div>
      </div>
    </div>
    <Testimonial />
    <Footer />        
    </> 
  );
};

export default PortfolioSection;