import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, Code, Download, Mail } from 'lucide-react';
import { profileImageUrl } from '../assets/profileImg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-16 relative flex items-center">
      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white mb-4">
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              Hariharan
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-medium text-neutral-700 dark:text-neutral-300 mb-6">
            AI & Data Engineer
          </h2>
          
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg">
            Third-year B.Tech student specializing in AI DS at Karunya Institute of Technology and Sciences,
            passionate about full‑stack development, algorithms, and machine learning.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn btn-primary"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
            <a
              href="#experience"
              className="btn btn-secondary"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View Experience
            </a>
          </div>
          
          <div className="mt-12 flex items-center text-neutral-600 dark:text-neutral-400">
            <ArrowDown className="h-5 w-5 mr-2 animate-bounce" />
            <span>Scroll down to learn more</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur opacity-30 animate-cursor-blob"></div>
            <div className="relative overflow-hidden h-72 w-72 sm:h-80 sm:w-80 rounded-full border-4 border-white dark:border-neutral-800 shadow-lg">
              <img
                src={profileImageUrl}
                alt="Hariharan Krishnamoorthy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;