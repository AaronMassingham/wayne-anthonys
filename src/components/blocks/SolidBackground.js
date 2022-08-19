import React from 'react'
import { motion } from "framer-motion"

//Styles
import { background } from '../blocks/solidbackground.module.css'

const SolidBackground = ( props ) => {

//Background Animation FM Variants
const backgroundAnimation = {  
  initial: { 
    opacity: 0,
    transition: {
      duration:1
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration:1
    }
  },
}

//Content Animation FM Variants 
const contentAnimation = {  
  initial: { 
    opacity: 0,
    y: -30,
    transition: {
      duration:1
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration:1
    }
  },
}

  return (
    <section>
      <motion.div
      className={ background }
      variants={ backgroundAnimation }
      initial="initial"
      animate="animate"
      exit="initial"
      key={props.key}
      >
      </motion.div>
      <motion.div
        className='content'
        variants={ contentAnimation }
        initial="initial"
        animate="animate"
        exit="initial"
        >
          { props.children }
        </motion.div>
    </section>
  )
}

export default SolidBackground