import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import PropTypes from "prop-types";

const ProjectCard = ({ title, description, image, liveUrl, githubUrl, categories }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="border border-[#52B2CF]/20 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-[#52B2CF]/5 transition-all"
      style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {categories.map((category, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-[#52B2CF]/20"
              style={{
                backgroundColor: 'rgba(82, 178, 207, 0.2)',
                color: '#52B2CF'
              }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 transition-colors" style={{color: '#ffffff'}}>
          {title}
        </h3>
        <p className="mb-4" style={{color: '#9ca3af'}}>{description}</p>
        
        <div className="flex gap-3">
          {liveUrl && (
            <motion.a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-[#52B2CF]/20 transition-all"
              style={{
                color: '#52B2CF',
                backgroundColor: 'rgba(82, 178, 207, 0.1)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(82, 178, 207, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(82, 178, 207, 0.1)'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-[#52B2CF]/20 transition-all"
              style={{
                color: '#52B2CF',
                backgroundColor: 'rgba(82, 178, 207, 0.1)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(82, 178, 207, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(82, 178, 207, 0.1)'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" /> GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  liveUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const ProjectsSection = ({
  title = "My Projects",
  subtitle = "A showcase of my recent work and personal projects",
  projects = [
    {
      title: "AI Landing Page Generator",
      description: "An AI-powered platform that generates beautiful, high-converting landing pages in minutes. Features automated design generation, conversion optimization, and instant deployment. Built for entrepreneurs and agencies to rapidly test ideas and launch faster.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://www.genique.app/",
      githubUrl: "https://github.com/MohammadHasan249/landing-page-generator",
      categories: ["Websites", "Applications", "ML / AI"]
    },
    {
      title: "QuickForms",
      description: "A dynamic form-building web app utilizing Next.js and Prisma, offering customizable, embeddable forms. Seamlessly integrated form submissions with a variety of CRMs, through each of their individual APIs, optimizing data flow and user engagement.",
      image: "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/MohammadHasan249",
      categories: ["Websites", "Applications"]
    },
    {
      title: "Controlify",
      description: "A full-stack web app that uses the Spotify API to allow users to login with their Spotify accounts, join rooms with other users, and control what music to play together. Built with React frontend and Django backend for seamless music collaboration.",
      image: "https://plus.unsplash.com/premium_photo-1682125896993-12a1758b6cb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/MohammadHasan249/Controlify",
      categories: ["Websites", "Applications"]
    },
    {
      title: "Job Applications Tracker",
      description: "A comprehensive full-stack web application built with the MERN stack to help users efficiently track and manage their job applications throughout their career search process.",
      image: "/portfolio/images/jobstracker.jpg",
      githubUrl: "https://github.com/MohammadHasan249/JobsTrackerRepo",
      categories: ["Websites", "Applications"]
    },
    {
      title: "Dodge Time",
      description: "Grab your friends and play a futuristic multiplayer dodgeball knockout game with clones. A fast-paced multiplayer game built with Unity featuring real-time multiplayer mechanics and engaging gameplay.",
      image: "/portfolio/images/dodgetime.jpg",
      githubUrl: "https://github.com/MohammadHasan249",
      liveUrl: "https://haotian-luo.itch.io/dodge-time",
      categories: ["Game"]
    },
    {
      title: "Gladiator's Dilemma",
      description: "You have one objective: Survive. Loyalties are tested in this intense multiplayer game. A moral dilemma-based survival game where players must make tough decisions to stay alive.",
      image: "/portfolio/images/gdtitlepic.PNG",
      githubUrl: "https://github.com/MohammadHasan249/GladiatorsDilemma",
      categories: ["Game"]
    },
    {
      title: "E-Commerce App",
      description: "An online shopping platform to purchase items online easily. Complete e-commerce solution with shopping cart, payment integration, and user management.",
      image: "/portfolio/images/checkout.jpg",
      githubUrl: "https://github.com/MohammadHasan249/CheckoutCalculator---Web",
      categories: ["Websites", "Applications"]
    },
    {
      title: "Motion Detector",
      description: "A motion sensor which detects and tracks movement, and then outputs it onto a time-based graph. Advanced computer vision application for motion tracking and analysis.",
      image: "/portfolio/images/cctv.png",
      githubUrl: "https://github.com/MohammadHasan249/MotionDetector",
      categories: ["ML / AI"]
    },
    {
      title: "Sokoban Solver",
      description: "An AI model that solves instances of the classic Sokoban puzzle game in under 5 seconds. Implements advanced algorithms for optimal puzzle solving.",
      image: "https://images.unsplash.com/photo-1601063987324-7b482964872b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/MohammadHasan249/SokobanSolver",
      categories: ["ML / AI", "Applications"]
    },
    {
      title: "Keratoconus Research",
      description: "Medical ML research project focused on analyzing the Keratoconus eye condition data. Implements clustering algorithms and archetype analysis for pattern recognition in ophthalmological datasets, contributing to improved diagnosis and understanding treatment.",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/MohammadHasan249/KerataconusResearch",
      categories: ["ML / AI"]
    },
    {
      title: "Android Game Bundle",
      description: "A bundle of three mini-games: whack-a-mole, a Math arithmetic game, and a card memory game. Comprehensive Android gaming package with multiple entertaining games.",
      image: "/portfolio/images/cards.png",
      githubUrl: "https://github.com/MohammadHasan249/Game",
      categories: ["Applications", "Game"]
    },
    {
      title: "JARVIS Virtual Assistant",
      description: "A JARVIS-like virtual assistant that listens to several commands, and acts on them. Voice-controlled AI assistant with natural language processing capabilities.",
      image: "/portfolio/images/jarvis.png",
      githubUrl: "https://github.com/MohammadHasan249/Jarvis-VirtualAssistant",
      categories: ["Applications", "ML / AI"]
    },
  ],
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [categories, setCategories] = useState(["All"]);
  
  // Extract unique categories from projects
  useEffect(() => {
    const allCategories = ["All"];
    projects.forEach(project => {
      project.categories.forEach(category => {
        if (!allCategories.includes(category)) {
          allCategories.push(category);
        }
      });
    });
    setCategories(allCategories);
  }, [projects]);
  
  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.categories.includes(selectedCategory)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);
  
  return (
    <section id="projects" className="py-16 md:py-24" style={{backgroundColor: 'rgba(51, 60, 70, 0.1)'}}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance text-4xl font-semibold lg:text-5xl"
            style={{color: '#ffffff'}}
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg font-semibold max-w-2xl mx-auto"
            style={{color: '#52B2CF'}}
          >
            {subtitle}
          </motion.p>
        </div>
        
        {/* Filter buttons - improved responsive layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all border ${
                  selectedCategory === category
                    ? "text-white shadow-md shadow-[#52B2CF]/20 border-[#52B2CF]"
                    : "text-white border-white/20 hover:border-[#52B2CF] hover:text-[#52B2CF]"
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? '#52B2CF' : 'rgba(255, 255, 255, 0.05)'
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  opacity: { duration: 0.3 },
                  layout: { type: "spring", bounce: 0.2 }
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  categories={project.categories}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-xl" style={{color: '#9ca3af'}}>No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium"
                style={{
                  color: '#52B2CF',
                  backgroundColor: 'rgba(82, 178, 207, 0.1)'
                }}
              >
                View all projects
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      liveUrl: PropTypes.string,
      githubUrl: PropTypes.string,
      categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
}; 