import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiGlobe, 
  FiCpu,
  FiSmartphone,
  FiServer
} from 'react-icons/fi';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: { y: 0, opacity: 1, scale: 1 }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: FiGlobe,
      skills: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      color: "primary"
    },
    {
      title: "Backend",
      icon: FiServer,
      skills: ["Node.js", "Express.js", "RESTful APIs"],
      color: "secondary"
    },
    {
      title: "Database",
      icon: FiDatabase,
      skills: ["MongoDB", "MySQL"],
      color: "accent"
    },
    {
      title: "Programming",
      icon: FiCode,
      skills: ["Python", "Java", "C"],
      color: "success"
    },
    {
      title: "AI/ML",
      icon: FiCpu,
      skills: ["NLP", "Transformers", "Machine Learning"],
      color: "secondary"
    },
    {
      title: "Mobile",
      icon: FiSmartphone,
      skills: ["Kotlin"],
      color: "primary"
    }
  ];

  const allSkills = [
    "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", 
    "JavaScript", "Python", "Java", "C", "NLP", "Transformers", "Kotlin"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-card-hover">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="hero-text">Skills</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
          </motion.div>

          {/* Skills Categories Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="card-glow p-8 rounded-2xl text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-${category.color} rounded-full mb-6 shadow-glow group-hover:shadow-glow-secondary transition-all duration-300`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-pill px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* All Skills Pills */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="skill-pill px-6 py-3 rounded-full font-semibold cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 2,
                }}
                className={`absolute w-20 h-20 bg-gradient-primary rounded-full opacity-5`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;