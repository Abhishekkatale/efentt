import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const pageTransition = {
  type: "spring",
  stiffness: 50,
  damping: 20,
};

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-700 min-h-screen">
      <Header />
      <motion.div
        className="container mx-auto px-4 py-8 lg:px-8 lg:py-12 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1 className="text-4xl font-bold mb-6 mt-12 text-center lg:text-5xl py-12 lg:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
          Terms of Service
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Welcome to efent. These Terms of Service ("Terms") govern your use of our website and services...
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. Services Provided</h2>
          <ul className="list-disc pl-6 text-lg space-y-2 text-gray-600">
            <li>Event planning for weddings, corporate events, and parties.</li>
            <li>Venue selection and booking.</li>
            <li>Event design and decoration services.</li>
            <li>Catering and entertainment arrangements.</li>
            <li>Professional event coordination and management.</li>
            <li>Event marketing and promotion services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 text-lg space-y-2 text-gray-600">
            <li><strong>Eligibility:</strong> You must be at least 18 years old...</li>
            <li><strong>Account Security:</strong> You are responsible for maintaining...</li>
            <li><strong>Use of Services:</strong> You agree to use our services only for lawful purposes...</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. Booking and Payment</h2>
          <ul className="list-disc pl-6 text-lg space-y-2 text-gray-600">
            <li><strong>Booking:</strong> Bookings must be made through our website or support.</li>
            <li><strong>Payment:</strong> Payment for services must be completed...</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">5. Cancellation and Refunds</h2>
          <ul className="list-disc pl-6 text-lg space-y-2 text-gray-600">
            <li><strong>Cancellation Policy:</strong> Notify us 24 hours in advance...</li>
            <li><strong>Refunds:</strong> Refunds are processed according to our policy...</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            efent is not liable for any indirect, incidental, or consequential damages...
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">7. Intellectual Property</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            All content on our website is the property of efent or its licensors...
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">8. Privacy Policy</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We are committed to protecting your privacy. Our Privacy Policy explains how...
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">9. Modifications to Terms</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            efent may modify these Terms anytime. Continued use implies acceptance of changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            These Terms are governed by the laws of India. Jurisdiction lies in Pune, Maharashtra.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            For any questions or concerns, reach out to us:
          </p>
          <ul className="list-none pl-0 text-lg text-gray-600 space-y-1">
            <li>Email: <a href="mailto:info.efent@gmail.com" className="text-orange-500 hover:underline">info.efent@gmail.com</a></li>
            <li>Phone: <a href="tel:+917875717213" className="text-orange-500 hover:underline">+91 7875717213</a></li>
            <li>WhatsApp: <a href="https://wa.me/917875717213" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">Chat with us</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">12. Acknowledgement</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            By using our website, you acknowledge and agree to these Terms of Service.
          </p>
        </section>
      </motion.div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
