import React from 'react'

//style
import { button, small, icon, dark, uniform } from '../button/button.module.css'

export default function Button({type, disabled, isSmall, hasIcon, isDark, text, justIcon, children}) {

/*
    <Button text="Normal With Icon" hasIcon="yes" isSmall="">
      <span>
        <FontAwesomeIcon icon={ faHandScissors }/>
      </span>
    </Button>

    <Button text="Small With Icon" hasIcon="yes" isSmall="yes">
      <span>
        <FontAwesomeIcon icon={ faHandScissors }/>
      </span>
    </Button>

    <Button text="Normal No Icon" hasIcon="" isSmall=""/>

    <Button text="Small No Icon" hasIcon="" isSmall="yes"/>
*/


  return (
    <button 
      type={ type }
      disabled={ disabled }
      tabIndex={ 0 }
      
      className={`
        ${ button }  
        ${ isSmall ? small : '' }
        ${ hasIcon ? icon : '' }
        ${ isDark ? dark : '' }
        ${ justIcon ? uniform : '' }
      `}>
      { children }{ text }
    </button>
  )
}
