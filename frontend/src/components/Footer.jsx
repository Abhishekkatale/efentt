import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/logoo.svg';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/share/18PJ6VMqwE/", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com/EFENT", label: "Twitter" },
    { icon: FaInstagram, href: "https://www.instagram.com/efent_event_planners/", label: "Instagram" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/EFENT", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Top Grid Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={logo}
                  alt="Efent Logo"
                  className="w-20 sm:w-24 h-auto object-contain"
                />
              </div>
            </motion.div>

            <p className="text-gray-800 leading-relaxed mb-8 max-w-md">
              We are a leading event management company specializing in creating unforgettable experiences.
              From corporate events to exhibitions, we bring your visions to life with creativity and precision.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-white" />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Get In Touch</h3>
            <div className="space-y-4 text-gray-800">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <p>Manjari BK, Pune, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-500" />
                <a href="mailto:info.efent@gmail.com" className="hover:text-orange-500">info.efent@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-orange-500" />
                <a href="tel:+919325555711" className="hover:text-orange-500">+91 9325555711</a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          className="relative mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="h-px bg-gray-200" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full" />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>© 2024 Efent. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="/terms-and-conditions" className="hover:text-orange-500">Terms of Service</a>
              <span>•</span>
              <a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a>
            </div>
          </div>

          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>by</span>
            <a
              href="https://musitech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-800 hover:text-orange-400 font-medium transition-colors"
            >
              MusiTech
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
