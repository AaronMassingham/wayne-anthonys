import React from 'react'

import { burger_button, navOpen, navClosed } from '../nav/nav.module.css'

export default function Burger({ toggle, toggleActive }) {
  return (
    <button 
      onClick={() => toggle(!toggleActive)} 
      className={`${burger_button} ${toggleActive ? `${navOpen}` : `${navClosed}`}`}>
        <svg viewBox="0 0 50 50">
          <path d="M47.5 27.5h-45C1.1 27.5 0 26.4 0 25s1.1-2.5 2.5-2.5h45c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"/>
          <path d="M47.5 27.5h-45C1.1 27.5 0 26.4 0 25s1.1-2.5 2.5-2.5h45c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"/>
          <path d="M47.5 27.5h-45C1.1 27.5 0 26.4 0 25s1.1-2.5 2.5-2.5h45c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"/>
        </svg>
    </button>
  )
}
