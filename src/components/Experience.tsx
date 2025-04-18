import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Chief Financial Officer",
    company: "Wonder Workers | Karunya University",
    location: "    Coimbatore",
    duration: " Sep 2023 - Present",
    description: [
      "Co-founded a Digital Marketing Startup in collaboration with Karunya University.",
      "Managing financial accounts, profits, and losses while overseeing business operations.",
      "Sub-Editor for company content and played a key role in strategic decision-making."
    ]
  },
  {
    title: "AI & IoT Project Developer",
    company: "Karunya University",
    location: "Coimbatore",
    duration: "Feb 2023 - Present",
    description: [
      "Human-Elephant Conflict Detection System using OpenCV, TensorFlow, and IoT sensors.",
      "Smart IoT-Based Vending Machine integrated with a web-based inventory system.",
      "Raspberry Pi Network Routing project using OpenWrt for wireless connectivity."
    ]
  },
  {
    title: "Data Scientist",
    company: "Tech vaseegrah",
    location: "Tanjore",
    duration: "May 2024 - Jun 2024",
    description: [
      "Developed a Product Recommendation Engine for Vaseegrah Veda, an e-commerce platform, using AI-based recommendation algorithms.",
      "Implemented rule-based and sales-driven filtering techniques to suggest relevant products by removing previously purchased items and highlighting top-selling products."
    ]
  }
];

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="card relative pl-12 md:pl-0"
              variants={itemVariants}
            >
              <div className="md:grid md:grid-cols-8 md:gap-8">
                <div className="md:col-span-2 mb-4 md:mb-0">
                  <div className="flex items-center text-primary-600 dark:text-primary-400 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {exp.location}
                  </div>
                </div>
                
                <div className="md:col-span-6">
                  <div className="absolute top-6 left-4 md:relative md:top-0 md:left-0">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 items-center justify-center text-primary-600 dark:text-primary-400">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="md:hidden h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/30 items-center justify-center text-primary-600 dark:text-primary-400 flex">
                      <Briefcase className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-4">
                    {exp.company}
                  </h4>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                        <p className="text-neutral-700 dark:text-neutral-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;