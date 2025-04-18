import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { profileImageUrl } from '../assets/profileImg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-30"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={profileImageUrl}
                  alt="Hariharan Krishnamoorthy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
              Hariharan Krishnamoorthy
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              As a Third‑year B.Tech student specializing in AI DS at Karunya Institute of 
              Technology and Sciences, I am passionate about full‑stack web development, 
              algorithms, and machine learning. With a keen interest in advancing technologies, 
              I am actively seeking opportunities in Machine Learning, Data Engineering, and 
              Python Development roles to apply my skills and contribute to innovative projects.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3" />
                <span className="text-neutral-700 dark:text-neutral-300">Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3" />
                <a href="mailto:haranh503@gmail.com" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400">
                  haranh503@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3" />
                <a href="tel:+917092003788" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400">
                  +91 7092003788
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3" />
                <a
                  href="https://in.linkedin.com/in/hari-haran-k-08a8a1249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <a
              href="https://hariharan1476.github.io/web-certificates/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Certifications
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;