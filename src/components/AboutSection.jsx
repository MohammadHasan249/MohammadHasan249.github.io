import React from "react";
import { motion } from "framer-motion";
import { User, Mail, MapPin, Download, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

export const AboutSection = ({
  title = "About Me",
  subtitle = "Get to know me better",
  imageSrc = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&h=1925",
  bio = "I'm a passionate web developer and software engineer with a strong foundation in computer science and practical experience in modern development technologies. Currently working as a Web Developer at SideFX Software Inc., I specialize in developing anti-piracy tools, automating licensing processes, and building internal tools that streamline business operations.",
  longBio = [
    "My journey in software development began during my studies at the University of Toronto, where I earned a Bachelor of Science with a Specialist in Computer Science. My coursework included Data Structures & Algorithms, Full-Stack Web Development, Neural Networks & Deep Learning, and Video Game Design, giving me a well-rounded foundation in both theoretical and practical aspects of computer science.",
    "I have extensive experience across the full technology stack, with expertise in Python, Java, C#, JavaScript, and modern frameworks like React, Django, and Unity. My professional experience spans web development, game development, and enterprise software solutions. I've successfully delivered projects ranging from anti-piracy tools that increased IP protection by 20% to 2D games that launched 3 weeks ahead of schedule.",
    "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and solving complex problems that make a real impact. I'm constantly learning and evolving as a developer, always eager to take on new challenges that push the boundaries of what's possible with technology."
  ],
  contactInfo = {
    email: "mohdhasan.mah@gmail.com",
    location: "Toronto, ON"
  },
  skills = [
    "Python", "Java", "C#", "JavaScript", "HTML/CSS", "SQL", 
    "React", "Node.js", "Django", "Flask", "Unity", "Angular", "Vue",
    "PostgreSQL", "MongoDB", "Git", "AWS", "TensorFlow", "PyTorch"
  ]
}) => {
  return (
    <section id="about" className="py-16 md:py-24">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image & Quick Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-20 space-y-8"
          >
            
            <div className="bg-white/5 border border-[#52B2CF]/20 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-[#52B2CF]" /> Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-sm px-3 py-1 rounded-full bg-[#52B2CF]/10 text-[#52B2CF] border border-[#52B2CF]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <motion.a
              href="/portfolio/Mohammad_Hasan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#52B2CF] text-white py-3 rounded-lg font-medium hover:bg-[#3e9bb8] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" /> Download Resume
            </motion.a>
          </motion.div>
          
          {/* Bio Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="text-xl leading-relaxed text-muted-foreground">{bio}</div>
            
            <div className="space-y-6">
              {longBio.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="text-base leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            <div className="bg-white/5 border border-[#52B2CF]/20 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Want to work together?</h3>
              <p className="text-muted-foreground mb-4">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              <motion.a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 text-[#52B2CF] font-medium hover:underline"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  bio: PropTypes.string,
  longBio: PropTypes.arrayOf(PropTypes.string),
  contactInfo: PropTypes.shape({
    email: PropTypes.string,
    location: PropTypes.string
  }),
  skills: PropTypes.arrayOf(PropTypes.string)
}; 