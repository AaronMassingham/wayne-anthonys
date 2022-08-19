import React from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

//Layout Components
import Layout from '../components/layout/Layout'
import SolidBackground from '../components/blocks/SolidBackground'

//Content Components
import PriceTable from '../components/elements/prices/PriceTable'
import SubPageTitle from '../components/elements/SubPageTitle'
import Transplants from '../components/elements/transplants/Transplants'

export default function Services() {


  const backgroundAnimation = {  
    initial: { 
      opacity: 0,
      x:-25,
      transition: {
        duration:.5
      }
    },
    animate: {
      opacity: 1,
      x:0,
      transition: {
        duration:1
      }
    },
  }


  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [0, 500],
    [.1, 0]
  )

  const xPosition = useTransform(
    scrollY,
    [0, 500],
    [0, -100]
  )

  const xPositionSpring = useSpring(xPosition, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Layout>
      <motion.div 
          className='face-bg'
          variants={ backgroundAnimation }
          initial='initial'
          animate='animate'
          exit='initial'>
        <motion.div 
          style={{ opacity: opacity, x: xPositionSpring }}
          transition={{ type: "inertia", velocity: 50  }}
        />
      </motion.div>
      <SolidBackground key="title">
        <SubPageTitle
          largeText="Look Dapper"
          wingedText="With Our"
          fancyText="Cuts &amp; Shaves"
        />
      </SolidBackground>

      <SolidBackground>
          <PriceTable/>
      </SolidBackground>

      <SolidBackground>
          <Transplants/>
      </SolidBackground>
    </Layout>

  )
}
