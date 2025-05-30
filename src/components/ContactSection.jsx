import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, ExternalLink, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import PropTypes from "prop-types";

export const ContactSection = ({
  title = "Get In Touch",
  subtitle = "Let's work together",
  email = "mohdhasan.mah@gmail.com",
  location = "Toronto, ON",
  socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mohdhasan249",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/mohammadhasan249",
      icon: <Github className="w-5 h-5" />,
    },
  ]
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        subject: formData.subject,
        message: formData.message,
        to_email: email, // Your email address
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="pt-16 md:pt-24" style={{backgroundColor: 'rgba(51, 60, 70, 0.2)'}}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-balance text-4xl font-semibold lg:text-5xl"
            style={{color: '#ffffff'}}
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg font-semibold max-w-2xl mx-auto"
            style={{color: '#52B2CF'}}
          >
            {subtitle}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{color: '#ffffff'}}>Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#52B2CF]/10 flex items-center justify-center border border-[#52B2CF]/20">
                    <Mail className="w-5 h-5 text-[#52B2CF]" />
                  </div>
                  <div>
                    <p className="text-sm" style={{color: '#9ca3af'}}>Email</p>
                    <a 
                      href={`mailto:${email}`} 
                      className="text-lg transition-colors"
                      style={{color: '#ffffff'}}
                      onMouseEnter={(e) => e.target.style.color = '#52B2CF'}
                      onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                    >
                      {email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#52B2CF]/10 flex items-center justify-center border border-[#52B2CF]/20">
                    <MapPin className="w-5 h-5 text-[#52B2CF]" />
                  </div>
                  <div>
                    <p className="text-sm" style={{color: '#9ca3af'}}>Location</p>
                    <p className="text-lg" style={{color: '#ffffff'}}>{location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{color: '#ffffff'}}>Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-[#52B2CF]/20 flex items-center justify-center text-[#52B2CF] transition-all"
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#52B2CF';
                      e.target.style.color = '#ffffff';
                      e.target.style.borderColor = 'transparent';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.color = '#52B2CF';
                      e.target.style.borderColor = 'rgba(82, 178, 207, 0.2)';
                    }}
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-[#52B2CF]/20 rounded-lg p-8 shadow-lg"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}
          >
            <h3 className="text-2xl font-semibold mb-6" style={{color: '#ffffff'}}>Send me a message</h3>
            
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-500' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-500'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or email me directly.</span>
                  </>
                )}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{color: '#ffffff'}}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#52B2CF]/20 rounded-md focus:border-[#52B2CF] focus:outline-none focus:ring-1 focus:ring-[#52B2CF] transition-colors"
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff'}}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{color: '#ffffff'}}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#52B2CF]/20 rounded-md focus:border-[#52B2CF] focus:outline-none focus:ring-1 focus:ring-[#52B2CF] transition-colors"
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff'}}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1.5" style={{color: '#ffffff'}}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#52B2CF]/20 rounded-md focus:border-[#52B2CF] focus:outline-none focus:ring-1 focus:ring-[#52B2CF] transition-colors"
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff'}}
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{color: '#ffffff'}}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#52B2CF]/20 rounded-md focus:border-[#52B2CF] focus:outline-none focus:ring-1 focus:ring-[#52B2CF] transition-colors resize-none"
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff'}}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-md font-medium transition-colors"
                style={{
                  backgroundColor: isSubmitting ? 'rgba(82, 178, 207, 0.5)' : '#52B2CF',
                  color: '#ffffff',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.target.style.backgroundColor = '#3e9bb8';
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.target.style.backgroundColor = '#52B2CF';
                }}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 pb-4 border-t border-[#52B2CF]/10"
        >
          <div className="text-center">
            <p className="text-sm" style={{color: '#9ca3af'}}>
              © {new Date().getFullYear()} Mohammad Hasan. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

ContactSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
}; 