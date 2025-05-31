import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Gamepad2, Network, Brain, Zap, Settings } from "lucide-react";
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
  subtitle = "Specialized in building scalable software solutions, intelligent applications, and interactive experiences that solve real-world problems.",
  skills = [
    {
      icon: <Code className="size-10" aria-hidden />,
      title: "Full-Stack Web Development",
      description: "Create modern web applications using Next.js, Django, and many more. From dynamic form builders to AI-powered landing page generators, I build end-to-end solutions that are both user-friendly and technically robust.",
    },
    {
      icon: <Zap className="size-10" aria-hidden />,
      title: "Enterprise Software Solutions",
      description: "Build internal tools and business automation systems that streamline operations. Developed anti-piracy tools, licensing systems, and workflow automation that increased team productivity by 50%+.",
    },
    {
      icon: <Network className="size-10" aria-hidden />,
      title: "System Design & Architecture",
      description: "Plan and structure software systems for scalability and maintainability. Focus on clean architecture patterns, efficient data flow, and building applications that can grow with business needs.",
    },
    {
      icon: <Brain className="size-10" aria-hidden />,
      title: "AI/ML Engineering",
      description: "Develop intelligent applications using machine learning and modern AI technologies. From medical research algorithms to AI-powered business tools, I turn complex data into actionable insights.",
    },
    {
      icon: <Settings className="size-10" aria-hidden />,
      title: "Automation & Workflow Engineering",
      description: "Create intelligent automation systems that eliminate repetitive tasks and optimize business processes. Specializing in connecting different tools and services to create seamless workflows.",
    },
    {
      icon: <Gamepad2 className="size-10" aria-hidden />,
      title: "Game Development",
      description: "Design and develop engaging gaming experiences using Unity and C#. Specializing in multiplayer mechanics, performance optimization, and creating immersive gameplay that brings ideas to life.",
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