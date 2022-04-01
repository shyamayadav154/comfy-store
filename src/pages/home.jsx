import React from 'react'
import Contact from '../components/contact/contact.component'
import Feature from '../components/featured/feature.component'
import Hero from '../components/hero/hero.component'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Feature />
      <Contact />
    </motion.div>
  )
}

export default Home
