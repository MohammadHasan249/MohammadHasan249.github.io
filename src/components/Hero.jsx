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
      <h1 className="z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white drop-shadow-xl">
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
            className="text-[#52B2CF] font-semibold inline-block"
        >
            {TITLES[index]}
        </motion.span>

        </AnimatePresence>
      </div>
      {/* Description */}
      <h3 className="z-10 text-xl md:text-2xl text-center max-w-2xl text-gray-300 font-normal">
        I build software and businesses that solve real problems and make life better.
      </h3>
      {/* Call to Action */}
      <div className="z-10 mt-10 flex flex-wrap justify-center gap-4 text-lg">
        <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-[#5DE5DB] text-white font-semibold shadow-md hover:bg-[#46d2c9] transition-all duration-200"
        >
            Get in Touch
        </a>
        <a
            href="/Mohammad_Hasan_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="px-6 py-3 rounded-lg font-semibold border border-[#7EC4CF] text-[#7EC4CF] hover:bg-[#7EC4CF] hover:text-white transition-all duration-200"
        >
            Download Resume
        </a>
      </div>

    </section>
  );
} 