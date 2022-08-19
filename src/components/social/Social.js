import React from 'react'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

//Styles
import { social } from '../social/social.module.css'

export default function Social() {
  return (
    <div className={`flex-between ${ social }`}>
      <a 
        href='https://www.facebook.com/WayneAnthonysBarbers/' 
        target='_blank' 
        rel="noreferrer"
      >
        <FontAwesomeIcon 
          icon={ faFacebookF }
        />
      </a>
      <a 
        href='https://www.instagram.com/wayneanthonys/' 
        target='_blank' 
        rel="noreferrer"
      > 
        <FontAwesomeIcon 
          icon={ faInstagram }
        />
      </a>
      <a 
        href='https://www.youtube.com/watch?v=-OwNWgj-NFk' 
        target='_blank' 
        rel="noreferrer"
      >
        <FontAwesomeIcon 
          icon={ faYoutube }
        />
      </a>
      <a 
        href='https://twitter.com/WAnthonys' 
        target='_blank' 
        rel="noreferrer"
      >
        <FontAwesomeIcon 
          icon={ faTwitter }
        />
      </a>
    </div> 
  )
}
