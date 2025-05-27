import './App.css'
import Hero from "./components/Hero";
import { WhatIDoSection } from "./components/WhatIDoSection";
import { ScrollDivider } from "./components/ScrollEffects";
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <Hero />
      <ScrollDivider text={"Scroll to explore"} />
      <WhatIDoSection />
    </motion.div>
  )
}

export default App
