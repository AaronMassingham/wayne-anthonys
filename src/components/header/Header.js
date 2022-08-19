import React, { useState } from 'react'

//style
import { header, mobileHeader, copyright, navOpen, navClosed, nav_container, backdrop } from '../header/header.module.css'

//Components
import Nav from '../nav/Nav'
import Logo from '../logo/Logo'
import Burger from '../nav/Burger'
import Social from '../social/Social'

export default function Header() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className={`testhdr ${ header } ${toggle ? `${navOpen}` : `${navClosed}`}`}>


      <div className={mobileHeader}>
        <Logo/>
        <Burger toggle={ setToggle } toggleActive={ toggle }/>
      </div>


      <div className={ nav_container }>

        <div>
          <Nav toggle={ setToggle } toggleActive={ toggle }/>
        </div>

        <div className='flex-between bdr-t-solid'>
          <h4 className='text-center'>01422 202 848</h4>
        </div>

        <div className='bdr-t-solid'>
          <Social />
        </div>

        <div className={`bdr-t-solid flex-between ${ copyright }`}>
          <span>&copy; 2022 Wayne Anthony</span>
          <span>&frasl; &frasl;</span>
          <span>Built Off Grid by <a href="https://www.facebook.com/arnmMultimedia" rel="noreferrer" target="_blank">ARNM</a></span>
        </div>

      </div>

      <div className={`${ backdrop } ${toggle ? `${navOpen}` : `${navClosed}`}`}></div>
    </div>
    
  )
}