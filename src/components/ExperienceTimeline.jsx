import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, ArrowRight, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

const TimelineItem = ({ year, title, organization, description, type, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = type === "education" ? GraduationCap : Briefcase;
  const isEven = index % 2 === 0;
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className={`flex items-center mb-16 last:mb-0 relative ${isEven ? 'justify-start' : 'justify-end'}`}>
      {/* Content box */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`w-[calc(50%-30px)] bg-white/5 border border-[#52B2CF]/20 rounded-lg shadow-lg relative cursor-pointer group`}
        onClick={toggleExpand}
      >
        {/* Arrow pointing to timeline */}
        <div 
          className={`absolute top-1/2 -mt-10 w-4 h-4 rotate-45 border-t border-r border-[#52B2CF]/20 bg-white/5 ${
            isEven ? 'right-[-8px]' : 'left-[-8px] rotate-[225deg]'
          }`}
        ></div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#52B2CF]/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#52B2CF]" />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#52B2CF]" />
              <span className="text-sm font-medium text-[#52B2CF]">{year}</span>
            </div>
            <motion.div 
              className="ml-auto" 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4 text-[#52B2CF]/70 group-hover:text-[#52B2CF]" />
            </motion.div>
          </div>
          
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <h4 className="text-lg text-muted-foreground mb-2">{organization}</h4>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-2 border-t border-[#52B2CF]/10 mt-2">
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      {/* Center dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#52B2CF] z-10 flex items-center justify-center"
      >
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </motion.div>
    </div>
  );
};

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["work", "education"]).isRequired,
  index: PropTypes.number.isRequired
};

export const ExperienceTimeline = ({
  title = "My Experience",
  subtitle = "A chronological journey through my professional career and education",
  experiences = [
    {
      year: "2022 - Present",
      title: "Senior Frontend Developer",
      organization: "Tech Innovations Inc.",
      description: "Leading the frontend development team in creating responsive, accessible web applications using React and Next.js. Implemented performance optimization strategies resulting in 40% faster load times.",
      type: "work"
    },
    {
      year: "2020 - 2022",
      title: "UI/UX Developer",
      organization: "Digital Solutions Ltd.",
      description: "Designed and developed user interfaces for enterprise applications. Collaborated with product managers and designers to implement responsive designs and interactive components.",
      type: "work"
    },
    {
      year: "2018 - 2020",
      title: "Junior Web Developer",
      organization: "Creative Web Agency",
      description: "Developed and maintained client websites using HTML, CSS, and JavaScript. Contributed to the creation of a component library that increased development efficiency by 25%.",
      type: "work"
    },
    {
      year: "2014 - 2018",
      title: "BSc Computer Science",
      organization: "University of Technology",
      description: "Graduated with honors, specializing in web technologies and software engineering. Led a team project that won the university's innovation award.",
      type: "education"
    }
  ],
}) => {
  return (
    <section id="experience" className="py-8 md:py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance text-4xl font-semibold lg:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-[#52B2CF] text-lg font-semibold max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1">
              <ChevronDown className="w-4 h-4" /> Click on any entry to view details
            </span>
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#52B2CF] to-[#52B2CF]/20"></div>
          
          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                index={index}
                year={exp.year}
                title={exp.title}
                organization={exp.organization}
                description={exp.description}
                type={exp.type}
              />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex justify-center relative z-10"
          >
            <a 
              href="/Mohammad_Hasan_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#52B2CF] hover:underline font-medium bg-black/30 px-4 py-2 rounded-full"
            >
              View Full Resume <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

ExperienceTimeline.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["work", "education"]).isRequired,
    })
  ),
}; 