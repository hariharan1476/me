import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400">Hariharan K</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">AI & Data Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:haranh503@gmail.com" 
              className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+917092003788" 
              className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a 
              href="https://in.linkedin.com/in/hari-haran-k-08a8a1249" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/hariharan1476" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-center text-neutral-600 dark:text-neutral-400">
            © {currentYear} Hariharan Krishnamoorthy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;