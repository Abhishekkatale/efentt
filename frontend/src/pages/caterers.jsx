import React, { useState } from 'react';
import { Heart, Star, MapPin, Phone, Mail, Calendar, Award, Users } from 'lucide-react';
import Header from '../components/Header';  
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const VendorPlannerCard = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  const vendors = [
    {
      id: 1,
      image: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/008/788/472/new_medium/pp-1000020584.jpg?1731574498",
      tag: 'Most Preferred',
      name: 'BMT Events & Hospitality',
      location: 'Jaipur, Rajasthan',
      rating: 5.0,
      reviews: 204,
      startingPrice: '₹10,00,000',
      specialty: 'Luxury Weddings',
      experience: '8+ Years',
      badge: 'Premium'
    },
    {
      id: 2,
      image: 'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/003/335/551/new_medium/mini_magick20220222-21896-1w3xwgn.jpg?1645531005',
      tag: 'Most Preferred',
      name: 'Wedding Bliss',
      location: 'Bhubaneswar, Odisha',
      rating: 5.0,
      reviews: 15,
      startingPrice: '₹1,00,000',
      specialty: 'Traditional Ceremonies',
      experience: '5+ Years',
      badge: 'Rising Star'
    },
    {
      id: 3,
      image: 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/008/750/088/new_medium/pp-5.jpg?1729082346',
      tag: 'Most Preferred',
      name: 'Cherish Makers',
      location: 'Chepauk, Chennai',
      rating: 4.5,
      reviews: 8,
      startingPrice: '₹10,00,000',
      specialty: 'Destination Weddings',
      experience: '6+ Years',
      badge: 'Trending'
    },
    {
  id: 4,
  image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tag: 'Most Preferred',
  name: 'Royal Dream Events',
  location: 'Udaipur, Rajasthan',
  rating: 4.9,
  reviews: 156,
  startingPrice: '₹15,00,000',
  specialty: 'Palace Weddings',
  experience: '10+ Years',
  badge: 'Luxury Elite'
},
{
  id: 5,
  image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
  tag: 'Editor\'s Choice',
  name: 'Elegant Celebrations',
  location: 'Goa, India',
  rating: 4.8,
  reviews: 89,
  startingPrice: '₹8,00,000',
  specialty: 'Beach Weddings',
  experience: '7+ Years',
  badge: 'Destination Expert'
},
{
  id: 6,
  image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  tag: 'Trending Now',
  name: 'Mystic Garden Events',
  location: 'Kerala, India',
  rating: 4.7,
  reviews: 67,
  startingPrice: '₹12,00,000',
  specialty: 'Garden Weddings',
  experience: '9+ Years',
  badge: 'Eco-Friendly'
},
  ];

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Premium': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Rising Star': return 'bg-gradient-to-r from-emerald-400 to-cyan-400';
      case 'Trending': return 'bg-gradient-to-r from-orange-400 to-red-400';
      default: return 'bg-gradient-to-r from-blue-400 to-purple-400';
    }
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-100 py-20 ">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg">
            <Award className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Verified Wedding Planners</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Dream Wedding Caterers
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover exceptional wedding planners who will transform your special day into an unforgettable celebration of love
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>20,657+ Planners</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              onMouseEnter={() => setHoveredCard(vendor.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className={`${getBadgeColor(vendor.badge)} text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg backdrop-blur-sm`}>
                    {vendor.badge}
                  </span>
                  
                  <button
                    onClick={() => toggleFavorite(vendor.id)}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 transform hover:scale-110"
                  >
                    <Heart 
                      className={`w-4 h-4 transition-colors duration-200 ${
                        favorites.has(vendor.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                      }`} 
                    />
                  </button>
                </div>

                {/* Specialty Tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    {vendor.specialty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors duration-200">
                    {vendor.name}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{vendor.location}</span>
                  </div>
                </div>

                {/* Rating & Experience */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-yellow-600">{vendor.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({vendor.reviews} reviews)</span>
                  </div>
                  <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-lg">
                    {vendor.experience}
                  </span>
                </div>

                {/* Price */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-800">{vendor.startingPrice}</div>
                  <div className="text-sm text-gray-500">Starting Package</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Enquire</span>
                  </button>
                  
                  <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect Decoration */}
              <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 transform scale-0 group-hover:scale-100`}></div>
            </div>
          ))}
        </div>

       
      </div>
    </div>

    <Footer />
    </> 
  );
};

export default VendorPlannerCard;