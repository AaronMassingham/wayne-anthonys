import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//Styles
import { container, backdrop, modalClose } from './modal.module.css'

//Components
import Button from '../../button/Button';


export default function Modal( { children, setModal } ) {

    const toggleView = () => {
      setModal(false)
    };

    useEffect(() => {
        document.body.classList.add('noOverflow');
        return ()=> document.body.classList.remove('noOverflow');
    }, [])

    const modalAnimation = {  
        initial: { 
          opacity: 0,
          scale: .99,
          y: -30,
          transition: {
            duration:.5
          }
        },
        animate: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration:1
          }
        },
        exit: { 
          opacity: 0,
          scale: .99,
          y: 30,
          transition: {
            duration:.5
          }
        },
    }

    return (
                 
        <>
            <motion.div 
                key="modal"
                className={ container }
                variants={ modalAnimation }
                initial="initial"
                animate="animate"
                exit="exit"
            >
              <div className='content'>
                { children }
              </div>
              <span 
                  className={ modalClose }
                  onClick={ toggleView } 
                  onKeyDown={ toggleView } 
                  role="button" 
                  tabIndex={ 0 }
                >
                <Button isSmall justIcon>
                  <span>
                    <FontAwesomeIcon icon={ faTimes }/>
                  </span>
                </Button>
                </span>
            </motion.div>
            <motion.div 
                onClick={ () => setModal(false) }
                key="backdrop"
                className={ backdrop }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: {duration: 1, delay:.5} }}
            />
        </>

    )
}

