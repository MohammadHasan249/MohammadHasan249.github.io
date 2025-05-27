import './App.css'
import Hero from "./components/Hero";
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <Hero />
    </motion.div>
  )
}

export default App
