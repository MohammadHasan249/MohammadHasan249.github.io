import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Palette, Zap, Sparkles, LineChart, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkillCard = ({ icon, title, description }) => {
  // Clone the icon element and add the desired blue text color class
  const blueIcon = React.cloneElement(icon, {
    className: `${icon.props.className || ''} text-[#52B2CF]`, // Add the specific blue color class
  });

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group shadow-zinc-950/5"
    >
      <CardHeader className="pb-3">
        <CardDecorator>{blueIcon}</CardDecorator>
        <h3 className="mt-6 text-xl text-center font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-muted-foreground">{description}</p>
      </CardContent>
    </motion.div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CardDecorator = ({ children }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">
      {children}
    </div>
  </div>
);

CardDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export const WhatIDoSection = ({
  title = "What I Do",
  subtitle = "Specialized in full-stack development, enterprise software solutions, and game development with a focus on creating efficient, scalable applications.",
  skills = [
    {
      icon: <Code className="size-10" aria-hidden />,
      title: "Full-Stack Web Development",
      description: "Building robust web applications using modern frameworks like React, Django, and Node.js. Experienced in creating everything from dynamic form builders to music collaboration platforms.",
    },
    {
      icon: <Zap className="size-10" aria-hidden />,
      title: "Enterprise Software Solutions",
      description: "Developing anti-piracy tools, licensing automation systems, and internal workflow tools that streamline business operations and increase productivity by 50%+.",
    },
    {
      icon: <Sparkles className="size-10" aria-hidden />,
      title: "Game Development",
      description: "Creating engaging gaming experiences with Unity and C#, from 2D platformers to complex simulation games, with expertise in performance optimization and blockchain integration.",
    },
    {
      icon: <LineChart className="size-10" aria-hidden />,
      title: "Data Science & AI",
      description: "Leveraging machine learning technologies including TensorFlow and PyTorch for intelligent solutions, with experience in neural networks and deep learning applications.",
    },
    {
      icon: <MessageSquare className="size-10" aria-hidden />,
      title: "API Development & Integration",
      description: "Building REST APIs and integrating third-party services like Spotify API, smart contracts, and CRM systems to create seamless user experiences.",
    },
    {
      icon: <Palette className="size-10" aria-hidden />,
      title: "Performance Optimization",
      description: "Optimizing applications for maximum efficiency, including reducing game sizes by 73% and improving licensing processes to cut setup time by 50%.",
    },
  ],
}) => {
  return (
    <section id="what-i-do" className="bg-muted/50 py-16 md:py-32 dark:bg-transparent">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <Card className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-x md:divide-y-0 overflow-hidden shadow-zinc-950/5">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

WhatIDoSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
}; 