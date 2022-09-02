import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'gatsby'

//style
import { header, nav_container, desktop, mobile } from '../header/header.module.css'

//Components
import NavContainer from '../nav/NavContainer'
import Logo from '../logo/Logo'
import Burger from '../nav/Burger'

//Media Query
import useMediaQuery from '../../hooks/utils/useMediaQuery'

export default function HeaderTwo() {

  const [toggle, setToggle] = useState(false);

  const matches = useMediaQuery('(max-width:770px)');

  if (toggle) {
    matches && document.body.classList.add('noOverflow');
  } else {
    matches && document.body.classList.remove('noOverflow');
  }

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
        <Link aria-current="page" to='/'>
          <Logo/>
        </Link>      
        <Burger toggle={ setToggle } toggleActive={ toggle }/>
      </div>


        <AnimatePresence exitBeforeEnter initial='false'>
          { toggle && (
            
            <motion.div 
              className={` ${nav_container} ${mobile} `}
              initial="initial"
              animate="animate"
              exit="initial"
              variants={ navAnim }
            >
              <NavContainer toggle={ setToggle } toggleActive={ toggle }/>
            </motion.div>
            
          ) }
        </AnimatePresence>

      
        <div className={` ${nav_container} ${desktop} `}>
          <NavContainer toggle={ setToggle } toggleActive={ toggle }/>
        </div>
      

    </>
  )
}