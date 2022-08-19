import React from 'react'
import { motion } from "framer-motion"

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHandScissors } from '@fortawesome/free-solid-svg-icons'

//Components
import Button from '../button/Button'

//Style
import { footer, openingTimes, details } from '../footer/footer.module.css'

export default function Footer() {
  return (

        <motion.div className={ footer }>
            <div className={details}>
                <div>
                    <h2 className='fancy'>Wayne Anthony's</h2>
                    <h4>Executive Barbers</h4>
                </div>
                
                <div>
                    <p>01422 202848</p>
                    <p>LPR Business Park<br/> Halifax Road<br/> Hipperholme<br/> Halifax<br/> HX3 8ER</p>
                    <div><FontAwesomeIcon icon={ faLocationDot }/> Get Directions</div>
                </div>
            </div>
            <div className={ openingTimes }>
                <div>
                    <h4>Sun Mon</h4>
                    <span>Closed</span>
                </div>
                <div>
                    <h4>Tue - Fri</h4>
                    <span>Appointment Only</span>
                </div>
                <div>
                    <h4>Sat</h4>
                    <span>9am - 4pm</span>
                </div>
                <div>
                    <a target="_blank" rel="noreferrer" href='https://booksy.com/en-gb/40645_wayne-anthonys-executive-barbers_barber-shop_1453453_hipperholme'>
                        <Button text="Book Now" hasIcon isSmall isDark>
                        <span>
                            <FontAwesomeIcon icon={ faHandScissors }/>
                        </span>
                        </Button>
                    </a>
                </div>
            </div>
        </motion.div>

  )
}
