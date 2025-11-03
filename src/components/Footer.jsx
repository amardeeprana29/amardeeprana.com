import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-dark border-t border-accent-cyan/20 py-8 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-text-secondary text-center md:text-left font-mono text-sm">
          &copy; 2025 Amardeep Rana. Built with <FaHeart className="inline text-accent-cyan animate-pulse" /> using React & Tailwind
        </p>
        
        <a
          href="#hero"
          className="text-accent-cyan hover:text-accent-blue transition-colors font-mono text-sm font-semibold group"
        >
          <span className="inline-block group-hover:-translate-y-1 transition-transform">↑</span> Back to Top
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
