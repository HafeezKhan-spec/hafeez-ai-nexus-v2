import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiZap, FiTarget } from 'react-icons/fi';

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const stats = [
    { icon: FiCode, label: 'Projects Completed', value: '15+' },
    { icon: FiCpu, label: 'AI Models Trained', value: '8+' },
    { icon: FiZap, label: 'Technologies Mastered', value: '12+' },
    { icon: FiTarget, label: 'Years Experience', value: '2+' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
              About <span className="hero-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <div className="card-glow p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Passionate AI & Software Engineer
                </h3>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I'm a dedicated Software and AI Engineer with a strong focus on the MERN stack 
                    and cutting-edge Natural Language Processing technologies. My passion lies in 
                    creating intelligent applications that solve real-world problems.
                  </p>
                  <p>
                    With expertise in modern web development and machine learning, I specialize in 
                    building scalable applications using React.js, Node.js, and MongoDB, while 
                    integrating advanced AI capabilities through transformers and NLP models.
                  </p>
                  <p>
                    I'm constantly learning and adapting to new technologies, always seeking 
                    opportunities to push the boundaries of what's possible with AI and web development.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full font-semibold">
                    Full-Stack Development
                  </div>
                  <div className="bg-gradient-secondary text-white px-4 py-2 rounded-full font-semibold">
                    Machine Learning
                  </div>
                  <div className="btn-outline-gradient px-4 py-2 rounded-full font-semibold">
                    NLP Specialist
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="card-glow p-6 rounded-xl text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-text-muted text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-gradient-card rounded-xl border border-primary/20"
              >
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  Current Focus
                </h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Advanced Transformer Models
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Scalable MERN Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    AI-Powered Web Solutions
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;