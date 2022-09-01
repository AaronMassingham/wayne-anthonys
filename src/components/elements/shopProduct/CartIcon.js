import React from 'react'
import { motion } from "framer-motion"

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

//Styles 
import { cartPrompt } from './productblock.module.css'

export default function CartIcon() {

  const cartPromptAnim = {  
    tapAndHover: {
      x:'calc(-150px + 3rem)',
      transition: {
        duration:.5
      }
    }
  }

  return (

      <motion.div 
        className={ cartPrompt }
        whileTap="tapAndHover"
        whileHover="tapAndHover"
        variants={ cartPromptAnim }
      >
        <button>
          <FontAwesomeIcon icon={ faCartShopping }/>
        </button>
        <div>
          <a className="snipcart-checkout">View Cart</a>
        </div>
      </motion.div>

  )
}
