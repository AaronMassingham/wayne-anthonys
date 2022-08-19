import React from 'react'
import { motion } from "framer-motion"
//import gsap from 'gsap'

//Style 
import { animatedBg, bg } from './background.module.css'

export default function Background() {

  const marqueeVariants = {
    animate: {
      x: [0, 300],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className={ animatedBg }>
      <motion.div 
        className={ bg } 
        variants={marqueeVariants}
        animate="animate"
      >
      </motion.div>
    </div>

  )
}
