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
      title: "E-Commerce Dashboard",
      description: "A fully responsive admin dashboard for e-commerce platforms with real-time analytics and inventory management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&h=825",
      liveUrl: "https://example.com/demo",
      githubUrl: "https://github.com/username/project",
      categories: ["Web App"]
    },
    {
      title: "Mobile Recipe App",
      description: "A cross-platform mobile application that allows users to discover, save and share cooking recipes.",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1374&h=825",
      liveUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/username/project2",
      categories: ["Mobile App"]
    },
    {
      title: "3D Puzzle Game",
      description: "An immersive 3D puzzle game built with Unity, featuring procedurally generated levels and physics-based gameplay.",
      image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=1372&h=825",
      liveUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/username/project3",
      categories: ["Game"]
    },
    {
      title: "Personal Finance Tracker",
      description: "A web application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1471&h=825",
      liveUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/username/project4",
      categories: ["Web App"]
    },
    {
      title: "AR Navigation App",
      description: "An augmented reality application that overlays navigation instructions on the real world through the camera view.",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1470&h=825",
      githubUrl: "https://github.com/username/project5",
      categories: ["Mobile App"]
    },
    {
      title: "2D Platform Game",
      description: "A retro-style platform game with pixel art graphics and challenging levels inspired by classic console games.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1470&h=825",
      liveUrl: "https://example.com/demo6",
      categories: ["Game"]
    }
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
          <div className="inline-flex items-center gap-2 p-1.5 bg-white/5 border border-[#52B2CF]/20 rounded-full mb-2 shadow-lg">
            <div className="flex items-center gap-1.5 ml-3 mr-2">
              <Filter className="w-5 h-5 text-[#52B2CF]" />
              <span className="text-sm font-medium text-muted-foreground">Filter:</span>
            </div>
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
                    : "hover:bg-white/10 hover:shadow-md"
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