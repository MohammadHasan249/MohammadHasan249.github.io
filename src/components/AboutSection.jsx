import React from "react";
import { motion } from "framer-motion";
import { User, Download, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

export const AboutSection = ({
  title = "About Me",
  subtitle = "Get to know me better",
  imageSrc = "/portfolio/images/avatar.png",
  bio = "Hey, I'm a web developer and software engineer who loves building cool, useful stuff with code. I actually got into programming through Minecraft—modding servers and writing plugins was my gateway into the world of software. That curiosity never left, and it eventually grew into a full-blown career.",
  longBio = [
    "Right now, I work at SideFX Software, where I focus on creating internal tools, automating processes, and making systems that just work better for everyone. I enjoy solving real problems with clean, scalable solutions, and I’m always thinking about how to make things more efficient or user-friendly.",
    "I'm big on modern technologies — Next.js, AWS, that whole stack — and I’ve worked across a bunch of different areas: from building web apps and business tools to game development and everything in between. I like fast feedback loops, shipping things that matter, and constantly learning along the way.",
    "Outside of work, I’m usually exploring new tech, building side projects, contributing to open-source, or chasing down ideas that could turn into something bigger. I'm always up for a challenge, especially when it blurs the line between creativity and code."
  ],
  skills = [
    "Python", "Java", "C#", "JavaScript", "HTML/CSS", "SQL", "Next.js",
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
                  className="text-base text-[17px] leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            <div className="bg-white/5 border border-[#52B2CF]/20 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Want to work together?</h3>
              <p className="text-muted-foreground mb-4">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              <motion.button 
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-flex items-center gap-1.5 text-[#52B2CF] font-medium cursor-pointer bg-transparent border-none"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </motion.button>
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
  skills: PropTypes.arrayOf(PropTypes.string)
}; 