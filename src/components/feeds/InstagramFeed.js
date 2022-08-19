import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


//Components
import Button from '../button/Button'

//Styles
import { instagramFeed, images, img, overlay } from '../feeds/instagramFeed.module.css'

//Data Hook
//import { useInstagramQuery } from '../../hooks/data/useInstagramQuery'

export default function InstagramFeed() {

    return (
   
        <>
        <div className={ instagramFeed }>
            <div className={ overlay }>
                <h2 className='fancy'>On the Gram</h2>
                <Button text="Follow Us" hasIcon>
                    <span>
                        <FontAwesomeIcon icon={ faInstagram }/>
                    </span>
                </Button>
            </div>
            <div className={ images }>

                <div className={ img }>
                <StaticImage
                    src="../../images/instagram/bar.jpg"
                    alt="Photo of the bar area"
                    placeholder="blurred"
                    width={400}
                    height={400}
                />
                </div>
                <div className={ img }>
                <StaticImage
                    src="../../images/instagram/room.jpg"
                    alt="Photo of the barbershop"
                    placeholder="blurred"
                    width={400}
                    height={400}
                />
                </div>
                <div className={ img }>
                <StaticImage
                    src="../../images/instagram/cut.jpg"
                    alt="Photo of a hair cut"
                    placeholder="blurred"
                    width={400}
                    height={400}
                />
                </div>
  
            </div>
        </div>
        </>
    )
}
