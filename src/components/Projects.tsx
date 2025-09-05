import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiClock, FiCode } from 'react-icons/fi';

const Projects = () => {
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

  const projects = [
    {
      title: "Language Translation App",
      description: "Advanced AI-powered language translation application using modern NLP models. Features real-time translation, multiple language support, and intuitive user interface.",
      technologies: ["React.js", "Node.js", "NLP", "Transformers", "Express.js"],
      liveUrl: "https://language-translation-seven.vercel.app/",
      githubUrl: "https://github.com/HafeezKhan-spec/language-translation-backend",
      status: "Live",
      gradient: "gradient-primary"
    },
    {
      title: "Smart Voting App",
      description: "Secure and transparent digital voting platform with advanced authentication, real-time results, and comprehensive admin dashboard for election management.",
      technologies: ["React.js", "Node.js", "MongoDB", "JWT", "Express.js"],
      liveUrl: null,
      githubUrl: null,
      status: "Coming Soon",
      gradient: "gradient-secondary"
    },
    {
      title: "Inventory Management Website",
      description: "Comprehensive inventory management system with automated tracking, analytics dashboard, supplier management, and real-time stock monitoring.",
      technologies: ["MERN Stack", "MySQL", "Charts.js", "RESTful APIs"],
      liveUrl: null,
      githubUrl: null,
      status: "Coming Soon",
      gradient: "gradient-hero"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Featured <span className="hero-text">Projects</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Showcasing my expertise through innovative and impactful solutions
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-glow rounded-2xl overflow-hidden group relative"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-success text-success-foreground' 
                      : 'bg-warning text-warning-foreground'
                  } flex items-center gap-1`}>
                    {project.status === 'Live' ? <FiExternalLink size={12} /> : <FiClock size={12} />}
                    {project.status}
                  </div>
                </div>

                {/* Project Header */}
                <div className={`h-32 bg-${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                  </div>
                  {/* Animated Code Icon */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 left-4 text-white/70"
                  >
                    <FiCode size={24} />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gradient px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold flex-1 justify-center"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <div className="btn-outline-gradient px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold flex-1 justify-center opacity-50 cursor-not-allowed">
                        <FiClock size={16} />
                        Coming Soon
                      </div>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-gradient px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold"
                      >
                        <FiGithub size={16} />
                        Code
                      </a>
                    ) : (
                      <div className="btn-outline-gradient px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold opacity-50 cursor-not-allowed">
                        <FiGithub size={16} />
                        Soon
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="card-glow p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Interested in My Work?
              </h3>
              <p className="text-text-secondary mb-6">
                I'm always working on new projects and exploring innovative solutions. 
                Let's connect and discuss potential collaborations!
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gradient px-8 py-3 rounded-lg font-semibold"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;