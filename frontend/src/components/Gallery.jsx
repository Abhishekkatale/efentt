import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaTimes, FaHeart, FaShare, FaCamera } from 'react-icons/fa';

// Placeholder images - replace with your actual imports
const S1 = 'https://res.cloudinary.com/dutlotmmd/image/upload/v1751439345/hkry0qwceed2exnuavfq.jpg';
const S2 = 'https://res.cloudinary.com/dutlotmmd/image/upload/v1751439387/jwwerprwol4hefid1ofz.jpg';
const S3 = 'https://res.cloudinary.com/dutlotmmd/image/upload/v1751439537/sl3c6kd3rsv3vq61onw2.jpg';
const S4 = 'https://res.cloudinary.com/dutlotmmd/image/upload/v1751439520/lypwae6l1twjd4d5jkzu.jpg';
const S5 = 'https://res.cloudinary.com/dutlotmmd/image/upload/v1751439503/tnw31chcptjihhg2redx.jpg';
const S6 = 'https://res.cloudinary.com/dutlotmmd/image/upload/v1751439469/kiwdsfa4tf7rdtquf64m.jpg';

const GalleryImage = ({ image, index, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={`Gallery ${index + 1}`}
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            onClick={() => onClick(index)}
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExpand className="text-xl" />
          </motion.button>
        </div>
        
        {/* Top Right Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart className="text-sm" />
          </motion.button>
          <motion.button
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShare className="text-sm" />
          </motion.button>
        </div>
        
        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center space-x-2">
            <FaCamera className="text-orange-400" />
            <span className="text-sm font-medium">Event Gallery {index + 1}</span>
          </div>
        </div>
      </div>
      
      {/* Card Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10"></div>
    </motion.div>
  );
};

const Modal = ({ image, isOpen, onClose, currentIndex, totalImages, onNext, onPrev }) => {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-orange-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes className="text-3xl" />
        </motion.button>
        
        {/* Image Container */}
        <motion.div
          className="relative max-w-4xl max-h-[80vh] mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image}
            alt="Gallery Modal"
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          />
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
            {currentIndex + 1} / {totalImages}
          </div>
        </motion.div>
        
        {/* Navigation Arrows */}
        <button
          onClick={onPrev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors duration-300"
        >
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            ←
          </div>
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors duration-300"
        >
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            →
          </div>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

const BeautifulGallerySection = () => {
  const images = [S1, S2, S3, S4, S5, S6];
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };
  
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-200/15 to-teal-200/15 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
      
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Amazing</span>
              <br />Work Gallery
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take a peek at some of our most memorable events and celebrations. Each image tells a story of joy, creativity, and unforgettable moments we've helped create.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <GalleryImage
                key={index}
                image={image}
                index={index}
                onClick={openModal}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View More Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <p className="text-gray-500 mt-4 text-sm">
              Want to see your event featured here? Let's create something amazing together!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={closeModal}
        currentIndex={currentIndex}
        totalImages={images.length}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};

export default BeautifulGallerySection;