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
      className="bg-white/5 border border-[#52B2CF]/20 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-[#52B2CF]/5 transition-all"
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
              className="text-xs px-2 py-1 rounded-full bg-[#52B2CF]/20 text-[#52B2CF] backdrop-blur-sm border border-[#52B2CF]/10"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#52B2CF] transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex gap-3">
          {liveUrl && (
            <motion.a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#52B2CF] font-medium bg-[#52B2CF]/10 px-3 py-1.5 rounded-full border border-[#52B2CF]/20 transition-all hover:bg-[#52B2CF]/20"
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
              className="flex items-center gap-1.5 text-sm text-[#52B2CF] font-medium bg-[#52B2CF]/10 px-3 py-1.5 rounded-full border border-[#52B2CF]/20 transition-all hover:bg-[#52B2CF]/20"
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
      title: "QuickForms",
      description: "A dynamic form-building web app utilizing Next.js and React, offering intuitive design capabilities with Tailwind CSS for customizable, embeddable forms. Incorporated Prisma for robust database management, allowing for seamless integration of form submissions with a variety of CRM systems, through each of their individual APIs, optimizing data flow and user engagement.",
      image: "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/MohammadHasan249",
      categories: ["Websites", "Applications"]
    },
    {
      title: "Controlify",
      description: "A full-stack web app that uses the Spotify API to allow users to login with their Spotify accounts, join rooms with other users, and control what music to play together. Built with React frontend and Django backend for seamless music collaboration.",
      image: "https://plus.unsplash.com/premium_photo-1682125896993-12a1758b6cb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/MohammadHasan249",
      liveUrl: "https://mohammadhasan249.github.io/",
      categories: ["Websites", "Applications"]
    },
    {
      title: "Job Applications Tracker",
      description: "A comprehensive full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) to help users efficiently track and manage their job applications throughout their career search process.",
      image: "/portfolio/images/jobstracker.jpg",
      githubUrl: "https://github.com/MohammadHasan249",
      liveUrl: "https://mohammadhasan249.github.io/",
      categories: ["Websites", "Applications"]
    },
    {
      title: "Dodge Time",
      description: "Grab your friends and play a futuristic multiplayer dodgeball knockout game with clones. A fast-paced multiplayer game built with Unity featuring real-time multiplayer mechanics and engaging gameplay.",
      image: "/portfolio/images/dodgetime.jpg",
      githubUrl: "https://github.com/MohammadHasan249",
      liveUrl: "https://mohammadhasan249.github.io/",
      categories: ["Game"]
    },
    {
      title: "Gladiator's Dilemma",
      description: "You have one objective: Survive. Loyalties are tested in this intense multiplayer game. A moral dilemma-based survival game where players must make tough decisions to stay alive.",
      image: "/portfolio/images/gdtitlepic.PNG",
      githubUrl: "https://github.com/MohammadHasan249",
      liveUrl: "https://mohammadhasan249.github.io/",
      categories: ["Game"]
    },
    {
      title: "E-Commerce App",
      description: "An online shopping platform to purchase items online easily. Both a website and an Android app. Complete e-commerce solution with shopping cart, payment integration, and user management.",
      image: "/portfolio/images/checkout.jpg",
      githubUrl: "https://github.com/MohammadHasan249",
      categories: ["Websites", "Applications"]
    },
    {
      title: "Math Speed Run",
      description: "Test your Math skills and see how many you can get right within 60 seconds. A time-based arithmetic challenge game that tests mathematical abilities under pressure.",
      image: "/portfolio/images/calculator.png",
      githubUrl: "https://github.com/MohammadHasan249",
      liveUrl: "https://mohammadhasan249.github.io/",
      categories: ["Websites", "Applications", "Game"]
    },
    {
      title: "Motion Detector",
      description: "A motion sensor which detects and tracks movement, and then outputs it onto a time-based graph. Advanced computer vision application for motion tracking and analysis.",
      image: "/portfolio/images/cctv.png",
      githubUrl: "https://github.com/MohammadHasan249",
      categories: ["ML / AI"]
    },
    {
      title: "Android Game Bundle",
      description: "A bundle of three mini-games: whack-a-mole, a Math arithmetic game, and a card memory game. Comprehensive Android gaming package with multiple entertaining games.",
      image: "/portfolio/images/cards.png",
      githubUrl: "https://github.com/MohammadHasan249",
      categories: ["Applications", "Game"]
    },
    {
      title: "Ninja Turtles Race",
      description: "Ever wondered who the fastest Ninja Turtle really is? Is it Leo? Raphael? Well, let's put it to the test. A fun racing game featuring the beloved Ninja Turtles characters.",
      image: "/portfolio/images/ninjaturtles.png",
      githubUrl: "https://github.com/MohammadHasan249",
      liveUrl: "https://mohammadhasan249.github.io/",
      categories: ["Game"]
    },
    {
      title: "JARVIS Virtual Assistant",
      description: "A JARVIS-like virtual assistant that listens to several commands, and acts on them. Voice-controlled AI assistant with natural language processing capabilities.",
      image: "/portfolio/images/jarvis.png",
      githubUrl: "https://github.com/MohammadHasan249",
      categories: ["ML / AI"]
    },
    {
      title: "Fruit Ninja Clone",
      description: "A remastered version of the classic mobile game Fruit Ninja, purely for the web. Engaging web-based game with smooth animations and responsive controls.",
      image: "/portfolio/images/fruitninja.png",
      githubUrl: "https://github.com/MohammadHasan249",
      liveUrl: "https://mohammadhasan249.github.io/",
      categories: ["Websites", "Applications", "Game"]
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
    <section id="projects" className="py-16 md:py-24 bg-muted/30 dark:bg-transparent">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
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
        </div>
        
        {/* Filter buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <div className="inline-flex items-center gap-2 p-1.5 mb-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-[#52B2CF] text-white shadow-md shadow-[#52B2CF]/20"
                    : "hover:bg-white hover:shadow-md hover:text-[#52B2CF]"
                }`}
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
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 inline-flex items-center gap-2 text-[#52B2CF] bg-[#52B2CF]/10 px-4 py-2 rounded-full font-medium"
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