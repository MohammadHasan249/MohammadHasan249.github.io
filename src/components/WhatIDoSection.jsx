import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Palette, Zap, Sparkles, LineChart, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkillCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group shadow-zinc-950/5"
    >
      <CardHeader className="pb-3">
        <CardDecorator>{icon}</CardDecorator>
        <h3 className="mt-6 font-medium">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
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
  subtitle = "Specialized in creating engaging digital experiences through a combination of design and development skills.",
  skills = [
    {
      icon: <Palette className="size-6" aria-hidden />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces that enhance user experience and engagement.",
    },
    {
      icon: <Code className="size-6" aria-hidden />,
      title: "Web Development",
      description: "Building responsive, accessible websites and applications using modern frameworks and technologies.",
    },
    {
      icon: <Sparkles className="size-6" aria-hidden />,
      title: "Creative Direction",
      description: "Guiding projects from concept to completion with a focus on innovation and brand consistency.",
    },
    {
      icon: <Zap className="size-6" aria-hidden />,
      title: "Performance Optimization",
      description: "Enhancing website speed and efficiency to improve user experience and search engine rankings.",
    },
    {
      icon: <LineChart className="size-6" aria-hidden />,
      title: "Analytics & SEO",
      description: "Implementing data-driven strategies to increase visibility and drive meaningful traffic to your site.",
    },
    {
      icon: <MessageSquare className="size-6" aria-hidden />,
      title: "Content Strategy",
      description: "Developing compelling content that tells your story and connects with your target audience.",
    },
  ],
}) => {
  return (
    <section className="bg-muted/50 py-16 md:py-32 dark:bg-transparent">
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
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
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