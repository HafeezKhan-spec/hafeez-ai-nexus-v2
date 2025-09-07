import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import heroRobot from '../assets/hero-robot.jpg';
import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="w-40 h-40 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                <img 
                  src={profilePhoto} 
                  alt="Mohammad Hafeez Khan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="hero-text block lg:inline">
                Mohammad Hafeez Khan
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Software & AI Engineer • MERN Stack • NLP & Transformers
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/HafeezKhan-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient px-8 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold"
              >
                <FiGithub size={20} />
                GitHub
              </a>
              
              <a
                href="https://www.linkedin.com/in/hafeez-khan-ba8970317/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gradient px-8 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold"
              >
                <FiLinkedin size={20} />
                LinkedIn
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <button className="text-primary hover:text-primary-dark transition-colors duration-300 flex items-center gap-2 mx-auto lg:mx-0">
                <FiDownload size={18} />
                Download Resume
              </button>
            </motion.div>
          </div>

          {/* Right Content - Robot Animation */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-glow pulse-glow"
              >
                <img 
                  src={heroRobot} 
                  alt="AI Robot" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -15, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow"
              >
                AI
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, -25, 0],
                  y: [0, 20, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold shadow-glow-secondary"
              >
                ML
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
