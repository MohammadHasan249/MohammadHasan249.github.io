import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TITLES = [
  "Software Engineer",
  "Web Developer",
  "AI Engineer",
  "Software Entrepreneur",
];

export default function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 1800);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 overflow-hidden">
      {/* Main Heading */}
      <h1 className="z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-center drop-shadow-xl" style={{color: '#ffffff'}}>
        Mohammad Hasan
      </h1>

      {/* Animated Subtitle */}
      <div className="z-10 mt-4 text-lg md:text-2xl text-center max-w-2xl font-medium flex flex-col items-center min-h-[2.5em]">
        <AnimatePresence mode="wait">
        <motion.span
            key={TITLES[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="font-semibold inline-block"
            style={{color: '#52B2CF'}}
        >
            {TITLES[index]}
        </motion.span>

        </AnimatePresence>
      </div>
      {/* Description */}
      <h3 className="z-10 text-xl md:text-2xl text-center max-w-2xl font-normal" style={{color: '#d1d5db'}}>
        I build software and businesses that solve real problems and make life better.
      </h3>
      {/* Call to Action */}
      <div className="z-10 mt-10 flex flex-wrap justify-center gap-4 text-lg">
        <button
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: '#5DE5DB',
              color: '#ffffff'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#46d2c9'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#5DE5DB'}
        >
            Get in Touch
        </button>
        <a
            href="/portfolio/Mohammad_Hasan_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            style={{
              border: '1px solid #7EC4CF',
              color: '#7EC4CF',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#7EC4CF';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#7EC4CF';
            }}
        >
            Download Resume
        </a>
      </div>

    </section>
  );
}