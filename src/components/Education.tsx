import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
}

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor of AI & DS",
    institution: "Karunya University",
    location: "Coimbatore, Tamil Nadu",
    duration: "2022 - Present"
  },
  {
    degree: "High School",
    institution: "Silver Jublee Hr Sec School",
    location: "Mayiladuthurai, Tamil Nadu",
    duration: "2020 - 2022"
  }
];

const Education: React.FC = () => {
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
    <section id="education" className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="card"
              variants={itemVariants}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      {item.duration}
                    </p>
                  </div>
                </div>
                
                <div className="mt-2">
                  <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                    {item.institution}
                  </h4>
                  <div className="flex items-center mt-2 text-neutral-600 dark:text-neutral-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;