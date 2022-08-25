import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

//style
import { header, nav_container } from '../header/header.module.css'

//Components
import NavContainer from '../nav/NavContainer'
import Logo from '../logo/Logo'
import Burger from '../nav/Burger'

//Hooks
import useMediaQuery from '../../hooks/utils/useMediaQuery'

export default function HeaderTwo() {

  const matches = useMediaQuery('(max-width: 770px)')

  const [toggle, setToggle] = useState(false);

  const navAnim = {
    initial: {
      opacity: 0, 
      y:-30,       
      transition: {
        duration: 1,
      }
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .75,
      }
    }
  }

  return ( 
    <>

      <div className={ header }>
        <Logo/>      
        { matches ? <Burger toggle={ setToggle } toggleActive={ toggle }/> : null }
      </div>

      {matches ? 
        <><AnimatePresence exitBeforeEnter>
          { toggle && (
            
            <motion.div 
              className={ nav_container }
              initial="initial"
              animate="animate"
              exit="initial"
              variants={ navAnim }
            >
              <NavContainer toggle={ setToggle } toggleActive={ toggle }/>
            </motion.div>
            
          ) }</AnimatePresence>
        </>
      
      : 
      
        <div className={ nav_container }>
          <NavContainer toggle={ setToggle } toggleActive={ toggle }/>
        </div>
      
      }

    </>
  )
}