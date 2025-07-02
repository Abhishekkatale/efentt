import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Heart, Star, MessageCircle, Clock, Users, Award } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white py-20 pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5 text-white mr-2" />
            <span className="text-white font-medium">Let's Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to create something amazing together? We'd love to hear about your event ideas and make them come to life.
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM-6PM</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600">hello@efent.com</p>
                <p className="text-sm text-gray-500 mt-1">We reply within 24hrs</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Pune, Maharashtra, India</p>
              
              {/* Map */}
              <div className="w-full h-64 rounded-xl overflow-hidden">
                <iframe
                  title="map"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.4282009625276!2d73.97784724831581!3d18.521207026901166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3fb1fc036eb%3A0xc2e536848ae419bc!2sEfent%20Event%20Planner!5e1!3m2!1sen!2sin!4v1739084712843!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Fun Stats */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm opacity-90">Support</p>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">2000+</p>
                  <p className="text-sm opacity-90">Happy Clients</p>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm opacity-90">Events Done</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h2>
              <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Full Name"
                  className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 p-4 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 outline-none"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email Address"
                  className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 p-4 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 outline-none"
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 p-4 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 outline-none"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your event ideas..."
                  rows="5"
                  className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 p-4 rounded-xl focus:border-purple-500 focus:bg-white transition-all duration-300 outline-none resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm mb-4">Or reach out directly through our form</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2U0Eno08Q7gM_X7F_06sudsPf5y6-OKWtT1yB3G9Iqdiwdw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-full hover:from-orange-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Quick Contact Form
                <Heart className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What Our Clients Say</h3>
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 italic mb-4">"Amazing team! They made our wedding absolutely perfect. Every detail was handled with care."</p>
              <p className="font-semibold text-gray-800">- Priya & Raj</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 italic mb-4">"Professional, creative, and reliable. Our corporate event was a huge success thanks to them!"</p>
              <p className="font-semibold text-gray-800">- Tech Solutions Ltd.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 italic mb-4">"From planning to execution, everything was flawless. Highly recommend for any event!"</p>
              <p className="font-semibold text-gray-800">- Amit Sharma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </> 
  );
};

export default ContactUs;