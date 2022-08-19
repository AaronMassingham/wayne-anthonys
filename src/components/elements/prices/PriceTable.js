import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'

//Components
import PriceItem from './priceItem';
import ToggleButton from './ToggleButton';
import Button from '../../button/Button'

//Hook
import { useServicesQuery } from '../../../hooks/data/useServicesQuery'

//Styles
import { priceTable, togglePanel, toggleBtn, head, face } from '../prices/pricetable.module.css'


export default function Prices() {

    //WP Product Data
    const services = useServicesQuery();

    const [toggle, setToggle] = useState(true);

    const toggleView = () => {
        setToggle(!toggle) 
    };

    const list = {
      initial: {
        opacity: 0,
        height: 0,        
        transition: {
          height: { duration: .75 },
          when: 'beforeChildren',
          staggerChildren: 0.05,
        }
      },
      animate: {
        opacity: 1,
        height: 'auto',
        transition: {
          height: { duration: .75 },
          when: 'beforeChildren',
          staggerChildren: 0.05,
        }
      }
    }
    
    const item = {
      initial: { 
        opacity: 0, 
        scale: .92 
      },
      animate: { 
        opacity: 1, 
        scale: 1 
      },
    }
    
  
return (
<>

  <div className={ priceTable }>
    <ToggleButton onChildClick={ toggleView } toggleActive={ toggle }/>
    <div className='bdr-b-solid'>
      <AnimatePresence>
        {toggle 
        
        ? 
        
          <motion.ul
            initial="initial"
            animate="animate"
            exit="initial"
            variants={ list }
            key='2'
          >

            {services.wpPage.services.haircutsServices.map((service) => (
                <motion.li 
                    variants={ item }
                    key={service.name}
                >
                  <PriceItem title={service.cutsName} price={service.cutsPrice} details={service.cutsDescription}/>
                </motion.li>
            ))}

          </motion.ul>

        : 

          <motion.ul
            initial="initial"
            animate="animate"
            exit="initial"
            variants={ list }
            key='1'
          >
            {services.wpPage.services.shavesServices.map((service) => (
                <motion.li 
                    variants={ item }
                    key={service.name}
                >
                  <PriceItem title={service.shavesName} price={service.shavesPrice} details={service.shavesDescription}/>
                </motion.li>
            ))}
          </motion.ul>

        }
      </AnimatePresence>
    </div>
  </div>

  <div className={`flex-between ${ togglePanel }`}>

    <button 
      tabIndex={ 0 }
      onClick={ toggleView } 
      className={`${toggleBtn} ${toggle ? `${ head }` : `${ face }`}`}>
      <span>Head</span>
      <span>Face</span>
    </button>

    <a target="_blank" rel="noreferrer" href='https://booksy.com/en-gb/40645_wayne-anthonys-executive-barbers_barber-shop_1453453_hipperholme'>
      <Button text="Book Now" hasIcon>
        <span>
          <FontAwesomeIcon icon={ faHandScissors }/>
        </span>
      </Button>
    </a>

  </div>

  </>

  )
}