import React, {useEffect} from 'react'

//Components
import Nav from './Nav'
import Social from '../social/Social'

//Styles
import { copyright } from '../nav/nav.module.css'

export default function NavContainer({ toggle, toggleActive }) {

  return (
    <>
      <div 
        onClick={ () => toggle(!toggleActive)}
        onKeyDown={ () => toggle(!toggleActive)}
        tabIndex={ 0 }
        role="button" 
      >
        <Nav/>
      </div>

      <div className='flex-between bdr-t-solid'>
        <h4 className='text-center'>01422 202 848</h4>
      </div>

      <div className='bdr-t-solid'>
        <div>
          <Social />
        </div>
      </div>

      <div className={`bdr-t-solid ${ copyright }`}>
        <div className='flex-between'>
          <span>&copy; 2022 Wayne Anthony</span>
          <span>&frasl; &frasl;</span>
          <span>Built Off Grid by <a href="https://www.facebook.com/arnmMultimedia" rel="noreferrer" target="_blank">ARNM</a></span>
        </div>
      </div>
    </>
  )
} 
