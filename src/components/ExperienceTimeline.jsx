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
    <div className={`flex items-start mb-16 last:mb-0 relative ${isEven ? 'md:justify-start justify-start' : 'md:justify-end justify-start'}`}>
      {/* Content box */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`w-full md:w-[calc(50%-30px)] ml-0 md:ml-0 ${!isEven ? 'md:mr-0' : ''} bg-white/5 border border-[#52B2CF]/20 rounded-lg shadow-lg relative cursor-pointer group`}
        onClick={toggleExpand}
      >
        
        <div className="p-4 md:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#52B2CF]/10 flex items-center justify-center">
              <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#52B2CF]" />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#52B2CF]" />
              <span className="text-xs md:text-sm font-medium text-[#52B2CF]">{year}</span>
            </div>
            <motion.div 
              className="ml-auto" 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4 text-[#52B2CF]/70 group-hover:text-[#52B2CF]" />
            </motion.div>
          </div>
          
          <h3 className="text-lg md:text-xl font-semibold mb-1">{title}</h3>
          <h4 className="text-base md:text-lg text-muted-foreground mb-2">{organization}</h4>
          
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
                  <p className="text-sm md:text-base text-muted-foreground">{description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      {/* Center dot - only visible on desktop */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#52B2CF] z-10 hidden md:flex items-center justify-center"
      >
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></div>
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
      year: "2024 - Present",
      title: "Founder & Lead Developer",
      organization: "Genique",
      description: "Founded and developed Genique, an AI-powered landing page generator that creates beautiful, high-converting pages in minutes. Built the entire platform from concept to launch, implementing advanced AI algorithms for automated design generation, conversion optimization, and user experience enhancement. Successfully serving entrepreneurs and agencies with rapid page creation capabilities.",
      type: "work"
    },
    {
      year: "Oct 2022 - Present",
      title: "Web Developer",
      organization: "SideFX Software Inc.",
      description: "Developed an anti-piracy tool that effectively identified unauthorized use of company's software, Houdini, by both individual and corporate users, directly contributing to a 20% increase in protected intellectual property and enhanced protection. Streamlined Houdini's licensing process by automating installation and deactivation, cutting customer setup time by 50% and significantly improving user experience with more efficient license management. Engineered various internal tools and workflows for development, sales, and customer support teams, which streamlined processes, improved productivity and contributed to enhanced support efficiency. Maintained the company website and gauged user engagement in response to new features, guiding product development and improving customer retention.",
      type: "work"
    },
    {
      year: "Sep 2022 - Feb 2023",
      title: "Frontend Developer",
      organization: "Gifted",
      description: "Developed a Shopify app as a frontend developer to revolutionize the gifting experience for e-commerce stores. Built and integrated a dynamic gifting button that seamlessly injects into store interfaces, opening an intuitive menu for customers to select gifting recipients. Implemented advanced scheduling functionality to automate gift delivery on specified dates, enhancing user experience and increasing customer satisfaction for online retailers.",
      type: "work"
    },
    {
      year: "Jun 2021 - Aug 2022",
      title: "Software Engineer",
      organization: "MetaVision Labs",
      description: "Developed a 2D game in C# and Unity and helped design the vision and implementation of game features. Integrated Smart contracts into the game by developing a REST API that retrieves contract data and updates the game. Created documentation for the entire workflow of the game and the tests, as well as all the previous and potential errors. Developed company website in React and engineered SEO for the website in order to attract visitors. Performed product design role and helped in launching prototype 3 weeks earlier than planned.",
      type: "work"
    },
    {
      year: "May 2021 - Aug 2021",
      title: "Full-Stack Web Developer",
      organization: "CustomerBuds",
      description: "Developed a full-stack website with a landing page and a backend for blog posts, using the Django framework. Conceptualized the design of the website and improved the user experience of the website.",
      type: "work"
    },
    {
      year: "Sep 2020 - Dec 2020",
      title: "Game Developer",
      organization: "HiGarden – The Guardian App",
      description: "Developed a planting simulator game in C# and Unity with a team of seven and worked in an Agile environment to expand and deploy the game. Advanced the game by adding several new levels and managed to significantly decrease the size of the game by 73% by using design techniques such as object pooling.",
      type: "work"
    },
    {
      year: "Sep 2018 - Jan 2022",
      title: "Bachelor of Science, Specialist in Computer Science",
      organization: "University of Toronto",
      description: "Graduated with strong foundation in computer science fundamentals and practical experience in modern development technologies.",
      type: "education"
    }
  ],
}) => {
  return (
    <section id="experience" className="py-8 md:py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold"
            style={{color: '#ffffff'}}
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base md:text-lg font-semibold max-w-2xl mx-auto"
            style={{color: '#52B2CF'}}
          >
            {subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-xs md:text-sm"
            style={{color: '#9ca3af'}}
          >
            <span className="inline-flex items-center gap-1">
              <ChevronDown className="w-3 h-3 md:w-4 md:h-4" /> Click on any entry to view details
            </span>
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Central vertical line - fixed positioning for mobile */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#52B2CF] to-[#52B2CF]/20"></div>
          
          <div className="relative z-10 pl-10 md:pl-0">
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
            className="mt-8 md:mt-12 flex justify-center relative z-10"
          >
            <a 
              href="/portfolio/Mohammad_Hasan_Resume.pdf" 
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              style={{
                backgroundColor: '#52B2CF',
                color: '#ffffff'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#3e9bb8'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#52B2CF'}
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