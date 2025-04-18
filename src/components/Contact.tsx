import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
            Get in Touch
          </h3>
          
          <p className="text-neutral-700 dark:text-neutral-300 mb-8">
            I'm currently looking for new opportunities in Machine Learning, Data Engineering, 
            and Python Development. If you have any questions or just want to say hi, feel free 
            to reach out to me. I'll try my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400">Email</h4>
                <a href="mailto:haranh503@gmail.com" className="text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
                  haranh503@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400">Phone</h4>
                <a href="tel:+917092003788" className="text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
                  +91 7092003788
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm text-neutral-500 dark:text-neutral-400">Location</h4>
                <p className="text-neutral-900 dark:text-white">
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex space-x-4">
            <a
              href="mailto:haranh503@gmail.com"
              className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800/30 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://in.linkedin.com/in/hari-haran-k-08a8a1249"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800/30 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/hariharan1476"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800/30 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;