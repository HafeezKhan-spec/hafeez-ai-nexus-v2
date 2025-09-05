import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/HafeezKhan-spec', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hafeez-khan-ba8970317/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:hk3865799@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-text-primary via-text-secondary to-text-primary text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 1.5,
            }}
            className="absolute w-4 h-4 bg-white/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="hero-text text-2xl font-bold mb-4">
              Mohammad Hafeez Khan
            </div>
            <p className="text-white/80 mb-4">
              Software & AI Engineer passionate about creating innovative solutions 
              with modern technologies and artificial intelligence.
            </p>
            <div className="flex gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">MERN Stack</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">AI/ML</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">NLP</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full text-white/80 hover:text-white hover:underline transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <div className="text-white/80 text-sm">
              <div>hk3865799@gmail.com</div>
              <div>+91 81253 03881</div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/80 text-sm flex items-center gap-2"
          >
            © {currentYear} Mohammad Hafeez Khan • Built with 
            <FiHeart className="text-red-400" size={14} /> 
            using React & Tailwind CSS
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="btn-outline-gradient px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 text-white border-white/30 hover:bg-white hover:text-text-primary transition-all duration-300"
          >
            <FiArrowUp size={16} />
            Back to Top
          </motion.button>
        </div>

        {/* Animated Gradient Line */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"
          style={{
            backgroundSize: '200% 200%',
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;