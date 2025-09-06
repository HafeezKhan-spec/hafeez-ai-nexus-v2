import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { useToast } from '@/hooks/use-toast';
import contactRobot from '../assets/contact-robot.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use Express.js server endpoint
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'hk3865799@gmail.com',
      href: 'mailto:hk3865799@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 81253 03881',
      href: 'tel:+918125303881'
    },
    {
      icon: FiMapPin,
      label: 'Availability',
      value: 'Open to internships, freelance, collaborations',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-card-hover">
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
              Get In <span className="hero-text">Touch</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's create something amazing together!
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card-glow p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <FiMessageSquare className="text-primary" />
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-text-secondary font-medium mb-2">
                      <FiUser className="inline mr-2" size={16} />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background text-text-primary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary font-medium mb-2">
                      <FiMail className="inline mr-2" size={16} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background text-text-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary font-medium mb-2">
                      <FiMessageSquare className="inline mr-2" size={16} />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background text-text-primary resize-none"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full btn-gradient py-4 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiSend size={18} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Robot */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Robot Image */}
              <div className="text-center">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-glow-secondary mb-6"
                >
                  <img 
                    src={contactRobot} 
                    alt="Contact Robot" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <p className="text-text-muted italic">
                  "Let's build the future together! 🤖"
                </p>
              </div>

              {/* Contact Information */}
              <div className="card-glow p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-text-muted text-sm">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-text-primary font-medium hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-text-primary font-medium">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Availability Status */}
                <div className="mt-8 p-4 bg-gradient-secondary rounded-lg text-center">
                  <div className="text-white font-semibold mb-2">
                    🚀 Currently Available
                  </div>
                  <div className="text-white/90 text-sm">
                    Ready for new opportunities and exciting projects!
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;