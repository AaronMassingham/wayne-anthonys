import React from 'react'
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
 
//Styles
import { background } from '../blocks/fullbackground.module.css';

const FullBackground = ( {children} ) => {

//Background Animation FM Variants
  const backgroundAnimation = {  
    initial: { 
      opacity: 0,
      scale:.95,
      transition: {
        duration:.25
      }
    },
    animate: {
      opacity: 1,
      scale:1,
      transition: {
        duration:.25
      }
    },
  }

//Content Animation FM Variants 
  const contentAnimation = {  
    initial: { 
      opacity: 0,
      y: -30,
      transition: {
        duration:.5
      }
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration:.5
      }
    },
  }

  return (
    <section className='overflow-hidden flex-center-xy hero'>
      <motion.div
          className={ background }
          variants={ backgroundAnimation }
          initial="initial"
          animate="animate"
          exit="initial"
          style={{ display: "grid" }}
        >
           <StaticImage 
            src="../../images/test.jpg" 
            alt={``}
            placeholder="blurred"
            layout="fullWidth"
            fit="cover"
            style={{
              gridArea: "1/1",
            }}
            formats={["auto", "webp", "avif"]}
          />
        </motion.div>
       
        <motion.div
            className='content'
            variants={ contentAnimation }
            initial="initial"
            animate="animate"
            exit="initial"
          >
            { children }
        </motion.div>
      </section>
  )
}

export default FullBackground