import React from 'react'
import { motion } from "framer-motion"

//Components
import Face from '../prices/Face'

//Styles
import {frame, container, arrowsSvg, face, head} from '../prices/togglebutton.module.css'

export default function ToggleButton({ onChildClick, toggleActive, toggle }) {

    const item = {
        head: { 
          rotate: 0,
          transition: {
            duration:1,
            type: 'spring'
          }
        },
        face: { 
          rotate: 180,
          transition: {
            duration:1,
            type: 'spring'
          }
        },
    }

  return (
    <div>
        <div 
          aria-label="Toggle Between Cuts and Shaves"
          tabIndex={0}
          role='button' 
          onClick={ onChildClick }
          onKeyDown={ onChildClick }
          className={`${container} ${toggleActive ? `${head}` : `${face}`}`}
        >
          <h2>Head</h2>
          <div className={frame} >
              <motion.svg
              variants={item} 
              animate={toggleActive ? "head" : "face"}
              className={arrowsSvg} 
              style={{ originX: 'center', originY:'center' }}
              viewBox="0 0 230.9 52.5">
                  <path d="M0 25.5 27 0 11.8 25.9l13.7 26.6z"/>
                  
              </motion.svg>
              <Face toggleActive={ toggleActive }/>
          </div>
          <h2>Face</h2>
        </div>
    </div>
  )
}

