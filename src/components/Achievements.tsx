import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface AchievementItem {
  title: string;
  description: string;
}

const achievements: AchievementItem[] = [
  {
    title: "1st Place – Mindkraft 2022",
    description: "Technical Symposium - Paper Presentation at Karunya Deemed University, Coimbatore"
  },
  {
    title: "2nd Place – Colors 2022",
    description: "Paper Presentation at SNS College of Engineering, Coimbatore"
  },
  {
    title: "2nd Place – BARNSTRONGZ",
    description: "Technical competition for innovation and problem-solving"
  }
];

const Achievements: React.FC = () => {
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
    <section id="achievements" className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((item, index) => (
            <motion.div 
              key={index} 
              className="card h-full"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Award className="h-8 w-8" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-center text-neutral-900 dark:text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-center text-neutral-700 dark:text-neutral-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="hariharan1476.github.io/web-certificates/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex"
          >
            <Award className="mr-2 h-5 w-5" />
            View Certificates
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;