import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, ExternalLink, Send } from "lucide-react";
import PropTypes from "prop-types";

export const ContactSection = ({
  title = "Get In Touch",
  subtitle = "Let's work together",
  email = "mohdhasan.mah@gmail.com",
  phone = "+1 (647) 510-0863",
  location = "San Francisco, CA",
  socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mohammadhasan249",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/mohammadhasan249",
      icon: <Github className="w-5 h-5" />,
    },
  ]
}) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/20 dark:bg-black/20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-balance text-4xl font-semibold lg:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-[#52B2CF] text-lg font-semibold max-w-2xl mx-auto"
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
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#52B2CF]/10 flex items-center justify-center border border-[#52B2CF]/20">
                    <Mail className="w-5 h-5 text-[#52B2CF]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href={`mailto:${email}`} 
                      className="text-lg hover:text-[#52B2CF] transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#52B2CF]/10 flex items-center justify-center border border-[#52B2CF]/20">
                    <Phone className="w-5 h-5 text-[#52B2CF]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href={`tel:${phone.replace(/\D/g, '')}`} 
                      className="text-lg hover:text-[#52B2CF] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#52B2CF]/10 flex items-center justify-center border border-[#52B2CF]/20">
                    <MapPin className="w-5 h-5 text-[#52B2CF]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg">{location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-[#52B2CF]/20 flex items-center justify-center text-[#52B2CF] hover:bg-[#52B2CF] hover:text-white hover:border-transparent transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
            className="bg-white/5 border border-[#52B2CF]/20 rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-[#52B2CF]/20 rounded-md focus:border-[#52B2CF] focus:outline-none focus:ring-1 focus:ring-[#52B2CF] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-[#52B2CF]/20 rounded-md focus:border-[#52B2CF] focus:outline-none focus:ring-1 focus:ring-[#52B2CF] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-[#52B2CF]/20 rounded-md focus:border-[#52B2CF] focus:outline-none focus:ring-1 focus:ring-[#52B2CF] transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-[#52B2CF]/20 rounded-md focus:border-[#52B2CF] focus:outline-none focus:ring-1 focus:ring-[#52B2CF] transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
              
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#52B2CF] text-white py-3 px-6 rounded-md font-medium hover:bg-[#3e9bb8] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

ContactSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
}; 